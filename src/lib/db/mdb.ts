import { MongoClient } from "mongodb";

if (process.env.MONGO_CONNECTION_STRING == null) {
  console.log("You need a MongoDB Database URI to run!");
  process.exit();
}
if (process.env.MONGO_DATABASE_NAME == null) {
  console.log("You need to specify a MongoDB Database Store to run!");
  process.exit();
}

export const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {});

export const mainDB = client.db(process.env.MONGO_DATABASE_NAME);
