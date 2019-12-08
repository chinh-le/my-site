<template>
  <div :class="$style.linkImage">
    <a
      :href="link.url"
      :class="[$style.link, $style[link.label]]"
      :title="link.label"
    >
      <img
        :src="link.image"
        :alt="link.label"
      >
    </a>
  </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object,
                default () {
                    return {};
                }
            }
        }
    }
</script>

<style lang="scss" module>
.linkImage {
    line-height: 1em;
}
.link{
    display: inline-flex;
    > img {
      width: var(--social-icon-dimension);
      height: var(--social-icon-dimension);
      padding: 1.3em;
      }
    &.linkedin {
      &:after {
        content: "linkedin";
      }
    }
    &.github {
      &:after {
        content: "github";
      }
    }
    &.instagram {
      &:after {
        content: "instagram";
      }
    }
    &:after {
      @include screen-reader-ready;
    }
  }
</style>