const express = require("express");
const app = express();
const serverless = require("serverless-http");

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

module.exports = serverless(app);
