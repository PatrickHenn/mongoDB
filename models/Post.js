const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// const postSchema = mongoose.Schema({
//     name:{
//         type: String,
//         require: true
//     },
//     price:{
//         type: String,
//         require:true
//     },
//     createDate: {
//         type: Date,
//         default: Date.now()
//     }
// })

module.exports = mongoose.model('Posts', postSchema);
