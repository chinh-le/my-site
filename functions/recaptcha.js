const functions = require('firebase-functions');
const https = require('https');
const Qs = require('qs');

// exports.recaptchaVerify = functions.https.onRequest((req, res) => {
var recaptchaVerify = functions.https.onRequest((req, res) => {
    console.log('recaptchaVerify');
    console.log('res: ', res);
    console.log('req: ', req);
    console.log('req.method: ', req.method);
    console.log('req.body: ', req.body);

    if (req.method === `OPTIONS`) {
        // res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
        res
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET, POST')
            .set('Access-Control-Allow-Headers', '*')
            .status(200)
            .send('Allow origin: localhost');
           
        return;
    }

    res
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST')
        .set('Access-Control-Allow-Headers', '*')
        .status(200);

        // const url = 'https://www.google.com/recaptcha/api/siteverify';
        // console.log('url: ', url);
        
        console.log('functions.config(): ', functions.config());
        var params = {
            secret: functions.config().recaptcha['secret-key'], // v3 secret key (backend)
            response: req.body.token
        };
        console.log('Qs.stringify(params): ', Qs.stringify(params));
        // console.log('params: ', params);
        var options = {
            host: 'www.google.com',
            port: 443,
            path: '/recaptcha/api/siteverify?' + Qs.stringify(params),
            method: 'POST'
          };

          var request = https.request(options, (response) => {
              console.log('options: ', options);
              console.log('response: ', response);
            console.log('STATUS: ' + response.statusCode);
            response.setEncoding('utf8');
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.on('data', chunk => {
              console.log('BODY: ' + chunk);

              res.status(200).send(chunk);

            });
          });
          
          request.on('error', (e) => {
            console.log('problem with request: ' + e.message);
          });
          
          // write data to request body
          request.write('data\n');
          request.write('data\n');
          request.end();
});

module.exports = recaptchaVerify;