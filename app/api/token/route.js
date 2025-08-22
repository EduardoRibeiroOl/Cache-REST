import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET 

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return new Response(JSON.stringify({ erro: "Não autenticado" }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return new Response(JSON.stringify({ usuario: decoded }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ erro: "Token inválido" }), { status: 401 });
  }
}
