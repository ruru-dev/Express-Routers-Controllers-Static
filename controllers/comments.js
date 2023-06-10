// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

// In order to reference data from a different file you need to require it and store it in a variable.
const comments = require("../data/comments.js");

const list = (req, res)=> {
  res.json(comments);
};

const show = (req, res)=> {
  res.json(comments[req.params.id-1]);
};

const create = (req, res)=> {
  const newId = comments.length + 1;
  console.log(req);
  req.body._id = newId;
  comments.push(req.body);
  res.json(comments[comments.length-1]);
};

module.exports = { list, show, create};