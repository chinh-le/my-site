<template>
  <div class="site-auth" id="site-auth">
    <transition name="fading" mode="in-out">
      <div class="bg-canvas" v-show="isShow" @click="closeSignin()"></div>
    </transition>
    <!-- <div class="bg-canvas" :class="{hidden: !isShow}" @click="closeSignin()"></div> -->
    <transition name="slide" mode="in-out">
      <div class="signin" v-show="isShow" id="signin">
        <button type="button" @click="closeSignin()" class="btn-close" title="close sign in">
          <i class="material-icons">close</i>
        </button>
        <form novalidate @submit.prevent="onSubmit($event)" autocomplete="on" role="authentication">
          <ul>
            <li>
              <div class="form-input">
                <label for="auth-email">Email</label>
                <input
                  id="auth-email"
                  v-model="auth.email"
                  type="email"
                  autocomplete="email"
                  @blur="$v.auth.email.$touch()"
                  placeholder="email*"
                  aria-label="email address"
                  aria-required="true"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.email.$dirty && (!$v.auth.email.required ||!$v.auth.email.isDefault)}"
                role="alert"
                aria-relevant="all"
              >please use the provided email</span>
              <!-- <span
                class="form-error"
                :class="{visible: $v.auth.email.$dirty && (!$v.auth.email.isDefault || !$v.auth.email.validAddress)}"
              >
                <span v-if="!$v.auth.email.isDefault">please use the provided email</span>
                <span v-else-if="!$v.auth.email.validAddress">invalid</span>
              </span>-->
            </li>
            <li>
              <div class="form-input">
                <label for="auth-password">Password</label>
                <input
                  id="auth-password"
                  v-model="auth.password"
                  type="password"
                  :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                  @blur="$v.auth.password.$touch()"
                  placeholder="password*"
                  aria-label="password"
                  aria-required="true"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.password.$dirty && !$v.auth.password.isDefault}"
                role="alert"
                aria-relevant="all"
              >please use the provided password</span>
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
          <button
            :disabled="$v.$invalid"
            type="submit"
            title="submit form"
            role="button"
          >{{ isSigningUp ? 'Sign Up' : 'Sign In' }}</button>
        </form>
        <p class="error-request" v-if="isErrorRequestCode">
          Oops! There's something wrong with our server.
          <span>[code: {{isErrorRequestCode}}]</span>
          <br />Please try again later.
        </p>
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
// import { scrollTo } from '@/helpers';
// import { scrollTo, emailRegex } from '@/helpers';
import SvgSpinner from './SvgSpinner';

export default {
  components: {
    appSvgSpinner: SvgSpinner
  },
  created () {
    // // // // console.log('TLC: Authentication - created -> created');
    eventBus.$on('evtBusOpenAuth', () => {
      /* scrollTo({
        x: 0,
        y: 0
      }); */

      this.isShow = true;

      disableBodyScroll(this.elemPersistLockScroll);
    });
  },
  beforeDestroy () {
    // // // // console.log('TLC: Authentication - beforeDestroy -> beforeDestroy');
    clearAllBodyScrollLocks();
  },
  destroyed () {
    // // // // console.log('TLC: Authentication - destroyed -> destroyed');
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
    // // // // console.log('TLC: Authentication - beforeMount -> beforeMount');
  },
  mounted () {
    // // // // console.log('TLC: Authentication - mounted -> mounted');
    this.elemPersistLockScroll = document.querySelector('#site-auth');
  },
  data () {
    return {
      isErrorRequestCode: false,
      isLoading: false,
      elemPersistLockScroll: null,
      isShow: false,
      recaptchaAction: 'login',
      signingOption: false,
      isSigningUp: false,
      auth: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    auth: {
      email: {
        required,
        /* validAddress (email) {
          return emailRegex.test(email);
        }, */
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
        email: this.auth.email,
        password: this.auth.password
      };
      // // // console.log('TLC: onSubmit -> payload', payload);

      this.isLoading = true;
      this.isErrorRequestCode = false;

      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            if (this.isSigningUp) {
              signup(payload)
                .then(res => {
                  // // console.log('TLC: onSubmit -> res', res);
                  if (res.user) {
                    this.closeSignin();
                    this.isLoading = false;
                  }
                })
                .catch(err => {
                  // console.log('TLC: onSubmit -> err', err);
                  this.isErrorRequestCode = err.code;
                  this.isLoading = false;
                });
            } else {
              login(payload)
                .then(res => {
                  // // console.log('TLC: onSubmit -> res', res);
                  if (res.user) {
                    this.closeSignin();
                    this.isLoading = false;
                  }
                })
                .catch(err => {
                  // console.log('TLC: onSubmit -> err', err.code);
                  this.isErrorRequestCode = err.code;
                  this.isLoading = false;
                });
            }
          } else {
            // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
            this.isErrorRequestCode = 'SPAM Automated Abused!!!';
            this.isLoading = false;
          }
        })
        .catch(err => {
          // console.log('TLC: onSubmit -> err', err);
          this.isErrorRequestCode = err.code;
          this.isLoading = false;
        });
    }
  }
};
</script>
<style scoped lang="scss">
@import "../styles/components/authentication";
</style>
