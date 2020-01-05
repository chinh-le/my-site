<template>
  <ul :class="$style['cards-overlay']">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="$style['cards-overlay-item']"
    >
      <BaseCardOverlay
        :item="item"
        :tabindex="tabIndex[index]"
      />
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
            tabIndex: {
                type: Object,
                default: () => {}
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        /* data () {
            return {
                tabIndex: _tabIndex
            };
        } */
    };
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