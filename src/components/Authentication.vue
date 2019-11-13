<template>
  <div class="authentication">
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
        <form
          novalidate
          @submit.prevent="onSubmit($event)"
          >
          <ul>
            <li>
              <label for="email">Email</label>
              <input
                id="email"
                v-model="user.email"
                type="email"
                autocomplete="username"
                @input="$v.user.email.$touch()"
                >
              <p v-show="!$v.user.email.isDefault && $v.user.email.$dirty">
                not as provided to you
              </p>
            </li>
            <li>
              <label for="password">Password</label>
              <input
                id="password"
                v-model="user.password"
                type="password"
                :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                @input="$v.user.password.$touch()"
                >
              <p v-show="!$v.user.password.isDefault && $v.user.password.$dirty">
                not as provided to you
              </p>
            </li>
            <li v-show="signingOption">
              <input
                id="isSignup"
                v-model="isSigningUp"
                type="checkbox"
                >
              <label for="isSignup">signing up</label>
            </li>
          </ul>
          <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
          <button
            :disabled="$v.$invalid"
            type="submit"
            >
            {{ isSigningUp ? 'Sign Up' : 'Sign In' }}
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>
import config from '@/config';
import { required } from 'vuelidate/lib/validators';
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
      signingOption: false,
      isSigningUp: false,
      user: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    user: {
      email: {
        required,
        isDefault (email) {
          return email === config.appDefaultEmail;
        }
      },
      password: {
        required,
        isDefault: (password) => {
          return password === config.appDefaultPassword;
        }
      }
    }
  },
  methods: {
    closeSiginin () {
      this.$emit('ceSignin');
    },
    onSubmit (evt) {
      const payload = {
        email: this.user.email,
        password: this.user.password
      };
      // console.log('payload: ', payload);

      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            if (this.isSigningUp) {
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
$signin-width: 200px;
.signin {
    width: $signin-width;
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
    transform: translateX($signin-width);
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
    transform: translateX($signin-width);
  }
}

.grecaptcha-badge {
  visibility: hidden;
}
</style>
