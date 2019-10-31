import { auth } from 'firebase';
import store from '@/store';
import { getDownloadUrl } from './storage';

const onStateChange = () => {
  // Set an authentication state observer and get user data
  auth().onAuthStateChanged(user => {
    console.log('onAuthStateChanged - user: ', user);
    if (user) {
      auth().currentUser.getIdTokenResult()
        .then(res => {
          store.commit('setAuthUser', res);

          localStorage.setItem('token', res.token);
          localStorage.setItem('expirationTime', res.expirationTime); // 5h by default

          getDownloadUrl('/docs/WebDesigner.doc', store);
        });
    } else {
      store.commit('setDownloadUrl');
    }
  });
};
const login = (payload) => {
  auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(res => {
      console.log('res: ', res);
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
const logout = () => {
  auth().signOut();
};

export {
  onStateChange,
  login,
  logout
};
