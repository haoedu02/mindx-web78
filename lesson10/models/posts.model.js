import mongoose from "mongoose";
import Collections from "../constants/collections";
const postSchema = new mongoose.Schema({
  id: String,
  content: String,
  hashtags: String,
});
const UsersModel = mongoose.model(Collections.POSTS, postSchema);
export default postSchema;
