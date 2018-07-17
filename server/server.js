//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

mongoose.connect(
  "mongodb://autolist:autol1stl1te@ds129821.mlab.com:29821/autolist-lite",
  { useNewUrlParser: true }
);

app.use("/", router);

module.exports = app;
