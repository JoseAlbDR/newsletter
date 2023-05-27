const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const config = require("./private/config");
// const script = require("./script");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
// app.get("/"), (req, res) => res.sendFile(__dirname * "/success.html");
// app.get("/"), (req, res) => res.sendFile(__dirname * "/error.html");

app.post("/", (req, res) => {
  console.log(req.body);
  const LIST_ID = config.AUDIENCE_ID; // Your mailchimp LIST_ID goes here
  const API_KEY = config.API_KEY; // Your mailchimp API_KEY goes here
  const PREFIX = config.PREFIX; // Your server code goes here (last 3 chars of your API_KEY)
  const { name, lastName, email } = req.body;
  const url = `https://${PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}`;
  const options = { method: "POST", auth: `yusep:${API_KEY}` };
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: lastName,
        },
      },
    ],
  };

  client.setConfig({
    apiKey: API_KEY,
    server: PREFIX,
  });

  const run = async () => {
    const response = await client.lists.batchListMembers(LIST_ID, {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name,
            LNAME: lastName,
          },
        },
      ],
    });
    console.log(response);
    if (response.error_count === 0) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/error.html");
      // script.showError(response.errors[0].error_code);
    }
  };

  run();
  // const jsonData = JSON.stringify(data);

  // const request = https.request(url, options, (response) => {
  //   console.log(
  //     response.on("data", (data) => {
  //       console.log(JSON.parse(data));
  //     })
  //   );
  // });

  // request.write(jsonData);
  // request.end();
});

app.post("/success", (req, res) => res.redirect("/"));

app.post("/error", (req, res) => res.redirect("/"));

app.use(express.static(__dirname + "/"));

app.listen(3000, () => console.log("Server started on port: 3000"));
