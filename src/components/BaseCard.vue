<template>
  <div :class="$style.card">
    <h4>{{ item.header }}</h4>
    <p>
      <a
        :href="item.url"
        :title="item.url"
      >@{{ item.location }}</a>
    </p>
    <img
      :src="item.image"
      :alt="item.alt"
    >
  </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default () {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" module>
.card {
    h4 {
        font-size: 0.8em;
    }
    p {
        font-size: 0.7em;
        margin-bottom: 1em;
    }
    a {
        display: block;
        color: $color-unfocus;
    }
    img {
        width: 100%;
    }
}
</style>