var usersDao = require('./users.dao')( );
var itemsDao = require('./items.dao')( );

var data_access_object = { usersDao , itemsDao };

module.exports = data_access_object;