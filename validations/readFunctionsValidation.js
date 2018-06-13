const readData = require('../functions/readData');
module.exports = {
    readDataTestValidation: readDataTestValidation
}

function readDataTestValidation(req, callback) {
    const key = req.body.key;
    if (!key   || !key.trim()) {

        err = {
            "status": 400,
            "message": 'fields should not be empty'
        }
        callback(err, "");

    } else {

        readData.readData(key)
            .then(function (result) {

                callback("", result);

            }).catch(function (err) {

                callback(err, "");
            })
    }
}