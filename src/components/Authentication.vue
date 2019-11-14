<template>
  <transition name="slide">
    <div class="signin" v-show="isShow">
      <button type="button" @click="closeSiginin()" class="btn-close"></button>
      <form novalidate @submit.prevent="onSubmit($event)">
        <ul>
          <li>
            <label for="email">Email</label>
            <input
              id="email"
              v-model="user.email"
              type="email"
              autocomplete="username"
              @input="$v.user.email.$touch()"
            />
            <p v-show="!$v.user.email.isDefault && $v.user.email.$dirty">not as provided to you</p>
          </li>
          <li>
            <label for="password">Password</label>
            <input
              id="password"
              v-model="user.password"
              type="password"
              :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
              @input="$v.user.password.$touch()"
            />
            <p
              v-show="!$v.user.password.isDefault && $v.user.password.$dirty"
            >not as provided to you</p>
          </li>
          <li v-show="signingOption">
            <input id="isSignup" v-model="isSigningUp" type="checkbox" />
            <label for="isSignup">signing up</label>
          </li>
        </ul>
        <p>
          This site is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
          >Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
        <button :disabled="$v.$invalid" type="submit">{{ isSigningUp ? 'Sign Up' : 'Sign In' }}</button>
      </form>
    </div>
  </transition>
</template>
<script>
import config from '@/config';
import { required } from 'vuelidate/lib/validators';
import { signup, login } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';
import { eventBus } from '@/eventBus';

export default {
  created () {
    eventBus.$on('ebOpenAuth', () => {
      this.isShow = true;
    });
  },
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
      isShow: false,
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
        isDefault: password => {
          return password === config.appDefaultPassword;
        }
      }
    }
  },
  methods: {
    closeSiginin () {
      // this.$emit('ceSignin');
      this.isShow = false;
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
              signup(payload)
                .then(res => {
                  console.log('res: ', res);
                  if (res.user) {
                    this.isShow = false; // close login form
                  }
                })
                .catch(err => {
                  console.log('1err: ', err);
                });
            } else {
              login(payload)
                .then(res => {
                  console.log('res: ', res);
                  if (res.user) {
                    this.isShow = false; // close login form
                  }
                })
                .catch(err => {
                  console.log('1err: ', err);
                });
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
$signin-width: 100%;
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.signin {
  width: $signin-width;
  position: absolute;
  top: 0;
  right: 0;
  width: $signin-width;
  height: $signin-width;
  background-color: lightseagreen;
  display: flex;
  flex-direction: column;
}
.btn-close {
  font-family: "Roboto";
  font-size: 3em;
  padding: 0 0.2em;
  align-self: flex-end;
  &:before {
    content: "\00d7";
  }
  &:after {
    content: "close authentication";
    @extend .visually-hidden;
  }
}
.slide-enter-active {
  animation: slideIn 0.5s ease-in;
}
.slide-leave-active {
  animation: slideOut 0.4s ease-out;
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
