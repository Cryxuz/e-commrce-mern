import { Schema, model } from "mongoose";
import { User } from "../models/user";

const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // purchasedItems:
});

// "user" is the name of the table
export const UserModel = model<User>("user", UserSchema);