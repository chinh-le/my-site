// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Add CORS to your index.js
// const cors = require('cors')({origin: true});// Put this line to your function
// Automatically allow cross-origin requests
// cors(req, res, () => {});

var sendMail = require('./sendMail');
var recaptcha = require('./recaptcha');

module.exports = {
    sendMail,
    recaptcha
};