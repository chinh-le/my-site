const functions = require('firebase-functions');
const https = require('https');
const Qs = require('qs');

var recaptchaVerify = functions.https.onRequest((req, res) => {
    console.log('recaptchaVerify');

    res.set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST')
        .set('Access-Control-Allow-Headers', '*')
        .status(200);
    
    // preflighted request
    if (req.method === `OPTIONS`) {
        res.send();
        return;
    }

    var params = {
        secret: functions.config().recaptcha['secret-key'], // v3 secret key (backend)
        response: req.body.token // from sireVerify() frontend
    };

    // token verify API: 
        // - URL: https://www.google.com/recaptcha/api/siteverify 
        // - METHOD: POST
    var options = {
        host: 'www.google.com',
        port: 443,
        path: '/recaptcha/api/siteverify?' + Qs.stringify(params),
        method: 'POST'
    };

    var request = https.request(options, (response) => {
        // console.log('response.headers: ' + JSON.stringify(response.headers));
        response.on('data', data => {
            console.log('data: ', data);
            res.send(data);
        });
    });
          
    request.on('error', (err) => {
        console.log('problem with request: ' + err.message);
    });
    
    request.end();
});

module.exports = recaptchaVerify;