<template>
  <div class="navigation">
    <transition name="slide">
      <!-- <nav v-show="show"> -->
      <nav>
        <button
          type="button"
          class="btnNavClose"
          @click="cb()"
          >
          close
        </button>
        <ul class="">
          <li class="">
            <router-link
              to="/"
              class=""
              >
              Home
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/about"
              class=""
              >
              About
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/works"
              class=""
              >
              Works
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/services"
              class=""
              >
              Services
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/resume"
              class=""
              >
              Resume
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/contact"
              class=""
              >
              Contact
            </router-link>
          </li>
        </ul>
        <app-social-media />
      </nav>
    </transition>
  </div>
</template>
<script>
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    appSocialMedia: SocialMedia
  },
  props: {
    /* elemHeight: {
      type: Number
    }, */
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
.navigation {
  display: none;
}
.btnNavClose {
  font-family: 'Roboto';
    font-size: 3em;
    padding: 0 0.2em;
  &:before {
    content: '\00d7';
    /* font-family: 'Roboto';
    font-size: 4em; */
  }
}
nav {
  float: right;
  width: 200px;
  position: relative;
  right: 0;
  top: 0;
}
.slide-enter-active {
  animation: slideIn .5s ease-in;
}
.slide-leave-active {
  animation: slideOut .4s ease-in;
}
@keyframes slideIn {
  from {
    transform: translateX(200px);
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
    transform: translateX(200px);
  }
}
</style>
