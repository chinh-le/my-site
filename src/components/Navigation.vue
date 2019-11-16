<template>
  <transition name="slide">
    <div class="container" v-show="isShow">
      <div class="navigation">
        <button type="button" class="btn-nav-close" @click="closeNav()"></button>
        <ul class="lang">
          <li>
            <a href="#" class="current">en</a>
          </li>
          <li>
            <a href="#">fr</a>
          </li>
        </ul>
        <ul class="views">
          <li class>
            <router-link to="/" class>Home</router-link>
          </li>
          <li class>
            <router-link to="/about" class>About</router-link>
          </li>
          <li class>
            <router-link to="/works" class>Works</router-link>
          </li>
          <li class>
            <router-link to="/services" class>Services</router-link>
          </li>
          <li class>
            <router-link to="/resume" class>Resume</router-link>
          </li>
          <li class>
            <router-link to="/contact" class>Contact</router-link>
          </li>
        </ul>
        <app-social-media />
        <app-copyright></app-copyright>
      </div>
    </div>
  </transition>
</template>
<script>
import SocialMedia from './SocialMedia.vue';
import { eventBus } from '@/eventBus';
import Copyright from './Copyright';

export default {
  watch: {
    $route (to, from) {
      // console.log('to: ', to);
      // console.log('from: ', from);
      this.isShow = false; // close nav on route change
    }
  },
  methods: {
    closeNav () {
      this.isShow = false;
    }
  },
  data () {
    return {
      isShow: false
    };
  },
  beforeCreated () {
    // console.log('nav beforeCreated: ', this.$route);
  },
  created () {
    // console.log('nav created: ', this.$route);
    eventBus.$on('ebOpenNav', () => {
      this.isShow = true;
    });
  },
  beforeMount () {
    // console.log('nav beforeMOunt: ', this.$route);
  },
  mounted () {
    // console.log('nav mounted: ', this.$route);
  },
  beforeUpdate () {
    // console.log('nav beforeUpdate: ', this.$route);
  },
  updated () {
    // console.log('nav updated: ', this.$route);
  },
  beforeDestroy () {
    // console.log('nav beforeDestroy: ', this.$route);
  },
  destroyed () {
    // console.log('nav destroyed: ', this.$route);
  },
  components: {
    appSocialMedia: SocialMedia,
    appCopyright: Copyright
  },
  props: {
    navShow: {
      type: Boolean
    },
    nav: {
      show: {
        type: Boolean,
        default () {
          return false;
        }
      },
      cb: {
        type: Function
      }
    },
    show: {
      type: Boolean,
      default () {
        return false;
      }
    },
    cb: {
      type: Function,
      default () {
        return null;
      }
    }
  }
};
</script>
<style scoped lang="scss">
$signin-width: 100%;
$app-txt-color: #999;
$app-min-height: 500px;
$app-bg-color: #333;
$body-padding: 1em;
$font-fallback: Verdana, Geneva, Tahoma, sans-serif;
$font-heading: Roboto, $font-fallback;
$app-txt-color-focus: #b36a12;

a {
  color: $app-txt-color;
  text-decoration: none;
  display: block;
}
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  width: $signin-width;
  height: $signin-width;
  min-height: $app-min-height;
  background-color: $app-bg-color;
}
.navigation {
  display: flex;
  flex-direction: column;
  padding: $body-padding;
}
.btn-nav-close {
  font-family: "Roboto";
  font-size: 1.7em;
  padding: 0.5em 0 0 1em;
  align-self: flex-end;
  color: $app-txt-color;
  margin-bottom: 1em;
  &:before {
    content: "\00d7";
  }
  &:after {
    content: "close navigation";
    @extend .visually-hidden;
  }
}
.lang {
  margin-bottom: 3em;
  li {
    display: inline-block;
    margin-right: 1.5em;
    > a {
      text-transform: uppercase;
      font-size: 0.8em;
      &.current {
        color: $app-txt-color-focus;
      }
    }
  }
}
.views {
  font-family: $font-heading;
  font-size: 2em;
  margin-bottom: 1.5em;
  > li {
    margin-bottom: 0.5em;
  }
}
.social-media {
  margin-bottom: 3em;
}
.slide-enter-active {
  animation: slideIn 0.5s ease-in;
}
.slide-leave-active {
  animation: slideOut 0.4s ease-out;
}
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
