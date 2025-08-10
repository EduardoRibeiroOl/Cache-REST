import conectar from "@/lib/mongo"

export const Validateuser = async (req) => {
    const conexao = await conectar()
    const db = conexao.db()
    const [email, password] = await req.json()
    
    if (!email){
       return Response.json(
        {erro: "não há o email no formulario"},
        {status: 404}
       ) 
    } else if (!password) {
        return Response.json(
        {erro: "não há o senha no formulario"},
        {status: 404}
        )
    }

    const validate = await db.collection("user") 

    /*fazer primeiro register para terminar aqui*/
    
}