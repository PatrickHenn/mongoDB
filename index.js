const request = require('request-promise-native');
require('dotenv').config();

const orgaId = process.env.ODEV;
const token = process.env.DEV

async function createOrder() {
    const y = await request ({
        method: 'POST',
        uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/',
        headers: {
            'Content-Type': 'application/json',
            'NX-Token': token,
        },
        json: true,
        body: {
            orgId: `${orgaId}`,
            name: 'Glück',
            price: 7777,
            recipient: 'patrick.henn+test@nx-technologies.com',
        }  
    });
    console.log('1');
    return y
}

async function sendOrder() {
    const x = await request ({
        method: 'POST',
        uri: 'http://localhost:5000/posts',
        title : 'Wetter',
        content : 'tolles Wetter',
        body: {
            title : 'Wetter',
            content : 'tolles Wetter'
        }
    });
    console.log('2');
    return x
}

sendOrder().then(console.log);
createOrder().then(console.log);

// header:
// {
// 'Content-Type': 'application/json'
// },