const express = require('express');
const router = express.Router();

require('./routes/Employees')(router);

module.exports = router;