// Requiring the express module/framework.
const express = require("express");
// Requiring the body-parser NPM package.
const bodyParser = require("body-parser");

// Here we are requiring the mock data, our server will return.
// const contacts = require("./data/contacts.js");
// const vehicles = require("./data/vehicles.js");
// const comments = require("./data/comments.js");
// const products = require("./data/products.js");

// We are creating our express app here. This is the brain of our application.
const app = express();

//This is a .json method on the bodyParser object. This will parse the incoming request body as json for us.
app.use(bodyParser.json());

// Inject our routes using middleware before any requests are processed/handled.
// We need to require the files containing these routes and pass it directly into the app.use middleware.
// The middleware will give our app instructions when handling every request.
app.use(require("./routes/comments.js"));
app.use(require("./routes/contacts.js"));
app.use(require("./routes/products.js"));
app.use(require("./routes/vehicles.js"));

// This middleware makes the public directory directly accessible to the internet.
app.use(express.static('public'));

// Here we are creating 4 get routes with different endpoints.

// app.get('/contacts', (req, res)=> {
//   res.json(contacts);
// });

// app.get('/vehicles', (req, res)=> {
//   res.json(vehicles);
// });

// app.get('/comments', (req, res)=> {
//   res.json(comments);
// });

// app.get('/products', (req, res)=> {
//   res.json(products);
// });


// Here we are creating 4 different endpoints by using an ID
// app.get('/contacts/:id', (req, res)=> {
// We are substracting 1 because we are indexing into an array to get the correct contact

//   res.json(contacts[req.params.id-1]);
// });

// app.get('/vehicles/:id', (req, res)=> {
//   res.json(vehicles[req.params.id-1]);
//  });

// app.get('/comments/:id', (req, res)=> {
//   res.json(comments[req.params.id-1]);
//  });

// app.get('/products/:id', (req, res)=> {
//   res.json(products[req.params.id-1]);
// });

// Here we are creating post endpoints to create new entities with an autoincremented ID.
// app.post('/contacts', (req, res)=> {
  // Create a new variable that has the next available ID number
  // const newId = contacts.length + 1;
  // Setting the request body _id key to the newId
  // req.body._id = newId;
  // Adding the reqest body to our list of contacts
  // contacts.push(req.body);
  // Send the newly created contact back to the requestor as json data
  // res.json(contacts[contacts.length-1]);
// });

// app.post('/vehicles', (req, res)=> {
//   const newId = vehicles.length + 1;
//   req.body._id = newId;
//   vehicles.push(req.body);
//   res.json(vehicles[vehicles.length-1]);
// });

// app.post('/comments', (req, res)=> {
//   const newId = ccomments.length + 1;
//   req.body._id = newId;
//   comments.push(req.body);
//   res.json(comments[comments.length-1]);
// });

// app.post('/products', (req, res)=> {
//   const newId = products.length + 1;
//   req.body._id = newId;
//   products.push(req.body);
//   res.json(products[products.length-1]);
// });

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
