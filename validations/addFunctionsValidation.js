const addData = require('../functions/addData');
module.exports = {
    addDataTestValidation: addDataTestValidation
}

function addDataTestValidation(req, callback) {
    const key = req.body.key
    const value = req.body.value;
    if (!key || !key.trim()) {

        err = {
            "status": 400,
            "message": 'fields should not be empty'
        }
        callback(err, "");

    } else {

        addData.addData(key, value)
            .then(function (result) {

                callback("", result);

            }).catch(function (err) {

                callback(err, "");
            })
    }
}
