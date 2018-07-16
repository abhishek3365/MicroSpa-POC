var appServices = require('../business-layer/app.services');

var loginController = require('./login.controller')( appServices.loginServices );
var itemsController = require('./items.controller')( appServices.itemsService );

var app_controller = { loginController , itemsController };

module.exports = app_controller;