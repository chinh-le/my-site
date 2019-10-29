<template>
  <transition name="slide">
    <nav v-show="showNav">
      <button type="button" @click="toggleNav()">[close icon]</button>
      <ul class="">
        <li class=""><router-link to="/" class="">Home</router-link></li>
        <li class=""><router-link to="/about" class="">About</router-link></li>
        <li class=""><router-link to="/works" class="">Works</router-link></li>
        <li class=""><router-link to="/services" class="">Services</router-link></li>
        <li class=""><router-link to="/resume" class="">Resume</router-link></li>
        <li class=""><router-link to="/contact" class="">Contact</router-link></li>
      </ul>
    </nav>
  </transition>
</template>
<script>
export default {
  props: {
    showNav: {
      type: Boolean,
      default () {
        return false;
      }
    },
    toggleNav: {
      type: Function
    }
  }
};
</script>
<style scoped lang="scss">
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
