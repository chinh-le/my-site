<template>
  <transition name="slide">
    <div
      v-show="show"
      class="signin"
      >
      <button
        type="button"
        @click="closeSiginin()"
        >
        [close icon]
      </button>
      <form @submit.prevent="onSubmit()">
        <ul>
          <li>
            <label for="email">Email</label>
            <input
              id="email"
              v-model.lazy="email"
              type="email"
              >
          </li>
          <li>
            <label for="password">Password</label>
            <input
              id="password"
              v-model.lazy="password"
              type="password"
              >
          </li>
        </ul>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  </transition>
</template>
<script>
import { login } from '@/firebase';
export default {
  props: {
    show: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  data () {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    closeSiginin () {
      this.$emit('ceSignin');
    },
    onSubmit () {
      const payload = {
        email: this.email,
        password: this.password
      };

      login(payload);
    }
  }
};
</script>
<style scoped lang="scss">
.signin {
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
