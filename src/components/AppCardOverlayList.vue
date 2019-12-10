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
                default () {
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss" module>
.cards-overlay-item{
  width: 100%;
  margin-bottom: 1em;
}
</style>