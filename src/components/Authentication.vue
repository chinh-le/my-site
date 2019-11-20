<template>
  <div class="site-auth">
    <div class="bg-canvas" v-show="isShow" @click="closeSiginin()"></div>
    <transition name="slide">
      <div class="signin" v-show="isShow">
        <button type="button" @click="closeSiginin()" class="btn-close">
          <i class="material-icons md-light">close</i>
        </button>
        <form novalidate @submit.prevent="onSubmit($event)">
          <ul>
            <li>
              <div class="form-input">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="user.email"
                  type="email"
                  autocomplete="username"
                  @input="$v.user.email.$touch()"
                  placeholder="email*"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: !$v.user.email.isDefault && $v.user.email.$dirty}"
              >Please use the provided</span>
            </li>
            <li>
              <div class="form-input">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="user.password"
                  type="password"
                  :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                  @input="$v.user.password.$touch()"
                  placeholder="password*"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: !$v.user.password.isDefault && $v.user.password.$dirty}"
              >Please use the provided</span>
            </li>
            <li v-show="signingOption">
              <input id="isSignup" v-model="isSigningUp" type="checkbox" />
              <label for="isSignup">signing up</label>
            </li>
          </ul>
          <p class="footnote">
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
  </div>
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

      recaptchaElement(this.recaptchaAction).then(res => {
        if (res.data.success && res.data.action === this.recaptchaAction) {
          if (this.isSigningUp) {
            signup(payload).then(res => {
              // console.log('res: ', res);
              if (res.user) {
                this.isShow = false; // close login form
              }
            });
            /* .catch(err => {
                  // console.error(err);
                }) */
          } else {
            login(payload).then(res => {
              // console.log('res: ', res);
              if (res.user) {
                this.isShow = false; // close login form
              }
            });
            /* .catch(err => {
                  // console.error(err);
                }) */
          }
        } else {
          // console.error('SPAM!!!');
        }
      });
      /* .catch(err => {
          // console.error(err);
        }) */
    }
  }
};
</script>
<style scoped lang="scss">
@import "../styles/components/authentication";
</style>
