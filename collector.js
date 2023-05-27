const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const api = require("./private/api");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  console.log(req.body);

  const API_KEY = api.API_KEY;
  const { name } = req.body;
  const { email } = req.body;
  res.write(`Your name is: ${name} and your email is ${email} ${API_KEY}`);
  res.send();
});

app.use(express.static(__dirname + "/"));

app.listen(3000, () => console.log("Server started on port: 3000"));
