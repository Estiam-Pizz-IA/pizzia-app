const express = require('express');
const { authRegister, authLogin, authProfile, authLogout } = require('../controllers/auth');
const { requireAuth } = require('../middlewares/auth');
const router = express.Router();

router.post('/register', authRegister);
router.post('/login', authLogin);
router.post('/logout', requireAuth, authLogout);
router.get('/profile', requireAuth, authProfile);

module.exports = router;