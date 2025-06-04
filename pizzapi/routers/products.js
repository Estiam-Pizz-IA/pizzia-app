const express = require('express');
const { getProducts, createProduct, updateProduct, getProductById, deleteProduct } = require('../controllers/products.js');
const { requireAuth } = require('../middlewares/auth.js');
const { admin } = require('../middlewares/admin.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', requireAuth, admin, createProduct);
router.put('/:id', requireAuth, admin, updateProduct);
router.delete('/:id', requireAuth, admin, deleteProduct);

module.exports = router;