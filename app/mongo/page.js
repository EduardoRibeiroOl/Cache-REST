"use client"
import React, { useState, useEffect } from "react"

export default function UserPage() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])

  // Carrega usuários ao iniciar
  useEffect(() => {
    fetchUsuarios()
  }, [])

  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch("/api/getuser")
      if (resposta.ok) {
        const dados = await resposta.json()
        setUsuarios(dados)
      }
    } catch (erro) {
      console.error("Erro ao buscar usuários:", erro)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const resposta = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, idade }),
      })

      if (resposta.ok) {
        await fetchUsuarios() // Atualiza a lista após cadastro
        setNome('')
        setIdade('')
        alert("Usuário salvo com sucesso!")
      }
    } catch (erro) {
      console.error("Erro:", erro)
      alert("Erro ao salvar usuário")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuários</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="idade" className="block text-sm font-medium text-gray-700">
              Idade
            </label>
            <input
              type="number"
              id="idade"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cadastrar
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Usuários Cadastrados</h2>
          <ul className="space-y-2">
            {usuarios.map((user) => (
              <li key={user._id} className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium text-sm text-gray-600">{user.nome}</p>
                <p className="text-sm text-gray-600">Idade: {user.idade}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/*// Importe a conexão com o MongoDB
import conectar from '@/lib/mongo';

// Página principal
export default async function TarefasPage() {
  // Busca os dados DIRETAMENTE no servidor (simples!)
  const conexao = await conectar();
  const db = conexao.db(process.env.MONGODB_DB);
  const tarefas = await db.collection('users').find().toArray();

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa._id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}*/