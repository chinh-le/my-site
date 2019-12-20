<template>
  <router-link
    :to="view.path"
    :class="[$style['link'], $style[view.class]]"
    :exact-active-class="$style['exact-active']"
    :title="$t(`navigation.${view.title}`)"
  >
    <i />
    <span :class="$style['link-sidebar-name']">{{ $t(`navigation.${view.name}`) }}</span>
  </router-link>
</template>

<script>
    export default {
        props: {
            view: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" module>
.link.exact-active {
  > i {
    background-color: $nav-links-sidebar-color;
  }
}
.link {
  display: inline-block;
  padding: 0;
  color: $nav-links-sidebar-color;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  > i {
    display: block;
    margin: 0.5em;
    width: 0.25em;
    height: 0.25em;
    border: 1px solid $nav-links-sidebar-border-color;
    border-radius: 0.25em;
    font-style: normal;
    background-color: transparent;
  }
}
.link-sidebar-name {
  @include screen-reader-ready;
}
</style>