import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://bakery-mn8v.vercel.app/", // Vercel domain
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
