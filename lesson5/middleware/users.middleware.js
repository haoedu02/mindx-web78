export const registerValidator = async (req, res, next) => {
  const { email, password, confirm_password } = req.body;
  const validateEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (password !== confirm_password) {
    throw new Error("Your password is invalid");
  }
  if (validateEmailRegex.test(email)) {
    throw new Error("Your email is invalid");
  }
  //   check is user exist
  const isUserExist = await UsersModel.findOne({ email });
  if (!isUserExist) {
    // tien hanh tao user
    return res.json({});
  } else {
    throw new Error("User is already exist");
  }
};
