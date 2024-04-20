import express from "express";
import mongoose from "mongoose";
import UsersModel from "./models/users.models.js";

mongoose
  .connect(
    "mongodb+srv://haoedu02:Haotruong2805@web-78.ytjvdyh.mongodb.net/web-78"
  )
  .then(() => {
    console.log("MongoDB connect successfully");
  });
const app = express();
const PORT = 4000;
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  // Kiểm tra trong db đã có user tồn tại chưa, nếu chưa thì thực hiện đăng ký còn không thì trả ra lỗi
  try {
    const isUserExist = await UsersModel.findOne({ email });
    if (!isUserExist) {
      // tien hanh tao user
      return res.json({});
    } else {
      throw new Error("User is already exist");
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error ${err.message}`);
  } else {
    console.log(`Your server is listening on port ${PORT}`);
  }
});
