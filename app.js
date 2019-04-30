
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

module.exports = router;

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const server =app.listen(port);
// setting up CORS //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(bodyParser.json());
require('./routes')(router);
app.use('/', router);
app.use(bodyParser.urlencoded({ extended: true }));
console.log("server running on port",port)