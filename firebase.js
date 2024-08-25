// firebase.js
const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.resolve(
  __dirname,
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
