<template>
  <div>
    <a
      :href="item.url"
      :class="$style.card"
      :title="item.label"
    >
      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.label"
      >
      <span
        :class="[$style.overlay, {[$style.blank]: !item.image}]"
      >{{ item.label }}</span>
    </a>
  </div>
</template>

<script>
    export default {
        props: {
            item: {
                type:Object,
                default () {
                    return {};
                } 
            }
        }
    }
</script>

<style lang="scss" module>
.card {
    display: block;
    color: $color-txt;
    text-decoration: none;
    position: relative;
    > img {
        width: 100%;
    }
    > .overlay {
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
      &.blank {
        position: relative;
        height: 200px;
        background-color: rgba(0, 0, 0, 0.9);
      }
    }
}
</style>