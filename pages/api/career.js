import { MongoClient } from "mongodb";

const url = process.env.NEXT_PUBLIC_DB_URL;
const client = new MongoClient(url);
const dbName = process.env.NEXT_PUBLIC_DB_NAME;
const collectionName = "career";

async function handler(req, res) {
  // console.log("request", req.method);

  if (req.method === "GET") {
    const connectDB = await client.connect();
    // console.log("Connected successfully to server");

    const db = connectDB.db(dbName);
    const findResult = await db.collection(collectionName).find().toArray();
    // console.log("Found documents =>", findResult);

    connectDB.close();
    res.status(200).json({ result: findResult });
  } else if (req.method === "POST") {
    const postData = req.body;
    postData["postedDate"] = new Date().toISOString();
    const connectDB = await client.connect();
    // console.log("Connected successfully to server");

    const db = connectDB.db(dbName);
    const result = await db.collection(collectionName).insertOne(postData);
    // console.log("result =>", result);

    connectDB.close();
    res
      .status(201)
      .json({ result: "Posted completed", docId: result.insertedId });
  }
}

export default handler;
