<template>
  <ul :class="$style.cards">
    <li
      v-for="item in items"
      :key="item.header"
    >
      <BaseCard :item="item" />
    </li>
  </ul>
</template>

<script>
    import BaseCard from './BaseCard';

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
    li {
        border-radius: 0.5em;
        background-color: #fff;
        padding: 1em;
        margin-bottom: 1em;
    }
}
</style>