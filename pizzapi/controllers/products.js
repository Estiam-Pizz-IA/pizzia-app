const db = require('../config/firebase').db;

const products = db.collection('pizzas');

const getProducts = (req, res) => {
  products.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).json({ message: 'No products found' });
      }

      const products = [];
      snapshot.forEach(doc => {
        products.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return res.status(200).json(products);
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving products',
          details: error.message
        }
      });
    });
}

const getProductById = (req, res) => {
  const productId = req.params.id;

  products.doc(productId).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json({ id: doc.id, ...doc.data() });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving product',
          details: error.message
        }
      });
    });
}

const createProduct = (req, res) => {
  const newProduct = {
    "name": req.body.name,
    "description": req.body.description || req.body.name,
    "price": req.body.price
  };

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  if (typeof newProduct.price !== 'number' || newProduct.price < 0) {
    return res.status(400).json({ message: 'Price must be a number above 0' });
  }

  products.add(newProduct)
    .then(doc => {
      return res.status(201).json({ id: doc.id, ...newProduct });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error creating product',
          details: error.message
        }
      });
    });
}

const updateProduct = (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  if (updatedData.price && typeof updatedData.price != 'number') {
    return res.status(400).json({ message: 'Price must be a number' });
  }

  products.doc(productId).update(updatedData)
    .then(() => {
      return res.status(200).json({ id: productId, ...updatedData });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error updating product',
          details: error.message
        }
      });
    });
}

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  products.doc(productId).delete()
    .then(() => {
      return res.status(200).json("Product deleted");
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error deleting product',
          details: error.message
        }
      });
    });
}


module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };