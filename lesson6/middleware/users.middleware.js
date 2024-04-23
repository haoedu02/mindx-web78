import UsersModel from "../models/users.models.js";

export const registerValidator = async (req, res, next) => {
  try {
    const { email, password, confirm_password } = req.body;
    const validateEmailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (password !== confirm_password) {
      throw new Error("Your password is invalid");
    }
    if (!validateEmailRegex.test(email)) {
      throw new Error("Your email is invalid");
    }
    //   check is user exist
    const isUserExist = await UsersModel.findOne({ email });
    if (!isUserExist) {
      // tien hanh tao user
      next();
    } else {
      throw new Error("User is already exist");
    }
  } catch (error) {
    next(error);
  }
};

export const loginValidator = async (req, res, next) => {
  try {
    const { email } = req.body;
    const validateEmailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!validateEmailRegex.test(email)) {
      throw new Error("Your email is invalid");
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
