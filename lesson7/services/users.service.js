import UsersModel from "../models/users.models.js";
import bcrypt from "bcrypt";

class UserService {
  async register(email, password) {
    const saltRounds = 10;
    // tạo chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(saltRounds);
    // thực hiện mã hoá với chuỗi salt
    const hashPassword = bcrypt.hashSync(password, salt);
    await UsersModel.create({ email, password: hashPassword });
  }
  async login(userId) {
    // Sinh ra access Token
    return "Login successfully";
  }
  async getMe(id) {
    const user = await UsersModel.findOne({ _id: id });
    return user;
  }
}

const userService = new UserService();

export default userService;
