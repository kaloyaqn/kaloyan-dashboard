import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db(`${process.env.CLIENT_DB}`);

        const projects = await db
            .collection("projects")
            .find({})
            .sort({createdAt: -1})
            .toArray();

        res.status(200).json(projects)
    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"});
    }
}