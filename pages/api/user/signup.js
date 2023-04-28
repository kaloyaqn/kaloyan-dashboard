import clientPromise from "../../../lib/mongodb";
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt'


export default async function handle(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("kaloyan_dashboard");

        const {firstname, lastname, email, password} = req.body;

        const doc = {
            firstname,
            lastname,
            email,
            password,
            createdAt: new Date()
        };

        const user = await db.collection("users").insertOne(doc);

        //generatevame jwt token da mojem da lognem usera sled kato se e registriral
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.setHeader(
            'Set-Cookie',
            `token=${token}; HttpOnly; Path=/; Expires=${new Date (
                Date.now() + 86400000 //1 day in milliseconds
            ).toUTCString()}; SameSite=Strict`
        );

        res.status(200).json({message: "Signed up successfully"});
    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Internal server error"})
    }
}