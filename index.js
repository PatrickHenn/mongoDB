const request = require('request-promise-native');
require('dotenv').config();

async function post() {
    const x = await request ({
        method: 'POST',
        uri: 'http://localhost:5000/posts',
        title : 'Wetter',
        content : 'tolles Wetter',
        // body:
        // {
        //     title : 'Wetter',
        //     content : 'tolles Wetter'
        // }
    });
    console.log('1');
}

post().then(console.log)

// header:
// {
// 'Content-Type': 'application/json'
// },