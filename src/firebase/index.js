import { initializeApp } from 'firebase';
import config from '@/config';

export const init = () => {
  // console.log('config: ', config);
  // Set the configuration for your app
  const firebaseConfig = {
    authDomain: config.authDomain, // required if use IAM (Identity Auth Management)
    projectId: config.projectId, // required for Cloud Firestore DB
    databaseURL: config.databaseUrl, // required for Realtime DB
    storageBucket: config.storageBucket, // required for Storage
    messagingSenderId: config.messagingSenderId,
    apiKey: config.apiKey
  };

  initializeApp(firebaseConfig);
};

export {
  onStateChange,
  signup,
  login,
  logout
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
  _getRatings
} from './db-cloud-firestore';
