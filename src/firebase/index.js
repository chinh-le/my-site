import { initializeApp } from 'firebase';
import { firebaseConfig } from '@/config';

export const init = () => {
  // console.log('firebaseConfig: ', firebaseConfig);
  // Set the configuration for your app
  const config = {
    authDomain: firebaseConfig.authDomain, // required if use IAM (Identity Auth Management)
    projectId: firebaseConfig.projectId, // required for Cloud Firestore DB
    databaseURL: firebaseConfig.databaseUrl, // required for Realtime DB
    storageBucket: firebaseConfig.storageBucket, // required for Storage
    messagingSenderId: firebaseConfig.messagingSenderId,
    apiKey: firebaseConfig.apiKey
  };

  initializeApp(config);
};

export {
  onStateChange,
  signup,
  signin,
  signout
} from './authentication';

export {
  getDownloadUrl
} from './storage';

export {
  writeUserData
} from './db-realtime';

export {
  _addCollection,
  _getCollection,
  _addSkills,
  _getSkills,
  _addRatings,
  _getRatings,
  _getImgContextPath
} from './db-cloud-firestore';
