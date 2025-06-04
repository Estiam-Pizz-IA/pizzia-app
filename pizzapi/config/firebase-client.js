const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = JSON.parse(process.env.PIZZAPI_FIREBASE_CLIENT_CONFIG);

const app = initializeApp(firebaseConfig);
const authClient = getAuth();

module.exports = { authClient };