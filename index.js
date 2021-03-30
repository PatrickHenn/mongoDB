const { post, orgaId } = require('./script/request.js');

post('https://api.dev.nx.bezahl.de/nxt/v1/order/',
{
    "orgId": `${orgaId}`,
    "name": "test mongo",
    "price": 209555
  }
).then(console.log);

post('http://localhost:5000/posts',
{
    "title" : "Wetter",
    "content" : "Blauer Himmel"
  }
).then(console.log);