var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:idProduct', function (req, res) {
  const {idProduct} = req.params;
  res.status(200).json({name: 'jaime'});
});
module.exports = router;
