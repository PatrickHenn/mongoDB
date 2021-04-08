const express = require('express');

// const router = express.Router();
const mainRoutes = express.Router();

mainRoutes.get('/', (req, res) => {
  res.render('../views/index');
});

module.exports = mainRoutes;
