import conectar from '@/lib/mongo';

export const POST = async (req) => {
  try {
    const conexao = await conectar();
    // Extrai o nome do banco diretamente da URI de conexão
    const db = conexao.db(); // ← Sem parâmetro, usa o banco da URI
    
    const { nome, idade } = await req.json();

    if (!nome || !idade) {
      return Response.json(
        { erro: "Nome e idade são obrigatórios" },
        { status: 400 }
      );
    }

    // Exemplo: Inserindo dados
    await db.collection("usuarios").insertOne({ nome, idade });
    
    return Response.json(
      { mensagem: "Dados salvos com sucesso!" },
      { status: 201 } // ← 201 para recursos criados
    );

  } catch (error) {
    console.error("Erro:", error);
    return Response.json(
      { erro: error.message || "Erro interno" },
      { status: 500 }
    );
  }
}