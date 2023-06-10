// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

// In order to reference data from a different file you need to require it and store it in a variable.
const products = require("../data/products.js");

const list = (req, res)=> {
  res.json(products);
};

const show = (req, res)=> {
  res.json(products[req.params.id-1]);
};

const create = (req, res)=> {
  const newId = products.length + 1;
  console.log(req);
  req.body._id = newId;
  products.push(req.body);
  res.json(products[products.length-1]);
};

module.exports = { list, show, create};