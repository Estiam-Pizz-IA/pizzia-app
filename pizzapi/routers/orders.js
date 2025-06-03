const express = require('express');
const { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/orders');
const { requireAuth } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/', requireAuth, getOrders);
router.get('/:id', requireAuth, getOrderById);
router.post('/', requireAuth, createOrder);
router.put('/:id', requireAuth, updateOrder);
router.delete('/:id', requireAuth, deleteOrder);

module.exports = router;