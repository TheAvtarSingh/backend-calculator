//All Imports Start 1. express
import express from "express";
// 2. Dotenv
import dotenv from "dotenv";
// 3 . Mongoose
// DB fILE
// 4. Mongodb
import mongodb from "./db.js";
// 5. Define Schema - models folder
// 6. Define Routes - Routes folder
import AddData from "./Routes/AddData.js";
// Cors
import cors from "cors";

//Dotenv -  Include env file
dotenv.config({
  path: "./config.env",
});

// Cors

// Express
const PORT = process.env.PORT;
const mongouri = process.env.MONGO_URI;
const app = express();

// mongodb
mongodb(mongouri);

// Cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// All Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", AddData);

// Server
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
