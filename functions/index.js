// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var sendMail = require('./sendMail');
var recaptcha = require('./recaptcha');

module.exports = {
    sendMail,
    recaptcha
};