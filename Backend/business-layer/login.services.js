module.exports =  ( usersDao )  => {
    
    var LoginServices= {};
    
    var jwt = require('jsonwebtoken');

    /**
    * Check if the user is valid or not 
    * If found then returns the userId and type of user
    * If not then returns an appropriate error message
    * @param {*} requestBody request payload containing the email and password
    */
    LoginServices.authenticate = ( requestBody ) => {
        
        return new Promise( ( resolve,reject ) => {
            
            let email = requestBody.email;
            let password = requestBody.password;

            if( email === undefined || password === undefined )
                reject( 'Invalid Params' );

            usersDao.getUser ( email , password )
            .then( (result) => {
              
                var payload = { email }

                var token = jwt.sign( payload , 'digilab' , {
					expiresIn: 84600// expires in 24 hours
				});
                
                resolve( { 
                    userId : result.userId , 
                    email : result.email.trim() ,
                    name : result.name ? result.name.trim() : null ,
                    token : token
                } );
            }, (error) => {
                reject(error);
            } )

        } );

    };

    return LoginServices;

};