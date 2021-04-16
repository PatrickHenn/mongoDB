const express = require('express');
const { createOrder } = require('../controllers/index');

// const router = express.Router();
const mainRoutes = express.Router();

mainRoutes.get('/', (req, res) => {
  res.render('../views/index');
});

mainRoutes.post('/test', async (req, res) => {
  const result = await createOrder(req.body ? req.body : '');
  res.render('../views/index', { createOrder: result });
});

module.exports = mainRoutes;
