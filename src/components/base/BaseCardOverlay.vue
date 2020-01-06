<template>
  <div>
    <a
      :href="item.url"
      :class="$style['card']"
      :title="item.label"
      :tabindex="tabIndex"
      target="_blank"
    >
      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.label"
        :class="$style['card-image']"
      >
      <span
        :class="[$style['overlay'], {[$style['blank']]: !item.image}]"
      >{{ item.image ? item.label : $t(`images.${item.label}`) }}</span>
    </a>
    <p :class="$style['languages']">
      {{ item.languages }}
    </p>
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
  display: block;
  color: $base-txt-color;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}
.card-image {
  width: 100%;
}
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  color: #fff;
  text-transform: lowercase;
}
.languages {
  text-transform: lowercase;
  font-size: 0.7em;
  text-align: right;
  padding: 0.5em 1em 1em;
  line-height: 1.2em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #878787;
  &::first-letter {
    text-transform: lowercase;
  }
}
.blank {
  position: relative;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>