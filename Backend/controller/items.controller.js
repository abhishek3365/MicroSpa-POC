module.exports =  ( itemsService )  => {
    
    var ItemsController= {};
    var logger = require('../error-handling-logger/Logger');
    const shortid = require('shortid');

    ItemsController.getAllFruits = (req, res) => {
        let txnID = shortid.generate();
        var requestBody = req.body;
        logger.logMessage("Request Received from : GET/fruits" + "|" + requestBody, logger.LOG_LEVEL.verbose, 'REQUEST', txnID);
        itemsService.getAllFruits().then((result) => {
            var responseJson = {
                success : true,
                payload : result
            }
            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : GET/fruits" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } , (err) => {
            var responseJson = {
                success : false,
                payload : {},
                error : {
                    error_message : err
                }
            }
            res.status(404).send(responseJson);
            logger.logMessage("Response Sent for : GET/fruits" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } ); 
    };

    return ItemsController;

};