const express = require('express');
const { getOrders, getOrderById, createOrder, updateOrder, deleteOrder, getOrdersByUserID } = require('../controllers/orders');
const { requireAuth } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/', requireAuth, getOrders);
router.get('/user', requireAuth, getOrdersByUserID);
router.post('/', requireAuth, createOrder);
router.put('/:id', requireAuth, updateOrder);
router.delete('/:id', requireAuth, deleteOrder);
router.get('/:id', requireAuth, getOrderById);

module.exports = router;