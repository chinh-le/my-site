<template>
  <div :class="$style.skills">
    <h3>Skills</h3>
    <AppSkillsList
      v-if="skills.length > 0"
      :skills="skills"
      :ratings="ratings"
      :ratings-length="ratingsLength"
    />
    <p v-if="!ratings || !skills">
      Oops! There's something wrong with our server.
      <br>Please try again later.
    </p>
  </div>
</template>

<script>
    import { _getSkills, _getRatings } from '@/firebase';
    import AppSkillsList from './AppSkillsList';

    export default {
        components: {
            AppSkillsList
        },
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

</script>

<style lang="scss" module>
// $dot-width: 0.7em;

/* h4 {
    width: 60%;
    line-height: 1.2em;
} */
/* .skills {
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1em;
  }
} */
/* .dot-set {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .dots {
    .dot {
      width: $dot-width;
      height: $dot-width;
      display: inline-block;
      margin-left: 0.3em;
      border-radius: $dot-width;
      background-color: $color-icon-skill-dot;
      opacity: 0.15;

      &.fill {
        opacity: 0.4;
      }
      &.empty {
        opacity: 0.15;
      }
    }
  }
  label {
    font-size: 0.5em;
    line-height: 0.5em;
    @include color-unfocus;
  }
} */
</style>