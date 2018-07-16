var appServices = require('../business-layer/app.services');

var loginController = require('./login.controller')( appServices.loginServices );

var app_controller = { loginController };

module.exports = app_controller;