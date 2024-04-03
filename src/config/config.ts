import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

export const env = process.env;

export default async function startServer() {
  try {
    const dbUser = env.DB_USER;
    const dbPass = env.DB_PASSWORD;
    const dbName = env.DB_NAME;

    if (process.env.SECRET == null) {
      return console.log("SECRET não foi definido");
    }
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPass}@cluster.irye11p.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    );

    console.log("\nServidor está online");
  } catch (error) {
    console.error("Erro:", error);
  }
}
