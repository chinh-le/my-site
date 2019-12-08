import { auth } from 'firebase';
import store from '@/store';
import { appConfig } from '@/config';
import { getDownloadUrl } from './storage';

let signoutTimer = null;

const autoSignout = (expirationTime) => {
  const currentTimeInMilsecs = Date.parse(new Date());
  const expirationTimeInMilsecs = Date.parse(expirationTime);
  const timerInMilsecs = expirationTimeInMilsecs - currentTimeInMilsecs;
  signoutTimer = setTimeout(() => {
    logout();
  }, timerInMilsecs);
};

const onStateChange = () => {
  // Set an authentication state observer and get user data
  auth().onAuthStateChanged(user => {
    // console.log('TLC: onStateChange -> user', user);
    if (user) {
      auth().currentUser.getIdTokenResult()
        .then(res => {
          store.commit('setAuthUser', res);

          localStorage.setItem('token', res.token);
          localStorage.setItem('expirationTime', res.expirationTime); // 1h by default

          getDownloadUrl(appConfig.appResumePath);

          autoSignout(res.expirationTime);
        });
    } else {
      store.commit('setDownloadUrl');
    }
  });
};
const signup = (payload) => {
  return auth().createUserWithEmailAndPassword(payload.email, payload.password);
};
const login = (payload) => {
  return auth().signInWithEmailAndPassword(payload.email, payload.password);
};
const logout = () => {
  auth().signOut();
  store.commit('setAuthUser');
  localStorage.removeItem('token');
  localStorage.removeItem('expirationTime');

  if (signoutTimer) {
    clearTimeout(signoutTimer);
    signoutTimer = null;
  }
};

export {
  onStateChange,
  signup,
  login,
  logout
};
