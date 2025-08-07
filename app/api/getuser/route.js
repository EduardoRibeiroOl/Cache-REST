import conectar from '@/lib/mongo';

// Conexão compartilhada
const getDb = async () => {
  const conexao = await conectar();
  return conexao.db();
};

// GET 
export const GET = async () => {
  try {
    const db = await getDb();
    const usuarios = await db.collection("usuarios")
                           .find({})
                           .sort({ _id: -1 }) // Ordena do mais novo para o mais antigo
                           .toArray();

    return Response.json(usuarios);

  } catch (error) {
    return Response.json(
      { erro: "Falha ao buscar usuários" },
      { status: 500 }
    );
  }
};