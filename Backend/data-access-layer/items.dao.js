module.exports =  (  )  => {
    
    var itemsDao = {};
    
    fruits = require('../data/fruits.json');
    vegetables = require('../data/vegetables.json');
    dairy = require('../data/dairy.json');

    itemsDao.getAllFruits = ( email , password ) => {
        
        return new Promise( (resolve,reject) => {
            resolve( fruits )
        } );

    };

    itemsDao.getAllVegetables = ( email , password ) => {
        
        return new Promise( (resolve,reject) => {
            resolve( vegetables )
        } );

    };

    itemsDao.getAllDairy = ( email , password ) => {
        
        return new Promise( (resolve,reject) => {
            resolve( dairy )
        } );

    };

    return itemsDao;

};