//server/routes/routes.js
var Vehicle = require("../models/Vehicle");
var Promise = require("bluebird");
var express = require("express");
var router = express.Router();

router.get("/api/vehicles/views", (req, res) => {
  let { vin } = req.query;
  return Vehicle.findManybyVins(vin)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.post("/api/vehicles/view/:vin", (req, res) => {
  const { vin } = req.params;
  return Vehicle.findAndIncrementViewsOrCreate(vin)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get("/*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
