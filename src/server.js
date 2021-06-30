import app from "./index";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

module.exports = server;
