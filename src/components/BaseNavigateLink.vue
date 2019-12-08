<template>
  <router-link
    :to="view.path"
    :class="['link', view.class]"
    :title="view.title"
  >
    <i />
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
        },
        created () {
            
            // console.log('TLC: created -> ', this.view);
        }
    }
</script>

<style lang="scss" scoped>
.link {
      color: $color-nav-links;
      padding: 0.5em 0 0.5em 0.5em;
      text-decoration: none;
      display: block;
      &.router-link-exact-active,
      &.current {
        color: $color-nav-links-current;
        > i {
          background-color: #000;
        }
      }
      &.link-home {
        &:before {
          content: "Home";
        }
      }
      &.link-about {
        &:before {
          content: "About";
        }
      }
      &.link-works {
        &:before {
          content: "Works";
        }
      }
      &.link-education {
        &:before {
          content: "Education";
        }
      }
      &.link-contact {
        &:before {
          content: "Contact";
        }
      }
      > i {
        display: none;
        width: 0.25em;
        height: 0.25em;
        border: 1px solid #000;
        border-radius: 0.25em;
        font-style: normal;
      }
    }
</style>