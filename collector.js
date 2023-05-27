const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  const { email } = req.body;
  res.write(`Your name is: ${name} and your email is ${email}`);
  res.send();
});

app.use(express.static(__dirname + "/"));

app.listen(3000, () => console.log("Server started on port: 3000"));
