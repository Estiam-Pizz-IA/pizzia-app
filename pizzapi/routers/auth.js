const express = require('express');
const { authRegister, authLogin, authProfile, authLogout } = require('../controllers/auth');
const router = express.Router();

router.post('/register', authRegister);
router.post('/login', authLogin);
router.post('/logout', authLogout);
router.get('/profile', authProfile);

module.exports = router;