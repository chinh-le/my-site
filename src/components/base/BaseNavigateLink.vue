<template>
  <router-link
    :to="view.path"
    :class="[$style['link'], $style[view.class]]"
    :exact-active-class="$style['exact-active']"
    :title="view.title"
  />
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
  color: $color-nav-links-current;
}
.link {
  display: block;
  color: $color-nav-links;
  padding: 0.5em 0 0.5em 0.5em;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
}
.link-home {
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
}
</style>