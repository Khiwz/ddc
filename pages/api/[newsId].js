import { MongoClient, ObjectId } from "mongodb";

const url = process.env.NEXT_PUBLIC_DB_URL;
const client = new MongoClient(url);
const dbName = process.env.NEXT_PUBLIC_DB_NAME;
const collectionName = "news";

async function handler(req, res) {
  const newsId = req.query.newsId;
  //   console.log("request =>", req.query.newsId);

  if (req.method === "GET") {
    const connectDB = await client.connect();
    // console.log("Connected successfully to server");

    const db = connectDB.db(dbName);
    const findResult = await db
      .collection(collectionName)
      .findOne({ _id: ObjectId(newsId) });
    // console.log("Found documents =>", findResult);
    connectDB.close();
    res.status(200).json({ result: findResult });
  }
}

export default handler;
