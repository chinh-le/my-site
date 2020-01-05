<template>
  <div :class="$style['card']">
    <h4>{{ item.header }}</h4>
    <p>
      <a
        :href="item.url"
        :title="item.url"
        :tabindex="tabIndex"
      >@{{ item.location }}</a>
    </p>
    <img
      v-if="item.image"
      :src="item.image"
      :alt="item.alt"
    >
  </div>
</template>

<script>
    export default {
        props: {
            tabIndex: {
                type: Number,
                default: () => null
            },
            item: {
                type: Object,
                default: () => {}
            }
        }
    };
</script>

<style lang="scss" module>
.card {
  border-radius: 0.5em;
  background-color: $card-list-bg-color;
  padding: 1em;
    > h4 {
        font-size: 0.8em;
    }
    > p {
        font-size: 0.7em;
        margin-bottom: 1em;
      > a {
          display: block;
          color: $dimlight-color;
      }
    }
    > img {
        width: 100%;
    }
}
</style>