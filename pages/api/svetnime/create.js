import clientPromise from "../../../lib/mongodb";

export default async function handle(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.CLIENT_DB}`);

    const {
      svetnimeProduct,
      svetnimeLink,
      svetnimeClientName,
      svetnimeClientNumber,
      svetnimeOrderShippingType,
      svetnimeSpeditorskaFirma,
      svetnimeClientAddress,
      svetnimeOrderStatus,
      svetnimeOrderPrice,
      svetnimePriceStatus,
      svetnimeBelejki,
    } = req.body;


    const doc = {
      svetnimeProduct,
      svetnimeLink,
      svetnimeClientName,
      svetnimeClientNumber,
      svetnimeOrderShippingType,
      svetnimeSpeditorskaFirma,
      svetnimeClientAddress,
      svetnimeOrderStatus,
      svetnimeOrderPrice,
      svetnimePriceStatus,
      svetnimeBelejki,
      projectCreatedAt: new Date(),
    };

    const result = await db.collection("svetnime").insertOne(doc);

    console.log(`A document with the _id: ${result.insertedId}`);
    res.status(200).json({ message: "Document added successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
