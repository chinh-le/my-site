<template>
  <div class="site-auth" id="site-auth">
    <div class="bg-canvas" v-show="isShow" @click="closeSignin()"></div>
    <transition name="slide">
      <div class="signin" v-show="isShow" id="signin">
        <button type="button" @click="closeSignin()" class="btn-close">
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
        <app-svg-spinner v-show="isLoading" />
      </div>
    </transition>
  </div>
</template>
<script>
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import config from '@/config';
import { required } from 'vuelidate/lib/validators';
import { signup, login } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';
import { eventBus } from '@/eventBus';
import { scrollTo } from '@/helpers';
import SvgSpinner from './SvgSpinner';

export default {
  components: {
    appSvgSpinner: SvgSpinner
  },
  created () {
    // // console.log('TLC: Authentication - created -> created');
    eventBus.$on('evtBusOpenAuth', () => {
      scrollTo({
        x: 0,
        y: 0
      });

      this.isShow = true;

      disableBodyScroll(this.elemPersistLockScroll);
    });
  },
  beforeDestroy () {
    // // console.log('TLC: Authentication - beforeDestroy -> beforeDestroy');
    clearAllBodyScrollLocks();
  },
  destroyed () {
    // // console.log('TLC: Authentication - destroyed -> destroyed');
  },
  props: {
    show: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  beforeMount () {
    // // console.log('TLC: Authentication - beforeMount -> beforeMount');
  },
  mounted () {
    // // console.log('TLC: Authentication - mounted -> mounted');
    this.elemPersistLockScroll = document.querySelector('#site-auth');
  },
  data () {
    return {
      isLoading: false,
      elemPersistLockScroll: null,
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
    closeSignin () {
      // this.$emit('ceSignin');
      this.isShow = false;

      enableBodyScroll(this.elemPersistLockScroll);
    },
    onSubmit (evt) {
      const payload = {
        email: this.user.email,
        password: this.user.password
      };
      // console.log('payload: ', payload);

      this.isLoading = true;

      recaptchaElement(this.recaptchaAction).then(res => {
        if (res.data.success && res.data.action === this.recaptchaAction) {
          if (this.isSigningUp) {
            signup(payload).then(res => {
              // console.log('res: ', res);
              if (res.user) {
                this.closeSignin();
                this.isLoading = false;
              }
            });
            /* .catch(err => {
                  // console.error(err);
                }) */
          } else {
            login(payload).then(res => {
              // console.log('res: ', res);
              if (res.user) {
                this.closeSignin();
                this.isLoading = false;
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
