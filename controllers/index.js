/* eslint-disable no-console */
const request = require('request-promise-native');
require('dotenv').config();

// const posts = require('./post.controller');

const orgaId = process.env.ODEV;
const token = process.env.DEV;

async function createOrder() {
  const id = await request({
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
  console.log('createOrder');

  const result = await request({
    method: 'GET',
    uri: `https://api.dev.nx.bezahl.de/nxt/v1/order/${id.id}`,
    headers: {
      'Content-Type': 'application/json',
      'NX-Token': token,
    },
    json: true,
  });
  console.log('getOrder', result);

  const send = await request({
    method: 'POST',
    uri: 'http://localhost:5000/posts',
    json: true,
    body: {
      name: result.name,
      price: result.assets[0].amount,
      organization: result.organization.name,
      orderId: id.id,
      link: result.link,
    },
  });
  console.log('writeDB', send);

  // const getDB = await request({
  //   method: 'GET',
  //   uri: `http://localhost:5000/posts/${send._id}`,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   json: true,
  // });
  // console.log('getDB', getDB);
  return send;
}

async function getAllFromDB() {
  const getAllDB = await request({
    method: 'GET',
    uri: 'http://localhost:5000/posts',
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
  });
  console.log('getAllDB', getAllDB);
}

async function getOrder() {
  const result = await request({
    method: 'GET',
    uri: `https://api.dev.nx.bezahl.de/nxt/v1/order?orgId=${orgaId}`,
    headers: {
      'Content-Type': 'application/json',
      'NX-Token': token,
    },
    json: true,
  });
  return result;
}
// getMongoDB().then(console.log);
// createOrder().then();
// writeDB().then(console.log);
// eslint-disable-next-line max-len
// createOrder().then(console.log).then(getOrder().then(console.log).then(writeDB().then(console.log)));

module.exports = { createOrder, getAllFromDB, getOrder };
