<template>
  <transition name="slide">
    <div class="container" v-show="isShow">
      <div class="navigation">
        <button type="button" class="btn-close" @click="closeNav()">
          <i class="material-icons md-light">close</i>
        </button>
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
@import "../style/components/navigation.scss";
</style>
