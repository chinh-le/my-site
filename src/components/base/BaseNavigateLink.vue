<template>
  <router-link
    :to="view.path"
    :class="[$style['link'], $style[view.class]]"
    :exact-active-class="$style['exact-active']"
    :title="$t(`navigation.${view.title}`)"
  >
    {{ $t(`navigation.${view.name}`) }}
  </router-link>
</template>

<script>
    export default {
        props: {
            view: {
                type: Object,
                default () {
                    return {};
                }
            }
        }
    }
</script>

<style lang="scss" module>
.link.exact-active {
  color: $nav-links-color-active;
}
.link {
  display: block;
  color: $nav-links-color;
  padding: 0.5em 0.3em 0.5em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
}
 </style>