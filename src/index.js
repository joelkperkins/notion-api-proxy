import express from "express";
import routes from "./routes/index.route";
import cors from "cors";
const dotenv = require("dotenv");
dotenv.config();

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
