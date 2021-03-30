const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const postsRouter = require('./routes/posts.routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

app.use('/posts', postsRouter);

app.get('', (req, res) => {
    res.send('HI ich bin eine Seite');
});

app.listen(PORT, () => console.log('läuft'));