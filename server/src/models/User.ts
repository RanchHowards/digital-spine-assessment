import { Schema, model } from "mongoose";
import ClientModel from "./Client";

const usersSchema = new Schema({
  user: { type: String, required: true },
  organization: { type: Schema.Types.ObjectId, ref: ClientModel },
});

const UserModel = model("User", usersSchema, "users");

export default UserModel;
