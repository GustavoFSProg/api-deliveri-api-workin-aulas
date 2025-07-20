import express from "express";
import cors from "cors";
import router from "./routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta: 3001");
});
