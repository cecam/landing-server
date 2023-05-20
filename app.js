const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const AuthRouters = require('./router/auth')

const app = express();

//routing

//configure body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static files
app.use(express.static('uploads'))

//CORS
app.use(cors())

//routes
app.use(`/api/${process.env.API_VERSION}`, AuthRouters)

module.exports = app;
