import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db(`${process.env.CLIENT_DB}`);

        const {
            clientFirstname,
            clientLastname,
            clientEmail,
            clientPhoneNumber
        } = req.body;

        const doc = {
            clientFirstname,
            clientLastname,
            clientEmail,
            clientPhoneNumber,
            clientCreatedAt: new Date(),
        };

        const result = await db.collection("clients").insertOne(doc);


        console.log(`A document with the _id: ${result.insertedId}`);
        res.status(200).json({message: "Документът е добавен успешно"})
    } catch(e) {
        console.error(e);
        res.status(500).json({message: "Вътрешна грешка"});
    }
}