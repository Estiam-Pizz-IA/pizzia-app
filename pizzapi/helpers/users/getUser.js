const db = require('../../config/firebase').db;

const usersRef = db.collection('users');

async function getUser(userId) {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const userSnapshot = await usersRef.doc(userId).get();
  const userData = { id: userSnapshot.id, ...userSnapshot.data() };

  return userData;
}

module.exports = { getUser, usersRef };