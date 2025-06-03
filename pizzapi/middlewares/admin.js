const { auth } = require('../config/firebase')
const { getUser } = require('../helpers/users/getUser');

const admin = async (req, res, next) => {
  const sessionCookie = req.session?.firebaseToken;

  if (!sessionCookie) {
    return res.status(403).json({
      error: 'auth/no-session',
      message: 'No session token found. Please log in.'
    });
  }

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    const userId = decodedClaims?.user_id;

    const user = await getUser(userId);

    if (!user || !user.isAdmin) {
      return res.status(403).json({
        error: 'auth/not-authorized',
        message: 'You do not have permission to access this resource.'
      });
    }

    next();
  } catch (error) {
    return res.status(403).json({
      error: 'auth/not-authenticated',
      message: 'You need to be logged in.'
    });
  }
};

module.exports = { admin };