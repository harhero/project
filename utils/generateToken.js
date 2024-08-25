const jwt = require("jsonwebtoken");
const User = require("../models/");
const Vendor = require("../models/");
const Admin = require("../models/");

const generateToken = (entity, expiresIn, isRefreshToken = false) => {
  let payload;
 
  if (entity instanceof User) {

    payload = { id: entity._id, email: entity.email, type: "user" };
  } else if (entity instanceof Vendor) {
    payload = { id: entity._id, email: entity.email, type: "vendor" };
  } else if (entity instanceof Admin) {
    payload = { id: entity._id, email: entity.email, type: "admin" };
  }

  const secret = isRefreshToken
    ? process.env.JWT_REFRESH_SECRET
    : process.env.JWT_SECRET;

    console.log(jwt.sign(payload, secret, { expiresIn }));
    
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = generateToken;
