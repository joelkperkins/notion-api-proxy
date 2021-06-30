import app from "./index";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

module.exports = server;
