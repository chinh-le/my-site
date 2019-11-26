<template>
  <nav class="site-nav" id="site-nav">
    <div class="bg-canvas" v-show="isShow" @click="closeNav()" title="close navigation"></div>
    <transition name="slide">
      <div class="navigation" v-show="isShow" id="navigation">
        <button type="button" class="btn-close" @click="closeNav()" title="close navigation">
          <i class="material-icons md-light">close</i>
        </button>
        <div class="content">
          <app-lang />
          <app-page-links />
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
import Lang from './Lang';
import PageLinks from './PageLinks';
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

      enableBodyScroll(this.elemPersistLockScroll);
      // console.log('TLC: Navigation - closeNav -> enableBodyScroll');
    }
  },
  data () {
    return {
      isShow: false,
      elemPersistLockScroll: null
    };
  },
  beforeCreated () {
    // console.log('TLC: Navigation - beforeCreated -> beforeCreated');
  },
  created () {
    // console.log('TLC: Navigation - created -> created');

    eventBus.$on('evtBusOpenNav', () => {
      scrollTo({
        x: 0,
        y: 0
      });

      this.isShow = true;

      disableBodyScroll(this.elemPersistLockScroll);
      // console.log(
      // 'TLC: Navigation - created - evtBusOpenNav -> disableBodyScroll'
      // );
    });
  },
  beforeMount () {
    // console.log('TLC: Navigation - beforeMount -> beforeMount');
  },
  mounted () {
    // console.log('TLC: Navigation - mounted -> mounted');
    this.elemPersistLockScroll = document.querySelector('#site-nav');
  },
  beforeUpdate () {
    // console.log('TLC: Navigation - beforeUpdate -> beforeUpdate');
  },
  updated () {
    // console.log('TLC: Navigation - updated -> updated');
  },
  beforeDestroy () {
    // console.log('TLC: Navigation - beforeDestroy -> beforeDestroy');
    clearAllBodyScrollLocks();
  },
  destroyed () {
    // console.log('TLC: Navigation - destroyed -> destroyed');
  },
  components: {
    appLang: Lang,
    appPageLinks: PageLinks,
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
