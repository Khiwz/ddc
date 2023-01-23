import { MongoClient } from "mongodb";

const url = process.env.NEXT_PUBLIC_DB_URL;
const client = new MongoClient(url);
const dbName = process.env.NEXT_PUBLIC_DB_NAME;
const collectionName = "news";
const nPerPage = 9;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
    responseLimit: false,
  },
};

async function handler(req, res) {
  if (req.method === "GET") {
    const queryPage = req.query.page;
    console.log("Found req =>", queryPage);

    const connectDB = await client.connect();
    console.log("Connected successfully to server");

    const db = connectDB.db(dbName);
    // const findResult = await db.collection(collectionName).find().toArray();
    // console.log("Found documents =>", findResult);

    const totalRecord = await db.collection(collectionName).count();
    const nPage = Math.ceil(totalRecord / nPerPage);
    const resultPerPage = await db
      .collection(collectionName)
      .find()
      .sort({ _id: 1 })
      .skip((queryPage - 1) * nPerPage)
      .limit(nPerPage)
      .toArray();

    // console.log("total documents =>", totalRecord);
    // console.log("result documents =>", resultPerPage);

    connectDB.close();
    res.status(200).json({ result: resultPerPage, nPage });
  } else if (req.method === "POST") {
    const newsData = req.body;
    // console.log("request body", newsData);

    newsData["postedDate"] = new Date().toISOString();
    const connectDB = await client.connect();
    // console.log("Connected successfully to server");

    const db = connectDB.db(dbName);
    const result = await db.collection(collectionName).insertOne(newsData);
    // console.log("result =>", result);

    connectDB.close();
    res
      .status(201)
      .json({ result: "Posted completed", docId: result.insertedId });
  }
}

export default handler;
