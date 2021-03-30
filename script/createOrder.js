
async function createOrder(test) {
    const create = await post('https://api.dev.nx.bezahl.de/nxt/v1/order/',
      {
        orgId: `${orgaId}`,
        name: test.name,
        price: test.price,
        recipient: 'patrick.henn+test@nx-technologies.com',
      });
    return create;
}

async function sendData(test) {
    const create = await post('https://api.dev.nx.bezahl.de/nxt/v1/',
      {
            "title": "wunderbares Wetter",
            "content": "Das Wetter heute war schön mit viel Sonne und wenig Wolken"
      });
    return create;
}