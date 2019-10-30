<template>
  <transition name="slide">
    <div v-show="show" class="signin">
      <button type="button" @click="closeSiginin()">[close icon]</button>
      <form @submit.prevent="onSubmit()">
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
import axios from '@/axios-auth';
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
      console.log('onSubmit()');
      console.dir(axios);
      axios.post('/accounts:signInWithPassword?key=AIzaSyAYn15a51XgUgS7QweQQO-00O7cpyGd47c', {
        email: 'resume@chinhle.ca',
        password: 'download',
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
