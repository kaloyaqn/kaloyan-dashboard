import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';
import bcrypt, { hash } from 'bcrypt'

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db('kaloyan_dashboard');

        const {email, password} = req.body;

        const user = await db.collection('users').findOne({email});

        if (!user) {
            return res.status(401).json({message: "Email not found"})
        }

        const hashedUserPassword = await bcrypt.hash(user.password, 10);

        if (await bcrypt.compare(password, hashedUserPassword)) {
            const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
                expiresIn: '1d',
            });

            res.setHeader(
                'Set-Cookie',
                `token=${token}; HttpOnly; Path=/; Expires=${new Date (
                    Date.now() + 86400000 //1 day in milliseconds
                ).toUTCString()}; SameSite=Strict`
            );

            return res.status(200).json({message: 'Login successful', token})
        } else {
            return res.status(401).json({message: "Invalid password"});
        }
    } catch (e) {
        console.error(e);
    }
};