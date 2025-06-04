const { auth } = require('../config/firebase');

const requireAuth = (req, res, next) => {
  const sessionCookie = req.session?.firebaseToken;

  if (!sessionCookie) {
    return res.status(401).json({
      error: 'auth/unauthorized',
      message: 'You need to be logged in.'
    });
  }

  auth.verifySessionCookie(sessionCookie, true)
    .then(() => {
      next();
    })
    .catch(() => {
      return res.status(401).json({
        error: 'auth/invalid-session',
        message: 'Token expired.'
      });
    });
};

module.exports = { requireAuth };