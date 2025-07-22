import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongodb connected. DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error: ", error);
    process.exit(1);
  }
};

export default dbConnection;
