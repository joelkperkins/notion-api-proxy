const express = require("express");
const routes = require("./routes/index.route");
const cors = require("cors");

// set up app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ping
app.get("/ping", (req, res) => res.status(200).send("OK"));

// routes
app.use("/tasks", routes.tasks); // gets tasks db
app.use("/stand-up", routes.standUp); // gets stand-up db

module.exports = app;
