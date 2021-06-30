const { Router } = require("express");
const axios = require("axios");

// set up the express router
const standUp = Router();

/**
 * @apiRoute get '/stand-up' gets stand ups
 */

standUp.get("/", async (req, res) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_SECRET}`,
      "Notion-Version": process.env.NOTION_VERSION,
    },
  };
  const body = {};
  axios
    .post(
      "https://api.notion.com/v1/databases/2ab8ac2b80194014bb12d90ab06e2e62/query",
      body,
      headers
    )
    .then(
      (data) => {
        res.status(200).send(data.data.results);
      },
      (err) =>
        res.status(err.response.data.status).send(err.response.data.message)
    );
});

module.exports = standUp;
