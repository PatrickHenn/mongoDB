const { Router } = require('express');
const express = require('express');
const router = express.Router();
const posts = require('../controllers/post.controller')
// const { createOrder, sendData } = require('/../createOrder.js');

router.get('/', posts.findAll);
router.post('/', posts.create);
router.get('/:postId', posts.find);
router.put('/:postId', posts.update);
router.delete('/:postId', posts.delete);



router.get('', (req, res) => {
  render('views/mongo')
});


router.post('/', async (req, res) => {
  const result = await createOrder(req.body ? req.body : '');
  // const result = await sendData(req.body ? req.body : '');
  res.render('views/mongo', { createOrder: result });
});


module.exports = router;