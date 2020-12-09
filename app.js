const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const expressError = require('express-error');
const mongoSanitize = require('express-mongo-sanitize');
const MongoDBStore = require("connect-mongo")(session);
const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(expressLayouts);
app.set('layout', './layouts/layout')
app.set("view engine", "ejs");

// Routes
const indexRouter = require('./routes/index-route');

// Routers
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});