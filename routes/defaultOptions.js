const server = require('express').Router();
const defaultOptionsControllers = require('../controllers/defaultOptions');


server.get('' , defaultOptionsControllers.getDefaultOptions )

module.exports = server;