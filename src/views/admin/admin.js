import { auth } from 'firebase';
import {
  _addCollection,
  _getCollection,
  _addSkills,
  _getSkills,
  _addRatings,
  _getRatings
} from '@/firebase';
import * as mocks from '../../../mocks/data.js';

export default {
  // guard route
  beforeRouteEnter (to, from, next) {
    auth().onAuthStateChanged(user => {
      // // console.log('TLC: beforeRouteEnter -> user', user);
      if (user) {
        auth()
          .currentUser.getIdTokenResult()
          .then(res => {
            // // console.log('TLC: beforeRouteEnter -> LOGGED');
            next();
          });
      } else {
        // // console.log('TLC: beforeRouteEnter -> NOT LOGGED!!!');
        next({ name: 'home' });
      }
    });
  },
  methods: {
    addCollection (type) {
      _addCollection(
        type,
        (() => {
          switch (type) {
            case 'professionals':
              return mocks.professionals;
            case 'personals':
              return mocks.personals;
            case 'certificates':
              return mocks.certificates;
            case 'scholarships':
              return mocks.scholarships;
            case 'socialMedia':
              return mocks.socialMedia;
            default:
          }
        })()
      );
    },
    getCollection (collection) {
      _getCollection(collection).then(snapshots => {
        // // console.log('TLC: getCollection -> snapshots', snapshots);
        if (!snapshots.empty) {
          snapshots.forEach(element => {
            // // console.log('TLC: getCollection -> element', element);
          });
        } else {
          // console.log('TLC: getCollection -> FAILED');
        }
      });
    },
    addSkills () {
      _addSkills(mocks.skills);
    },
    getSkills () {
      _getSkills().then(snapshots => {
        // // console.log('TLC: getSkills -> snapshots', snapshots);
        if (!snapshots.empty) {
          snapshots.forEach(element => {
            // // console.log('TLC: getSkills -> element', element);
          });
        } else {
          // console.log('TLC: getSkills -> FAILED');
        }
      });
    },
    addRatings () {
      _addRatings(mocks.ratings);
    },
    getRatings () {
      _getRatings().then(snapshots => {
        // // console.log('TLC: getRatings -> snapshots', snapshots);
        if (snapshots.exists) {
          // // console.log('TLC: getRatings -> snapshots.data()', snapshots.data());
        } else {
          // console.log('TLC: getRatings -> FAILED');
        }
      });
    }
  }
};
