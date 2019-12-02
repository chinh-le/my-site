<template>
  <div class="skills">
    <h3>Skills</h3>
    <ul v-if="skills.length > 0">
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
    <p v-else>Oops! There's something wrong with our server. Please try again later.</p>
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
          }
        });
      } else {
        // console.log('TLC: beforeCreate -> ratings list empty');
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/skills";
</style>
