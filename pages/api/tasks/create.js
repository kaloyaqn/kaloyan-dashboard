import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
    try {
        const client = clientPromise;
        const db = process.env.CLIENT_DB;

        const {
            taskName
        } = req.body;

        const doc = {
            taskName,
            taskCreatedAt: new Date(),
        };

        const result = await db.collection("tasks").insertOne(doc);
        
        console.log(`A document with the _id: ${result.insertedId}`);
        res.status(200).json({message: "Документът е добваен успешно"});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Вътрешна грешла"});
    }
}