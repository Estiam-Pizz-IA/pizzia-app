const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = JSON.parse(process.env.FIREBASE_CLIENT_CONFIG);

const app = initializeApp(firebaseConfig);
const authClient = getAuth();

module.exports = { authClient };