import { storage } from 'firebase';
import store from '@/store';

export const getDownloadUrl = (filePath) => {
  // Create a reference with an initial file path and name
  // const fileRef = storage.ref('/docs/WebDesigner.doc');
  const fileRef = storage().ref(filePath);
  // Create a reference from a Google Cloud Storage URI
  // const fileRef = storage.refFromURL('gs://my-site-f9c24.appspot.com/docs/WebDesigner.doc');
  // Create a reference from an HTTPS URL
  // Note that in the URL, characters are URL escaped!
  // const fileRef = storage.refFromURL('https://storage.cloud.google.com/my-site-f9c24.appspot.com/docs/WebDesigner.doc?authuser=0');
  fileRef.getDownloadURL()
    .then(url => {
      store.commit('setDownloadUrl', url);
    })
    /* .catch(err => {
      // console.error(err);
    }) */;
};
