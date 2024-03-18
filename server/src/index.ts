import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ClientModel from "./models/Client";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const uri = process.env.DB_CONN_STRING;
mongoose
  .connect(uri as string)
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    console.log("ERROR: ", err);
  });

app.get("/api/clients", async (req, res) => {
  try {
    const clients = await ClientModel.find();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("*", (req, res) => {
  res.send("Nothing found");
});

app.listen(port, () => {
  console.log(`Server is found at http://localhost:${port}`);
});
