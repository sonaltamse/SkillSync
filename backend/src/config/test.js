import "dotenv/config";
import { MongoClient } from "mongodb";

console.log(process.env.DB_HOST);

const client = new MongoClient(process.env.DB_HOST);

try {
    await client.connect();
    console.log("✅ Connected!");
    await client.close();
} catch (err) {
    console.error(err);
}