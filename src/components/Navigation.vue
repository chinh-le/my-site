<template>
  <nav class="site-nav">
    <div class="bg-canvas" v-show="isShow" @click="closeNav()"></div>
    <transition name="slide">
      <div class="navigation" v-show="isShow" id="navigation">
        <button type="button" class="btn-close" @click="closeNav()">
          <i class="material-icons md-light">close</i>
        </button>
        <div class="content">
          <ul class="lang">
            <li>
              <a href="#" class="current">en</a>
            </li>
            <li>
              <a href="#">fr</a>
            </li>
          </ul>
          <ul class="page-links">
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
              <router-link to="/education" class>Education</router-link>
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
  </nav>
</template>
<script>
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import SocialMedia from './SocialMedia.vue';
import Copyright from './Copyright';
import { eventBus } from '@/eventBus';
import { scrollTo } from '@/helpers';

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

      enableBodyScroll(this.elPersistLockScroll);
    }
  },
  data () {
    return {
      isShow: false,
      elPersistLockScroll: document.querySelector('#navigation')
    };
  },
  beforeCreated () {
    // console.log('nav beforeCreated: ', this.$route);
  },
  created () {
    // console.log('nav created: ', this.$route);
    eventBus.$on('ebOpenNav', () => {
      scrollTo({
        x: 0,
        y: 0
      });

      this.isShow = true;

      disableBodyScroll(this.elPersistLockScroll);
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
    clearAllBodyScrollLocks();
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
@import "@/styles/components/navigation";
</style>
