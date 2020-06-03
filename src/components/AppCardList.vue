<template>
  <ul :class="$style['cards']">
    <li
      v-for="(item, index) in reverseItems"
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
        },
        computed: {
            reverseItems () {
                return this.items.slice().reverse();
            }
        }        
    };
</script>

<style lang="scss" module>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cards-item {
  width: var(--cards-item-width);
  margin-bottom: 2em;
  margin-right: var(--cards-item-margin-right);
}
</style>