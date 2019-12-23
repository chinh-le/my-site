import { auth } from 'firebase';
import store from '@/store';

let signoutTimer = null;

const _autoSignout = (expirationTime) => {
	// console.log('TLC: _autoSignout -> expirationTime', expirationTime);
  const currentTimeInMilsecs = Date.parse(new Date());
  const expirationTimeInMilsecs = Date.parse(expirationTime);
  const timerInMilsecs = expirationTimeInMilsecs - currentTimeInMilsecs;

  signoutTimer = setTimeout(() => {
    _signout();
  }, timerInMilsecs);
};

const _onAuthStateChange = () => {
  // Set an authentication state observer and get user data
  auth().onAuthStateChanged(user => {
		// console.log('TLC: _onAuthStateChange -> user', user);
    if (user) {
     if (!user.isAnonymous) {
        auth().currentUser.getIdTokenResult()
        .then(res => {
					// console.log('TLC: _onAuthStateChange -> currentUser.getIdTokenResult() - res', res);
          store.commit('setAuthUser', res);

          localStorage.setItem('token', res.token);
          localStorage.setItem('expirationTime', res.expirationTime); // 1h by default

          _autoSignout(res.expirationTime);
        });
      }
    }
  });
};
const _signup = (payload) => {
  return auth().createUserWithEmailAndPassword(payload.email, payload.password);
};
const _signin = (payload) => {
  return auth().signInWithEmailAndPassword(payload.email, payload.password);
};
const _signinAnonymous = () => {
		// console.log('TLC: _signinAnonymous -> ');
    auth().signInAnonymously();
    /* .then(res => {
			// console.log('TLC: _signinAnonymous -> res', res);
    })
    .catch(err => {
			// console.log('TLC: init -> _signinAnonymous - err ', err);
    }); */
};
const _signout = () => {
  auth().signOut();
  store.commit('setAuthUser');
  localStorage.removeItem('token');
  localStorage.removeItem('expirationTime');

  if (signoutTimer) {
    clearTimeout(signoutTimer);
    signoutTimer = null;
  }

  _signinAnonymous(); // anonymous signin to allow secured data access
};

export {
  _onAuthStateChange,
  _signup,
  _signin,
  _signinAnonymous,
  _signout
};
