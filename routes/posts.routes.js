const express = require('express');
const posts = require('../controllers/post.controller');
const test = require('../controllers/index.js');

const router = express.Router();

// const { createOrder, sendData } = require('/../createOrder.js');

router.get('/', posts.findAll);
router.post('/', posts.create);
router.post('/test', test.createOrder);
router.get('/:postId', posts.find);
router.put('/:postId', posts.update);
router.delete('/:postId', posts.delete);

module.exports = router;
