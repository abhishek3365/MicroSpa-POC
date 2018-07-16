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

    ItemsController.getAllVegetables = (req, res) => {
        let txnID = shortid.generate();
        var requestBody = req.body;
        logger.logMessage("Request Received from : GET/vegetables" + "|" + requestBody, logger.LOG_LEVEL.verbose, 'REQUEST', txnID);
        itemsService.getAllVegetables().then((result) => {
            var responseJson = {
                success : true,
                payload : result
            }
            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : GET/vegetables" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } , (err) => {
            var responseJson = {
                success : false,
                payload : {},
                error : {
                    error_message : err
                }
            }
            res.status(404).send(responseJson);
            logger.logMessage("Response Sent for : GET/vegetables" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } ); 
    };

    ItemsController.getAllDairy = (req, res) => {
        let txnID = shortid.generate();
        var requestBody = req.body;
        logger.logMessage("Request Received from : GET/dairy" + "|" + requestBody, logger.LOG_LEVEL.verbose, 'REQUEST', txnID);
        itemsService.getAllDairy(  ).then((result) => {
            var responseJson = {
                success : true,
                payload : result
            }
            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : GET/dairy" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } , (err) => {
            var responseJson = {
                success : false,
                payload : {},
                error : {
                    error_message : err
                }
            }
            res.status(404).send(responseJson);
            logger.logMessage("Response Sent for : GET/dairy" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } ); 
    };

    ItemsController.getItems = (req, res) => {
        let txnID = shortid.generate();
        var requestBody = req.body;
        logger.logMessage("Request Received from : POST/items" + "|" + requestBody, logger.LOG_LEVEL.verbose, 'REQUEST', txnID);
        itemsService.getItemsForId( requestBody ).then((result) => {
            var responseJson = {
                success : true,
                payload : result
            }
            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : POST/items" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } , (err) => {
            var responseJson = {
                success : false,
                payload : {},
                error : {
                    error_message : err
                }
            }
            res.status(404).send(responseJson);
            logger.logMessage("Response Sent for : POST/items" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);
        } ); 
    };

    return ItemsController;

};