export const authenticationValidator = (req, res, next) => {
  const { isauthenticated } = req.headers;
  if (isauthenticated === "true") {
    // Người dùng đã được xác thực, cho phép truy cập
    next();
  } else {
    res.status(401).send("Unauthorized"); // Trả về lỗi 401 nếu không được xác thực
  }
};
