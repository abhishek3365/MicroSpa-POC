var dao = require('../data-access-layer/app.dao');

var loginServices = require('./login.services')( dao.usersDao );
var itemsService = require('./item.services')( dao.itemsDao );

var app_services = { loginServices , itemsService };

module.exports = app_services;