import { getServerSession } from "next-auth";
import { authOptions } from "./...[nextauth]";

export default async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
        res.send({
            content: 
            "Нямате достъп до това съдържание, понеже не сте оторизирани."
        })
    } else {
        res.send({
            error:
            "Трябва да сте оторизиран!"
        })
    }
}