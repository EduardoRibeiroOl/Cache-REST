import conectar from "@/lib/mongo"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export const POST = async (req) => {
    const conexao = await conectar()
    const db = conexao.db()
    const { frontemail, frontpassword } = await req.json()

    if (!frontemail) {
        return Response.json(
            { erro: "não há o email no formulario" },
            { status: 404 }
        )
    } else if (!frontpassword) {
        return Response.json(
            { erro: "não há o senha no formulario" },
            { status: 404 }
        )
    }

    const existuser = await db.collection("user").findOne({ email: frontemail })

    if (!existuser) {
        return Response.json(
            { erro: "não foi achado o email" },
            { status: 404 }
        )
    }

    const { email, passwordHash } = existuser
    const hash = await bcrypt.compare(frontpassword, passwordHash)

    if (email == frontemail && hash) {
        
        const JWT_SECRET = process.env.JWT_SECRET;

        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET não está definido nas variáveis de ambiente");
        }

        const token = jwt.sign(
            { id: existuser._id, email: existuser.email },
            JWT_SECRET,
            { expiresIn: "1d" }
          );
      
          const cookieStore = cookies();
          cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/"
          });
      
          return Response.json({ mensagem: "Login bem-sucedido" }, { status: 200 });
    }

    return Response.json({ erro: "Senha incorreta" }, { status: 401 });

}