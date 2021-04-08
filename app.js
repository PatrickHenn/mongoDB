/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
// const { render } = require('pug');
require('dotenv').config();
const postsRouter = require('./routes/posts.routes');

const app = express();
const { PORT } = process.env;

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.set('view engine', 'pug');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/posts', postsRouter);

const router = require('./routes/posts.routes.js');

app.use('/api', router);

app.listen(PORT, () => console.log('läuft'));

const mainRoutes = require('./routes/main.js');

app.use('/', mainRoutes);
