var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET quiz page
router.post('/silkroute', function (req, res) {
  res.redirect('https://dare2compete.com/o/silk-route-quiz-e-cell-iiit-pune-153351');
});*/

module.exports = router;
