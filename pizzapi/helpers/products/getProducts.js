const db = require('../../config/firebase').db;

const productsRef = db.collection('pizzas');

async function getProducts(pizzaIds) {
  if (!pizzaIds || !Array.isArray(pizzaIds) || pizzaIds.length === 0) {
    throw new Error('Invalid or empty pizza IDs array');
  }

  const products = await Promise.all(
    pizzaIds.map(id => productsRef.doc(id).get())
  );

  const pizzaData = products.map(doc => ({ id: doc.id, ...doc.data() }));

  return pizzaData;
}

module.exports = { getProducts, productsRef };