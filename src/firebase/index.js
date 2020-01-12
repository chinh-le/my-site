import { initializeApp } from 'firebase';
import { _firebaseConfig } from '@/config';

export const _init = () => {
	// console.log('TLC: _init -> _init');
  // Set the configuration for your app
  const config = {
    authDomain: _firebaseConfig.authDomain, // required if use IAM (Identity Auth Management)
    projectId: _firebaseConfig.projectId, // required for Cloud Firestore DB
    databaseURL: _firebaseConfig.databaseUrl, // required for Realtime DB
    storageBucket: _firebaseConfig.storageBucket, // required for Storage
    messagingSenderId: _firebaseConfig.messagingSenderId,
    apiKey: _firebaseConfig.apiKey
  };

  initializeApp(config);
};

export {
  _onAuthStateChange,
  _signup,
  _signin,
  _signinAnonymous,
  _signout
} from './authentication';

export {
  _getDownloadUrl
} from './storage';

export {
  _writeUserData
} from './db-realtime';

export {
  _addCollection,
  _getCollection,
  _addSkills,
  _getSkills,
  _addRatings,
  _getRatings,
} from './db-cloud-firestore';
