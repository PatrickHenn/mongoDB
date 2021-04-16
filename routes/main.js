const express = require('express');
const { createOrder, getOrder } = require('../controllers/index');

// const router = express.Router();
const mainRoutes = express.Router();

mainRoutes.get('/', async (req, res) => {
  const result = await createOrder(req.body ? req.body : '');
  const result1 = await getOrder(req.body ? req.body : '');
  res.render('../views/index', { createOrder: result, getOrder: result1 });
});

mainRoutes.post('/test', async (req, res) => {
  const result = await createOrder(req.body ? req.body : '');
  res.render('../views/index', { createOrder: result });
});

module.exports = mainRoutes;
