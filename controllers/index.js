/* eslint-disable no-console */
const request = require('request-promise-native');
require('dotenv').config();

const orgaId = process.env.ODEV;
const token = process.env.DEV;

async function createOrder() {
  const y = await request({
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
    },
  });
  console.log('1');
  return y;
}

async function getOrder() {
  const z = await request({
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/aBXJ7xQ2i',
    headers: {
      'Content-Type': 'application/json',
      'NX-Token': token,
    },
    json: true,
  });
  console.log('2');
  return z;
}

async function writeDB() {
  const x = await request({
    method: 'POST',
    uri: 'http://localhost:5000/posts',
    json: true,
    body: {
      title: 'Wetter',
      content: 'tolles Wetter',
    },
  });
  console.log('3');
  return x;
}

// createOrder().then(console.log);
// getOrder().then(console.log);
// writeDB().then(console.log);
// eslint-disable-next-line max-len
// createOrder().then(console.log).then(getOrder().then(console.log).then(writeDB().then(console.log)));

module.exports = { createOrder, getOrder, writeDB };
