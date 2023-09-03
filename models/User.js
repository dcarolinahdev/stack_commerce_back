import { Schema, model } from "mongoose";

let collection = "users";
let schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    photo: { type: String, required: true },
    address: { type: String, required: false },
    phone: { type: String, required: false },
    role: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

let User = model(collection, schema);
export default User;
