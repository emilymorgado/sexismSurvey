const express = require('express');
const router = express.Router();

router.get('/survey', function (req, res) {
  res.send('survey')
})