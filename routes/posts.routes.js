const express = require('express');
const posts = require('../controllers/post.controller');

const router = express.Router();

const { createOrder } = require('../controllers/index');

router.get('/', posts.findAll);
router.post('/', posts.create);
router.post('/test', async (req, res) => {
  const result = await createOrder(req.body ? req.body : '');
  res.render('../views/index', { createOrder: result });
});

router.get('/:postId', posts.find);
router.put('/:postId', posts.update);
router.delete('/:postId', posts.delete);

module.exports = router;
