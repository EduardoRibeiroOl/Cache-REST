import { cookies } from "next/headers"

export const POST = async (req) => {
    const cookiestorage = cookies()
    const gettoken = cookiestorage.get("token")?.value

    if (!gettoken) {
        return Response.json({ error: "token not found" })
    }

    return Response.json({value: gettoken})
}