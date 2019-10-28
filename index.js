const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./database/db');
const api = require('./api/app');

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})