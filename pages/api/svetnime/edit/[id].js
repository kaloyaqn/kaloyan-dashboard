import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export default async function handle(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.CLIENT_DB}`);
    
    const { id } = req.query;

    if (!id || (typeof id !== "string" && typeof id !== "number")) {
        console.error("Invalid id format");
        res.status(400).json({message: "Invalid id format"});
        return;
    }

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

    const updateDoc = {
      $set: {
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
      },
    };

    const result = await db.collection("svetnime").updateOne(
      { _id: ObjectId },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Document not found" });
    }

    console.log(`A document with the _id: ${id} has been updated`);
    res.status(200).json({ message: "Document updated successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
