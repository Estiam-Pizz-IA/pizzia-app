const { getProducts } = require('../helpers/products/getProducts');
const { getUser } = require('../helpers/users/getUser');

const db = require('../config/firebase').db;

const orders = db.collection('orders');

const getOrders = (req, res) => {
  orders.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).json({ message: 'No orders found' });
      }

      const ordersList = [];
      snapshot.forEach(doc => {
        ordersList.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return res.status(200).json(ordersList);
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving orders',
          details: error.message
        }
      });
    });
}

const getOrderById = (req, res) => {
  const orderID = req.params.id;

  orders.doc(orderID).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ message: 'Order not found' });
      }

      return res.status(200).json({ id: doc.id, ...doc.data() });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving order',
          details: error.message
        }
      });
    });
}

const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;

    newOrder.dateOrder = new Date().toISOString();

    const userData = await getUser(req.body.userID);
    const pizzaData = await getProducts(req.body.pizzaIDs);

    newOrder.userID = userData;
    newOrder.pizzaIDs = pizzaData;

    const docRef = await orders.add(newOrder);

    return res.status(201).json({ id: docRef.id, ...newOrder });

  } catch (error) {
    return res.status(500).json({
      message: {
        error: 'Error creating order',
        details: error.message
      }
    });
  }
};

const updateOrder = async (req, res) => {
  const orderID = req.params.id;
  const { pizzaID, name, price } = req.body;

  try {
    const orderDoc = await orders.doc(orderID).get();

    if (!orderDoc.exists) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }

    const orderData = orderDoc.data();

    const updatedPizzaList = orderData.pizzaIDs.map(pizza => {
      if (pizza.id === pizzaID) {
        return {
          ...pizza,
          name,
          price
        };
      }
      return pizza;
    });

    await orders.doc(orderID).update({ pizzaIDs: updatedPizzaList });

    return res.status(200).json({ message: 'Pizza mise à jour' });

  } catch (error) {
    return res.status(500).json({
      message: {
        error: 'Erreur serveur',
        details: error.message
      }
    });
  }
};

const deleteOrder = (req, res) => {
  const orderID = req.params.id;
  orders.doc(orderID).delete()
    .then(() => {
      return res.status(200).json("Order deleted");
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error deleting order',
          details: error.message
        }
      });
    });
}

module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };