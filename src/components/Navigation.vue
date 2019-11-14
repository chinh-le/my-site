<template>
  <transition name="slide">
    <nav v-show="isShow">
      <button type="button" class="btnNavClose" @click="closeNav()"></button>
      <ul class>
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
    </nav>
  </transition>
</template>
<script>
import SocialMedia from './SocialMedia.vue';
import { eventBus } from '@/eventBus';

export default {
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
  created () {
    eventBus.$on('ebOpenNav', () => {
      this.isShow = true;
    });
  },
  components: {
    appSocialMedia: SocialMedia
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
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.btnNavClose {
  font-family: "Roboto";
  font-size: 3em;
  padding: 0 0.2em;
  align-self: flex-end;
  &:before {
    content: "\00d7";
  }
  &:after {
    content: "close navigation";
    @extend .visually-hidden;
  }
}
nav {
  width: 100%;
  height: 100%;
  min-height: 500px !important; // $app-min-height !important;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
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
