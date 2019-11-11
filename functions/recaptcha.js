var functions = require('firebase-functions');
var https = require('https');
var Qs = require('qs');
// var cors = require('cors')({origin: true});

var recaptchaVerify = functions.https.onRequest((req, res) => {
    console.log('recaptchaVerify');

    // CORS and Cloud Functions export logic
    /* exports.hello = function hello(req, res) {
        var corsFn = cors();
        corsFn(req, res, function() {
            helloFn(req, res);
        });
    } */
    
    res.set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST')
        .set('Access-Control-Allow-Headers', '*')
        .status(200);

    // preflighted request
    if (req.method === `OPTIONS`) {
        res.send('Preflighted request...');
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
            res.status(200).send(data);
        });
    });
          
    request.on('error', (err) => {
        console.log('problem with request: ' + err.message);
    });
    
    request.end();
});

module.exports = recaptchaVerify;