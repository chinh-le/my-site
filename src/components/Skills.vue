<template>
  <div class="skills">
    <h3>Skills</h3>
    <ul class>
      <li v-for="skill in skills" :key="skill.name">
        <h4>{{skill.name}}</h4>
        <div class="dot-set">
          <div class="dots" id="dots">
            <span
              class="dot"
              v-for="dot in ratingsLength"
              :key="dot"
              :class="{fill: dot <= skill.rate, empty: dot > skill.rate}"
            ></span>
          </div>
          <label for="dots">{{ratings[skill.rate]}}</label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
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
    // console.log('beforeCreate');
    // console.log('this.ratingsLength: ', this.ratingsLength);
    _getRatings().then(doc => {
      // console.log('doc.exists: ', doc.exists);
      if (doc.exists) {
        this.ratings = doc.data();
        this.ratingsLength = Object.keys(this.ratings).length; // key() returns an array
        // this.totalDot = ratingsData.length;
        _getSkills().then(querySnapshots => {
          // console.log('querySnapshots.empty: ', querySnapshots.empty);
          if (!querySnapshots.empty) {
            querySnapshots.forEach(element => {
              this.skills.push(element.data());
            });
          } else {
            console.error('Fetching skills data: FAILED!!!');
          }
        });
      } else {
        console.error('Fetching ratings data: FAILED!!!');
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/skills";
</style>
