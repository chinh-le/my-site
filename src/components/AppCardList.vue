<template>
  <ul :class="$style['cards']">
    <li
      v-for="(item, index) in items"
      :key="item.header"
      :class="$style['cards-item']"
    >
      <BaseCard
        :item="item" 
        :tab-index="tabIndex[index]"
      />
    </li>
  </ul>
</template>

<script>
    import BaseCard from './base/BaseCard';

    export default {
        components: {
            BaseCard
        },
        props: {
            tabIndex: {
                type: Array,
                default: () => []
            },
            items: {
                type: Array,
                default: () => []
            }
        }        
    };
</script>

<style lang="scss" module>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cards-item {
  margin-bottom: 2em;
  width: var(--cards-item-width);
}
</style>