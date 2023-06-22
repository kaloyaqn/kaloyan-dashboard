import clientPromise from "@/lib/mongodb";
import { Rss } from "lucide-react";
import {ObjectId} from "mongodb";

export default async function handle(req, res) {
    try {
        const {id} = req.query;

        if (!id || (typeof id !== "string" && typeof id !== "number")) {
            console.error("Invalid id format");
            res.status(400).json({message: "Invalid id format"});
            return;
        }

        const client = await clientPromise;
        const db = client.db(`${process.env.CLIENT_DB}`);

        const objectId = new ObjectId(id);

        console.log(objectId);

        const result = await db.collection("clients")
            .deleteOne({_id: objectId});
        
        if (result.deletedCount === 0) {
                console.log(`No document found with _id ${id}`);
                res.status(404).json({message: "Document not found"});
        } else {
                console.log(`Document with _id ${id} deleted successfully`);
                res.status(200).json({message: "Document deleted successfully"});
        }

    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"});
    }
}