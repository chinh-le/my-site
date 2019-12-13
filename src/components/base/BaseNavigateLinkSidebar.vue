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
                default () {
                    return {};
                }
            }
        }
    }
</script>

<style lang="scss" module>
.link.exact-active {
  > i {
    background-color: #000;
  }
}
.link {
  display: inline-block;
  padding: 0;
  color: $nav-links-color;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  > i {
    display: block;
    margin: 0.5em;
    width: 0.25em;
    height: 0.25em;
    border: 1px solid #000;
    border-radius: 0.25em;
    font-style: normal;
    background-color: transparent;
  }
  /* &:before {
    @include screen-reader-ready;
  } */
}
.link-sidebar-name {
  @include screen-reader-ready;
}
/* .link-home {
  &:before {
    content: "Home";
  }
}
.link-about {
  &:before {
    content: "About";
  }
}
.link-works {
  &:before {
    content: "Works";
  }
}
.link-education {
  &:before {
    content: "Education";
  }
}
.link-contact {
  &:before {
    content: "Contact";
  }
} */
</style>