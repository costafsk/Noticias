const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.set('engine view', 'ejs');
app.set('views', 'app/views/pages');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/database.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;