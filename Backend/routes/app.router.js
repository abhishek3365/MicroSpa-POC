module.exports = (app) => {

    var appController = require('../controller/app.controller');
    var jwt = require('jsonwebtoken')

    app.route('/login')
      .post(appController.loginController.authenticateUser);
    
    app.use(function(req, res, next) {

      var token = req.body.token || req.get('x-access-token');
    
      if (token) {
    
        jwt.verify(token, 'digilab' , function(err, decoded) {			
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });		
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;	
            next();
          }
        });
    
      } else {
        if( req.path === '/login' ) {
          next();
        }
        else{
          return res.status(403).send({ 
            success: false, 
            message: 'No token provided.'
          });
        }
      }
      
    });
      
    app.route('/fruits')
        .get(appController.itemsController.getAllFruits);


}