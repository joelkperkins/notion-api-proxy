import { Router } from "express";
const axios = require("axios");

// set up the express router
const tasks = Router();

/**
 * @apiRoute POST '/tasks' gets all tasks from the task db in notion
 */

tasks.get("/", async (req, res) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_SECRET}`,
      "Notion-Version": process.env.NOTION_VERSION,
    },
  };
  const body = {};
  axios
    .post(
      "https://api.notion.com/v1/databases/c962c8100683493c949aeaa576664ffa/query",
      body,
      headers
    )
    .then(
      (data) => {
        res.status(200).send(data.data.results);
      },
      (err) => {
        console.log(err);
        res.status(err.response.data.status).send(err.response.data.message);
      }
    );
});

module.exports = { tasks };
