<template>
  <ul :class="$style.cards">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      <BaseCardOverlay :item="item" />
    </li>
  </ul>
</template>

<script>
    import BaseCardOverlay from './BaseCardOverlay';

    export default {
        components: {
            BaseCardOverlay
        },
        props: {
            items: {
                type: Array,
                default () {
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss" module>
.cards {
    > li {
        width: 100%;
        margin-bottom: 1em;
    }
}
</style>