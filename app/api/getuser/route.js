import conectar from '@/lib/mongo';

// Conexão compartilhada
const getDb = async () => {
  const conexao = await conectar();
  return conexao.db();
};

// POST (mantido igual ao seu)
export const POST = async (req) => {
  try {
    const db = await getDb();
    const { nome, idade } = await req.json();

    if (!nome || !idade) {
      return Response.json(
        { erro: "Dados incompletos" },
        { status: 400 }
      );
    }

    await db.collection("usuarios").insertOne({ nome, idade: Number(idade) });
    return Response.json(
      { mensagem: "Usuário criado!" },
      { status: 201 }
    );

  } catch (error) {
    return Response.json(
      { erro: "Falha ao criar usuário" },
      { status: 500 }
    );
  }
};

// GET otimizado para sua página
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