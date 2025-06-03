const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = require('./firebase-client-config.json');

const app = initializeApp(firebaseConfig);
const authClient = getAuth();

module.exports = { authClient };