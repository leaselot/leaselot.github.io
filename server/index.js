require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/request-demo', routes.requestDemo);

let server = app.listen(process.env.PORT, () => {
	console.log(`Server listening on PORT ${process.env.PORT}`);
});

module.exports = server;