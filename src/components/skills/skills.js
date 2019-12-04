import { _getSkills, _getRatings } from '@/firebase';

export default {
  data () {
    return {
      skills: [],
      ratings: {},
      ratingsLength: 0,
      totalDot: null
    };
  },
  // created () {
  beforeCreate () {
    _getRatings().then(doc => {
      if (doc.exists) {
        this.ratings = doc.data();
        this.ratingsLength = Object.keys(this.ratings).length; // key() returns an array
        _getSkills().then(querySnapshots => {
          if (!querySnapshots.empty) {
            querySnapshots.forEach(element => {
              this.skills.push(element.data());
            });
          } else {
            // console.log('TLC: beforeCreate -> skills list empty');
            this.skills = false;
          }
        });
      } else {
        // console.log('TLC: beforeCreate -> ratings list empty');
        this.ratings = false;
      }
    });
  }
};
