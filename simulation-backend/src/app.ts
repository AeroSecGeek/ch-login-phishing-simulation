import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

// Enable CORS for requests from port 5173
app.use(cors({ origin: "http://localhost:5173" }));

// Database connection
mongoose.connect(process.env.MONGO_URI!);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
