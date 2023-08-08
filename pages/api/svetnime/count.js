import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db(`${process.env.CLIENT_DB}`);

        const projectCount = await db
            .collection("svetnime")
            .countDocuments({})

        
        res.status(200).json(projectCount)

    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"})
    }
}