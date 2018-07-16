var dao = require('../data-access-layer/app.dao');

var loginServices = require('./login.services')( dao.usersDao );

var app_services = { loginServices };

module.exports = app_services;