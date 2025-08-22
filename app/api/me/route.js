import jwt from  "jsonwebtoken"
import { cookies } from "next/headers"

const JWT_SECRET = process.env.JWT_SECRET || "chave_secreta_bem_grande"

export const GET = async (req) => {
    const cookiestorage = cookies()
    const gettoken = cookiestorage.get("token")?.value

    if (!gettoken) {
        return Response.json({ error: "token not found" }, { status: 401 })
    }

    try {
    //decodificar as coisas
        const decoded = jwt.verify(gettoken, JWT_SECRET)
        const { _id, email } = decoded
        return Response.json({ _id, email}, {status: 200})

    } catch{
        return Response.json({error: "token invalido"}, {status: 404})
    }
    //retorna a string toda, oque não pode
    return Response.json({value: gettoken})
}