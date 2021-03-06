const Post = require('../models/Post');

// Create

exports.create = (req, res) => {
  const post = req.body;
  Post.create(post, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(data);
    }
  });
};

// Read

exports.findAll = (req, res) => {
  Post.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
    return data;
  });
};

exports.find = (req, res) => {
  const { postId } = req.params;
  Post.findById(postId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
};

// Update

exports.update = (req, res) => {
  const { postId } = req.params.postId;
  const post = req.body;

  Post.findByIdAndUpdate(postId, post, { mew: true }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
};

// Delete

exports.delete = (req, res) => {
  const { postId } = req.params.postId;

  Post.findByIdAndDelete(postId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
};
