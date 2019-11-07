// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
    
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

function sendMail(payload) {
    // console.log('payload: ', payload);
    const appName = 'My site';
    const email = {
        service: 'gmail',
        login: functions.config().email.login,
        password: functions.config().email.password,
        to: functions.config().email.to
    };
    const transporter = nodemailer.createTransport({
        service: email.service,
        auth: {
          user: email.login,
          pass: email.password
        }
    });
    const mailOptions = {
        from: `Chinh Le <${email.login}>`, // display: Chinh Le
        replyTo: `${appName} <noreply@chinhle.ca>`, // display: My site
        to: email.to,
        subject: payload.subject,
        html: `
            <div>
                <h1>${payload.subject}</h1>
                <p>Name: ${payload.name}</p>
                <p>Email: ${payload.email}</p>
                <br>
                <p>Message: ${payload.message}</p>
            </div>
        `
    };

    return new Promise(resolve => {
        transporter.sendMail(mailOptions, (err, info) => {
            let res = err;
            
            // eg: invalid email / password
            if (res) {
                console.error(err.response);
                return resolve(res);
            }
            
            if (info.rejected.length > 0) {
                res = info.rejected;
                console.error('Mail sent: FAILED!!!', res);
            }
            
            if (info.accepted.length > 0) {
                res = info.accepted;
                console.log('Mail sent: SUCCESS!!!');
            }
    
            return resolve(res);
          })    
    });
}

// pushId: auto-generate key unique
exports.sendingMail = functions.database.ref('/contacts/{pushId}')
    .onWrite(async (change, context) => {
        try {
            const contactInfo = change.after.val();
            const payload = {
                name: contactInfo.name,
                email: contactInfo.email,
                subject: contactInfo.subject,
                message: contactInfo.message
            };
            const res = await sendMail(payload);
            return res;
        }
        catch (err) {
            console.error('catch error - ', err);
            return err;
        }
    });