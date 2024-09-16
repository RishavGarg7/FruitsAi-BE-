import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import database from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

database();

app.use(express.json());
app.use(
  cors({
    origin: "https://fruits-ai-fe.vercel.app/",
  })
);
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Dev Server running on port: ${PORT}`);
});
