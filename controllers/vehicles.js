// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

// In order to reference data from a different file you need to require it and store it in a variable.
const vehicles = require("../data/vehicles.js");

const list = (req, res)=> {
  res.json(vehicles);
};

const show = (req, res)=> {
  res.json(vehicles[req.params.id-1]);
};

const create = (req, res)=> {
  const newId = vehicles.length + 1;
  console.log(req);
  req.body._id = newId;
  vehicles.push(req.body);
  res.json(vehicles[vehicles.length-1]);
};

module.exports = { list, show, create};