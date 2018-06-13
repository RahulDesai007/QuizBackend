'use strict';

var bcSdk = require('../sdk/query');

/**
 * A module that will add data into the blockchain!
 * @module readData
 */
/** Add Data into blockchain.*/
exports.readData = (key) => {
    return new Promise((resolve, reject) => {


        bcSdk.readData(key)
            .then(function (result) {

                    return resolve({
                        "status": 200,
                        "data": result.response
                    })
                
            })
            .catch(err => {


                reject({
                    "status": 500,
                    "message": 'Something went wrong please try again later!!'
                });

            });
    });
}