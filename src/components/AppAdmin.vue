<template>
  <div class="admin">
    <h1>You are not meant to be here!!!</h1>
    <button @click="addCollection('professionals')">
      Add professionals
    </button> |
    <button @click="getCollection('professionals')">
      Get professionals
    </button>
    <br>
    <button @click="addCollection('personals')">
      Add personals
    </button> |
    <button @click="getCollection('personals')">
      Get personals
    </button>
    <br>
    <button @click="addCollection('certificates')">
      Add certificates
    </button> |
    <button @click="getCollection('certificates')">
      Get certificates
    </button>
    <br>
    <button @click="addCollection('scholarships')">
      Add scholarships
    </button> |
    <button @click="getCollection('scholarships')">
      Get scholarships
    </button>
    <br>
    <button @click="addSkills">
      Add Skills
    </button> |
    <button @click="getSkills">
      Get Skills
    </button>
    <br>
    <button @click="addRatings">
      Add Ratings
    </button> |
    <button @click="getRatings">
      Get Ratings
    </button>
    <br>
    <button @click="addCollection('socialMedia')">
      Add Social Media
    </button> |
    <button @click="getCollection('socialMedia')">
      Get Social Media
    </button>
  </div>
</template>

<script>
    import { auth } from 'firebase';
    import {
        _addCollection,
        _getCollection,
        _addSkills,
        _getSkills,
        _addRatings,
        _getRatings
    } from '@/firebase';
    import * as mocks from '../../mocks/data';

    export default {
        // guard route
        beforeRouteEnter (to, from, next) {
            auth().onAuthStateChanged(user => {
                console.log('TLC: beforeRouteEnter -> user', user);
                if (user) {
                    auth()
                        .currentUser.getIdTokenResult()
                        .then(res => {
                            console.log('TLC: beforeRouteEnter -> LOGGED');
                            next();
                        });
                } else {
                    console.log('TLC: beforeRouteEnter -> NOT LOGGED!!!');
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
                    console.log('TLC: getCollection -> snapshots', snapshots);
                    if (!snapshots.empty) {
                        snapshots.forEach(element => {
                            console.log('TLC: getCollection -> element', element);
                        });
                    } else {
                        console.log('TLC: getCollection -> FAILED');
                    }
                });
            },
            addSkills () {
                _addSkills(mocks.skills);
            },
            getSkills () {
                _getSkills().then(snapshots => {
                    console.log('TLC: getSkills -> snapshots', snapshots);
                    if (!snapshots.empty) {
                        snapshots.forEach(element => {
                            console.log('TLC: getSkills -> element', element);
                        });
                    } else {
                        console.log('TLC: getSkills -> FAILED');
                    }
                });
            },
            addRatings () {
                _addRatings(mocks.ratings);
            },
            getRatings () {
                _getRatings().then(snapshots => {
                    console.log('TLC: getRatings -> snapshots', snapshots);
                    if (snapshots.exists) {
                        console.log('TLC: getRatings -> snapshots.data()', snapshots.data());
                    } else {
                        console.log('TLC: getRatings -> FAILED');
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>