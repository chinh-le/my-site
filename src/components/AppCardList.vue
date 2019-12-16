<template>
  <ul :class="$style['cards']">
    <li
      v-for="item in items"
      :key="item.header"
      :class="$style['cards-item']"
    >
      <BaseCard :item="item" />
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cards-item {
  border-radius: 0.5em;
  background-color: $card-list-bg-color;
  padding: 1em;
  margin-bottom: 2em;
  width: var(--cards-item-width);
}
</style>