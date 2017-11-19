const express = require('express');
const router = express.Router();

/* GET survey listing. */
router.get('/survey', function (req, res) {
  res.send('survey')
})