<template>
  <ul :class="$style.skillsList">
    <li
      v-for="skill in skills"
      :key="skill.name"
    >
      <h4>{{ skill.name }}</h4>
      
      <BaseDotSet
        :ratings="ratings"
        :ratings-length="ratingsLength"
        :skill="skill"
      />
    </li>
  </ul>
</template>

<script>
    import BaseDotSet from './BaseDotSet';

    export default {
        components: {
            BaseDotSet
        },
        props: {
            skills: {
                type: Array,
                default () {
                    return [];
                }
            },
            ratings: {
                type: Object,
                default () {
                    return {};
                }
            },
            ratingsLength: {
                type: Number,
                default () {
                    return 0;
                }
            }
        }
    }
</script>

<style lang="scss" module>
.skillsList {
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1em;
  }
}
</style>