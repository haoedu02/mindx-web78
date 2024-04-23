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
  async login(user, password) {
    const hashPassword = user.password;
    const match = await bcrypt.compare(password, hashPassword);
    if (!match) {
      throw new Error("Your password is invalid");
    }
  }
  async getMe(id) {
    const user = await UsersModel.findOne({ _id: id });
    return user;
  }
}

const userService = new UserService();

export default userService;
