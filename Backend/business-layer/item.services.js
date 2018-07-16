module.exports =  ( itemsDao )  => {
    
    var ItemsService= {};

    ItemsService.getAllFruits = ( requestBody ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllFruits (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    ItemsService.getAllVegetables = ( requestBody ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllVegetables (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    ItemsService.getAllDairy = ( requestBody ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllDairy (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    return ItemsService;

};