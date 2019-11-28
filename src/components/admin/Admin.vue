<template src="./template.html" />
<script>
import store from '@/store';
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
  beforeRouteEnter (to, from, next) {
    console.log('TLC: beforeRouteEnter -> store.getters.isAuthenticated', store.getters.isAuthenticated);
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next({ name: 'home' });
    }
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
            default:
          }
        })()
      );
    },
    getCollection (collection) {
      _getCollection(collection)
        .then(snapshots => {
          // console.log('TLC: getCollection -> snapshots', snapshots);
          if (!snapshots.empty) {
            snapshots.forEach(element => {
              // console.log('TLC: getCollection -> element', element);
            });
          } else {
            console.error('FAILED');
          }
        });
    },
    addSkills () {
      _addSkills(mocks.skills);
    },
    getSkills () {
      _getSkills().then(snapshots => {
        // console.log('TLC: getSkills -> snapshots', snapshots);
        if (!snapshots.empty) {
          snapshots.forEach(element => {
            // console.log('TLC: getSkills -> element', element);
          });
        } else {
          console.error('FAILED');
        }
      });
    },
    addRatings () {
      _addRatings(mocks.ratings);
    },
    getRatings () {
      _getRatings().then(snapshots => {
        // console.log('TLC: getRatings -> snapshots', snapshots);
        if (snapshots.exists) {
          // console.log('TLC: getRatings -> snapshots.data()', snapshots.data());
        } else {
          console.error('FAILED');
        }
      });
    }
  }
};
</script>
<style src="./style.scss" scoped lang="scss" />
