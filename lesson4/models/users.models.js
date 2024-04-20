import mongoose from "mongoose";
import Collections from "../constants/collections.js";
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
});
const UsersModel = mongoose.model(Collections.USERS, userSchema);
export default UsersModel;
