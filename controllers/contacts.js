// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

// In order to reference data from a different file you need to require it and store it in a variable.
const contacts = require("../data/contacts.js");

const list = (req, res)=> {
  res.json(contacts);
};

const show = (req, res)=> {
  res.json(contacts[req.params.id-1]);
};

const create = (req, res)=> {
  const newId = contacts.length + 1;
  console.log(req);
  req.body._id = newId;
  contacts.push(req.body);
  res.json(contacts[contacts.length-1]);
};

module.exports = { list, show, create};