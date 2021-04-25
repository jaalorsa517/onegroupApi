const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get(
  '/',
  passport.authenticate('bearer', {session: false}),
  function (req, res, next) {
    res.send('respond with a resource');
  }
);

// router.get('/:idProduct', function (req, res) {
//   const {idProduct} = req.params;
//   res.status(200).json({name: 'jaime'});
// });
module.exports = router;
