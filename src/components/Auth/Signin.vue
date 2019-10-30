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
            <label for="username">Username</label>
            <input
              id="username"
              type="text"
              >
          </li>
          <li>
            <label for="password">Password</label>
            <input
              id="password"
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
import axios from '@/http/axios-auth';
import config from '@/config';

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
    closeSiginin () {
      this.$emit('ceSignin');
    },
    onSubmit () {
      axios.post('/accounts:signInWithPassword?key=' + config.apiKey, {
        email: '',
        password: '',
        returnSecureToken: true
      })
        .then(res => {
          console.log('res: ', res);
        })
        .catch(err => {
          console.log('err: ', err);
        });
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
