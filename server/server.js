var express = require("express");
var path = require("path");
const db = require("./database/index");
const routes = require("./controller/index");
const bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());

app.use("/", routes);
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
module.exports = app;
