const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const api = require("./private/api.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  console.log(req.body);
  const API_KEY = api.APY_KEY;
  const { name } = req.body;
  const { email } = req.body;
  const { lastName } = req.body;
  console.log(api);

  res.write(`Your name is: ${name} ${lastName} and your email is ${email}.`);
  res.send();
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => console.log("Server started on port: 3000"));
