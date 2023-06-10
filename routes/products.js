// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

//In order to use the router object we must get it from express.
const router = express.Router();

//In order to use the controller file we must require it.
// The controller has the logic that will handle this request.
const controller = require('../controllers/products.js');

// Instead of app.get, here we are using the router object directly, which will route the request appropriately.
router.get('/products', controller.list);

router.get('/products/:id', controller.show);

router.post('/products', controller.create);

// Here we are exporting our router object.
module.exports = router;
