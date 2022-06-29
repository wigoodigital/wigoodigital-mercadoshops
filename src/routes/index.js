
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});
router.get('/notifications', function (req, res, next) {

    console.log(req);
    res.status(200).send({
        title: "Notification",
        version: "0.0.1"
    });
});

module.exports = router;
