<template>
  <ul :class="$style['skills-list']">
    <li
      v-for="skill in skills"
      :key="skill.name"
      :class="$style['skills-list-item']"
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
    import BaseDotSet from './base/BaseDotSet';

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
.skills-list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1em;
}
</style>