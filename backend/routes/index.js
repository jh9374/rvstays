//Using express to create router
const express = require('express');
const app = require('../app');
const router = express.Router();
const apiRouter = require("./api");
//setting api routes, "/api" path will be prefixed to all api routes
router.use('/api', apiRouter);
//setting router path for /hello/world
// router.get('/hello/world', function(req,res) {
//     //setting cookie for csrf token
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     //setting response
//     res.send('Hello World!');
// });

module.exports = router;