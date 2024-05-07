import { USER_MESSAGE } from "../constants/messages.js";
import userService from "../services/users.service.js";

export const registerController = async (req, res, next) => {
  const { email, password } = req.body;
  await userService.register(email, password);
  return res.json({
    message: "Register Successfully",
  });
};

export const loginController = async (req, res, next) => {
  try {
    return res.json({
      message: "Login Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMeController = async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.getMe(id);
  return res.json({
    message: USER_MESSAGE.GET_ME_SUCCESSFULLY,
    result,
  });
};
