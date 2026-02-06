import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

// DB connected
connectDB();

//Routes

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
