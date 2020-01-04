var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('begin', { title: '科普江湖-来江湖，做大侠！' });
});

module.exports = router;