<template>
  <ul :class="$style['cards-overlay']">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="$style['cards-overlay-item']"
    >
      <BaseCardOverlay :item="item" />
    </li>
  </ul>
</template>

<script>
    import BaseCardOverlay from './base/BaseCardOverlay';

    export default {
        components: {
            BaseCardOverlay
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" module>
.cards-overlay {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cards-overlay-item{
  width: var(--cards-overlay-width);
  margin-bottom: 1em;
}
</style>