<template>
  <nav
    class="page-links"
    role="navigation"
    :style="posX"
  >
    <ul class>
      <li class>
        <router-link
          to="/"
          class="link-home"
          title="Home"
        >
          <i />
        </router-link>
      </li>
      <li class>
        <router-link
          to="/about"
          class="link-about"
          title="About"
        >
          <i />
        </router-link>
      </li>
      <li class>
        <router-link
          to="/works"
          class="link-works"
          title="Works"
        >
          <i />
        </router-link>
      </li>
      <li class>
        <router-link
          to="/education"
          class="link-education"
          title="Education"
        >
          <i />
        </router-link>
      </li>
      <li class>
        <router-link
          to="/contact"
          class="link-contact"
          title="Contact"
        >
          <i />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
    import { setPosX, windowResizeHandler } from '@/js/helpers';

    export default {
        data () {
            return {
                posX: null
            };
        },
        created () {
            // set/keep the nav (pageLinks) dots to the right aligning with the hamburger icon
            this.posX = setPosX('right');

            window.addEventListener('resize', this.resizeHandler);
        },
        beforeDestroy () {
            // console.log('TLC: PageLinks -> beforeDestroy');
            window.removeEventListener('resize', this.resizeHandler);
        },
        methods: {
            resizeHandler (evt) {
                this.posX = windowResizeHandler(evt, 'right');
            }
        }
    };

</script>

<style lang="scss" scoped>
.page-links {
  display: none;
  font-family: $font-family-navigation;
  font-size: 2em;
  margin-bottom: 1.5em;
  > ul > li {
    > a {
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
  }
}
</style>