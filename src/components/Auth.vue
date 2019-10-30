<template>
  <transition name="slide">
    <div v-show="show" class="auth">
      <button type="button" @click="closeAuth()">[close icon]</button>
      <form>
        <ul>
          <li>
            <label for="username">Username</label>
            <input type="text" id="username"/>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" id="password"/>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  methods: {
    closeAuth () {
      this.$emit('ceAuth');
    }
  }
};
</script>
<style scoped lang="scss">
.auth {
    width: 200px;
    position: absolute;
    top: 0;
    right: 0;
}
.slide-enter-active {
  animation: slideIn .5s ease-in;
}
.slide-leave-active {
  animation: slideOut .4s ease-out;
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
