<template>
  <transition name="slide">
    <div class="navigation-container" v-show="isShow">
      <nav class="navigation">
        <button type="button" class="btn-nav-close" @click="closeNav()"></button>
        <ul class="lang">
          <li>
            <a href="#">EN</a>
          </li>
          <li>
            <a href="#">FR</a>
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
      </nav>
    </div>
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
$signin-width: 100%;
$appTxtColor: #fff;
$app-min-height: 500px;
$appBgColor: #333;
$body-padding: 2em;

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.btn-nav-close {
  font-family: "Roboto";
  font-size: 2em;
  padding: 0.1em 0 0.1em 1em;
  align-self: flex-end;
  color: $appTxtColor;
  &:before {
    content: "\00d7";
  }
  &:after {
    content: "close navigation";
    @extend .visually-hidden;
  }
}
.navigation-container {
  width: $signin-width;
  height: $signin-width;
  min-height: $app-min-height;
  position: absolute;
  right: 0;
  top: 0;
  background-color: $appBgColor;
}
.navigation {
  display: flex;
  flex-direction: column;
  padding: $body-padding;
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
