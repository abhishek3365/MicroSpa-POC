module.exports =  ( itemsDao )  => {
    
    var ItemsService= {};

    ItemsService.getAllFruits = (  ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllFruits (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    ItemsService.getAllVegetables = (  ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllVegetables (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    ItemsService.getAllDairy = (  ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllDairy (  )
            .then( (result) => {
                resolve( result );
            } , (error) => {
                reject(error);
            } )
        } );
    };

    ItemsService.getItemsForId = ( requestBody ) => {
        return new Promise( ( resolve,reject ) => {
            itemsDao.getAllDairy (  )
            .then( (result) => {

                Promise.all( [itemsDao.getAllFruits() , itemsDao.getAllVegetables() , itemsDao.getAllDairy()] )
                    .then( ( allResult ) => {

                        var ids = requestBody.items
                        if( ids === undefined )
                            reject("'items' parameter missing");

                        var items = [ ...allResult[0] , ...allResult[1] , ...allResult[2]  ];
                        var filteredItems = items.filter( (item) => {
                            var pos = ids.indexOf(item.itemId.toString());
                            return pos>-1;
                        } )

                        resolve( filteredItems );

                    } )
                    .catch( (error) => {
                        reject(error)
                    } )
                

            } , (error) => {
                reject(error);
            } )
        } );
    };

    return ItemsService;

};