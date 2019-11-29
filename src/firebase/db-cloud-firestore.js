const firebase = require('firebase');
require('firebase/firestore');

const _addCollection = (name, data) => {
  const db = firebase.firestore();
  const collectionRef = db.collection(name);

  for (let i in data) {
    collectionRef.doc(i).set(data[i])
      .then(_ => {
        console.log('TLC: _addCollection -> SUCCESS');
      });
    /* .catch(err => {
      console.error(err);
    }); */
  }
};

const _getCollection = (name) => {
  const db = firebase.firestore();
  const query = db.collection(name).orderBy('order');

  return query.get();
};

const _addSkills = (data) => {
  const db = firebase.firestore();
  const educationRef = db.collection('education');
  const skillsRef = educationRef.doc('skills');
  const categoriesRef = skillsRef.collection('categories');

  for (let i in data) {
    categoriesRef.doc(i).set(data[i])
      .then(_ => {
        console.log('TLC: _addSkills -> SUCCESS');
      });
    /* .catch(err => {
      console.error(err);
    }); */
  }
};

const _getSkills = () => {
  const db = firebase.firestore();
  const skillsRef = db.collection('education').doc('skills').collection('categories');
  const query = skillsRef.orderBy('order');

  return query.get();
};

const _addRatings = (data) => {
  const db = firebase.firestore();
  const educationRef = db.collection('education');

  return educationRef.doc('ratings').set(data)
    .then(_ => {
      console.log('TLC: _addRatings -> SUCCESS');
    });
  /* .catch(err => {
    console.error(err);
  }); */
};

const _getRatings = () => {
  const db = firebase.firestore();
  const ratingsRef = db.collection('education').doc('ratings');

  return ratingsRef.get();
};

const _getImgContextPath = (imgPath) => {
  return require('@/assets/' + imgPath) || null;
};

export {
  _addCollection,
  _getCollection,
  _addSkills,
  _getSkills,
  _addRatings,
  _getRatings,
  _getImgContextPath
};
