//In case of authentication, always send the user in the req object to the apis. Avoid taking IDs or names from api
// for data modification queries in the database (update, delete etc)

const jwt = require('jsonwebtoken');
const User = require("../config/models/userModel");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Fetch the user from the database and populate the role
    const user = await User.findById(decoded.userId).populate({
      path: 'role',
      populate: {
        path: 'permissions'
      }
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Please login again to proceed" });
  }
};

module.exports = { authenticateToken };