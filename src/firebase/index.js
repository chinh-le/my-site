import { initializeApp } from 'firebase';
import config from '@/config';

export const init = () => {
  // Set the configuration for your app
  const firebaseConfig = {
    // authDomain: config.authDomain,
    // databaseURL: config.databaseUrl,
    storageBucket: config.storageBucket,
    apiKey: config.apiKey
  };

  initializeApp(firebaseConfig);
};

export {
  onStateChange,
  signup,
  login,
  logout
} from './auth';

export {
  getDownloadUrl
} from './storage';
