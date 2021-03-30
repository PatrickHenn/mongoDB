const { post, orgaId } = require('./request.js');

async function createOrder(test) {
    const create = await post('https://api.dev.nx.bezahl.de/nxt/v1/order/',
      {
        orgId: `${orgaId}`,
        name: test.name,
        price: test.price,
        recipient: 'patrick.henn+test@nx-technologies.com',
      });
      console.log('create', create);
    return create;
}

async function sendData(test) {
    const create = await post('http://localhost:5000/posts',
      {
            "title": "Wunderbares Wetter",
            "content": "Das Wetter heute war schön mit viel Sonne und wenig Wolken"
      });
      console.log('senden', create);
    return create;
    }

module.exports = {createOrder, sendData}