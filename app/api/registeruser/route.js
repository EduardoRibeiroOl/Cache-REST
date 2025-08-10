import conectar from '@/lib/mongo'
import bcrypt from 'bcryptjs'

const postDB = async () => {
    const conexao = await conectar()
    return conexao.db()
}

export const POST = async (req) => {

    try {
        const db = await postDB()

        await db.collection("user").createIndex({ email: 1 }, { unique: true });
        console.log("Índice único criado para email.");

        const {name, email, password} = await req.json()

        if(!name){
            return Response.json(
                { erro: "nome não preenchido"},
                { status: 400}
            )
        } else if(!email){
            return Response.json(
                { erro: "email não preenchido"},
                { status: 400}
            )
        } else if(!password){
            return Response.json(
                { erro: "senha não preenchida"},
                { status: 400}
            )
        }

        
    const existuser = await db.collection("user").findOne({email}) 
    if (existuser){
        return Response.json(
            {erro: "usuario ja cadastrado"},
            {status: 409}
        )
    }
    
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    
    await db.collection("user").insertOne({
        name,
        email, 
        passwordHash: hash,
        createdAt: new Date()
    })

    return Response.json(
        { mensagem: "Dados salvos com sucesso!" },
        { status: 201 } // ← 201 para recursos criados
    );

    } catch(error){
        console.error("Erro:", error);
        return Response.json(
      { erro: error.message || "Erro interno" },
      { status: 500 }
    )}
}