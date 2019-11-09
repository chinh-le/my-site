import Vue from 'vue';
import axios from 'axios';

/*
reCcaptcha v3
Score
    1.0 is very likely a good interaction
    0.0 is very likely a bot
    By default, you can use a threshold of 0.5.

Use cases (actionName)       Recommendation
homepage                     See a cohesive view of your traffic on the admin console while filtering scrapers.
login                        With low scores, require 2-factor-authentication or email verification to prevent credential stuffing attacks.
social                       Limit unanswered friend requests from abusive users and send risky comments to moderation.
e-commerce                   Put your real sales ahead of bots and identify risky transactions.
*/

// make sure reCAPTCHA API has loaded
const loaded = () => Vue.prototype.$recaptchaLoaded();

// register the page action (actionName)
const execute = actionName => Vue.prototype.$recaptcha(actionName);

/*
- verify token, 2 minutes life span, with reCAPTCHA using the following API to ensure the token is valid: URL: https://www.google.com/recaptcha/api/siteverify METHOD: POST
- can only run in server side
    - recaptcha Cloud Functions - https://console.cloud.google.com/functions/list?project=my-site-258216
    - /Users/Chinh/Dev/Personal/my-site/functions/recaptcha.js
 */
const siteVerify = token => axios.post('https://us-central1-my-site-258216.cloudfunctions.net/recaptcha', { 'token': token });

const recaptchaPage = (action) => {
  return new Promise((resolve, reject) => {
    loaded()
      .then(isLoaded => {
        console.log('recaptcha isLoaded: ', isLoaded);
        execute(action)
          .then(token => {
            // console.log('token: ', token);
            resolve(token);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
      });
  });
};

const recaptchaElement = action => {
  return new Promise((resolve, reject) => {
    recaptchaPage(action)
      .then(token => {
        // to allow/continue with next action, as form submit action token verified
        // - contactInfo submit to write to DB and send email
        // - authenticate form submit to signin/signup
        siteVerify(token)
          .then(res => {
            console.log('res.data.score (default threshold: 0.5): ', res.data.score);
            console.log('res.data.success: ', res.data.success);
            console.log('res.data.action: ', res.data.action);
            resolve(res);
          })
          .catch(err => {
            console.log('err: ', err);
            reject(err);
          });
      });
  });
};

export {
  recaptchaPage,
  recaptchaElement
};
