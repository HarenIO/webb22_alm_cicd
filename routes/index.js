const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { team: 'coolguys', mascot: 'sean banan' });
});

module.exports = router;
