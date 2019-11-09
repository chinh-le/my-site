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
              v-model.lazy="user.email"
              type="email"
              >
          </li>
          <li>
            <label for="password">Password</label>
            <input
              id="password"
              v-model.lazy="user.password"
              type="password"
              >
          </li>
        </ul>
        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
        <button type="submit">
          {{ isSignup ? 'Sign Up' : 'Sign In' }}
        </button>
      </form>
    </div>
  </transition>
</template>
<script>
import config from '@/config';
import { signup, login } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';

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
      recaptchaAction: 'login',
      isSignup: !!config.appAuthenticationType,
      user: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    closeSiginin () {
      this.$emit('ceSignin');
    },
    onSubmit () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      };

      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            if (this.isSignup) {
              signup(payload);
            } else {
              login(payload);
            }
          } else {
            console.error('SPAM!!!');
          }
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

.grecaptcha-badge {
  visibility: hidden;
}
</style>
