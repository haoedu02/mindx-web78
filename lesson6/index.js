import express from "express";
import userRoute from "./routes/users.route.js";
import databaseService from "./services/database.service.js";

const app = express();
const PORT = 4000;

app.use(express.json());

databaseService.connect();

// 3 tham số: request handler
// 4 tham số: error handler
app.use("/users", userRoute);

app.use((err, req, res, next) => {
  return res.json({ err: err.message });
});

app.listen(PORT, (err) => {
  console.log(`Your app is listening on ${PORT}`);
});
