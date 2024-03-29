import express from "express";
import cors from "cors";
import startServer, { env } from "./config/config";

import publicRoutes from "./routes/public_routes";

const app = express();
const port = env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use("/", publicRoutes);

startServer()
  .then(() => {
    app.listen(port);
  })
  .catch(() => {
    console.log("Erro em StartServer");
  });
