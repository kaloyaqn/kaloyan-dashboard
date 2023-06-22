import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.CLIENT_DB}`);

    const {
      projectTitle,
      projectLink,
      projectStatus,
      projectStatusPrice,
      projectType,
      projectDesc,
      clientFirstname,
      clientLastname,
      clientPhoneNumber,
      clientEmail,
      projectPrice,
    } = req.body;


    const doc = {
      projectTitle,
      projectLink,
      projectStatus,
      projectStatusPrice,   
      projectType,
      projectDesc,
      projectClientFirst: clientFirstname,
      projectClientLast: clientLastname,
      projectClientEmail: clientEmail,
      projectClientPhoneNumber: clientPhoneNumber,
      projectPrice,
      projectCreatedAt: new Date(),
    };

    const result = await db.collection("projects").insertOne(doc);

    console.log(`A document with the _id: ${result.insertedId}`);
    res.status(200).json({ message: "Document added successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
