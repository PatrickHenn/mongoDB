const mongoose = require('mongoose');

// const postSchema = mongoose.Schema({
//   title: {
//     type: String,
//     require: true,
//   },
//   content: {
//     type: String,
//     require: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
// });

const postSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  organization: {
    type: String,
    require: true,
  },
  orderId: {
    type: String,
    require: true,
  },
  link: {
  },
});

module.exports = mongoose.model('Posts', postSchema);
