import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import UserModel from "./models/User";

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

const checkJwt = auth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

app.use(cors());

app.get("/api/users", checkJwt, async (req, res) => {
  try {
    const auth = req.auth;
    if (!auth) throw new Error("No user found");
    const { payload } = auth;
    const users = await UserModel.findOne({ user: payload.sub }).populate(
      "organization"
    );
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("*", (_, res) => {
  res.send("Nothing here");
});

app.listen(port, () => {
  console.log(`Server is found at Port:${port}`);
});
