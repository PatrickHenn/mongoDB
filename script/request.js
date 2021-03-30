const request = require('request-promise-native');
require('dotenv').config();

const option = {
  headers: {
    'Content-Type': 'application/json',
    'NX-Token': '',
  },
  json: true,
};

let endpoint = '';
let orgaId = '';

if (process.env.STACK === 'dev') {
  endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
  orgaId = 'Hgza28rQ-' || process.env.ODEV;
  option.headers['NX-Token'] = process.env.DEV;
  // console.log('after:', { endpoint }, 'orgaId', { orgaId }, 'token', option.headers['NX-Token']);
}

async function post(uri, _body) {
    console.log('post',uri,_body);
    const body = await request({
      method: 'POST',
      ...option,
      uri: `${uri}`,
      body: _body,
    });
    return body;
}



module.exports = { post, orgaId }