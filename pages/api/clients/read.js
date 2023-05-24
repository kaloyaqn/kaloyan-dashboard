import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("kaloyan_dashboard");

        const clients = await db
            .collection("clients")
            .find({})
            .sort({createdAt: -1})
            .toArray();

        res.status(200).json(clients);

    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"})
    }
}