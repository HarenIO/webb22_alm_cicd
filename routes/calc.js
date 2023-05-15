const express = require('express');
const { Calculator } = require('../calculator');

const router = express.Router();
const calculator = new Calculator();

router.get('/add', (req, res, next) => {
  calculator.clearAll();
  const { val } = req.query;
  val.forEach((value) => {
    calculator.add(Number(value));
  });
  const result = calculator.getResult();
  res.send(result.toString());
});

module.exports = router;
