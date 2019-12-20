<template>
  <div :class="$style['link-image']">
    <a
      :href="link.url"
      :class="[$style['link'], $style[link.label]]"
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
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" module>
.link-image {
  line-height: 1em;
  &:hover {
        cursor: pointer;
    }
}
.link{
  display: inline-flex;
  > img {
    width: var(--social-icon-dimension);
    height: var(--social-icon-dimension);
    transition: all var(--the-header-anim-duration) var(--the-header-anim-timing);
    padding: 1.3em;
  }
  &:after {
    @include screen-reader-ready;
  }
}
.linkedin {
  &:after {
    content: "linkedin";
  }
}
.github {
  &:after {
    content: "github";
  }
}
.instagram {
  &:after {
    content: "instagram";
  }
}
</style>