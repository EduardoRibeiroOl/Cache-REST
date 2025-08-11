import conectar from "@/lib/mongo"
import bcrypt from 'bcryptjs'

export const POST = async (req) => {
    const conexao = await conectar()
    const db = conexao.db()
    const {frontemail, frontpassword} = await req.json()
    
    if (!frontemail){
       return Response.json(
        {erro: "não há o email no formulario"},
        {status: 404}
       ) 
    } else if (!frontpassword) {
        return Response.json(
        {erro: "não há o senha no formulario"},
        {status: 404}
        )
    }
    
    const existuser = await db.collection("user").findOne({ email: frontemail })

    if (!existuser){
        return Response.json(
            {erro: "não foi achado o email"},
            {status: 404}
        )
    }

    const {email, passwordHash} = existuser
    const hash = await bcrypt.compare(frontpassword, passwordHash)

    if (email == frontemail && hash){
        /*retornar token de acesso*/
        return Response.json(
            { mensagem: "mandado com sucesso" },
            { status: 201 } // ← 201 para recursos criados
        );  
    }    
    
}