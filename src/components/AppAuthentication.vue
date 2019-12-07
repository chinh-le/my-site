<template>
  <div
    id="site-auth"
    class="site-auth"
  >
    <transition
      name="fading"
      mode="in-out"
    >
      <div
        v-show="isShow"
        class="bg-canvas"
        @click="closeSignin()"
      />
    </transition>
    <transition
      name="slide"
      mode="in-out"
    >
      <div
        v-show="isShow"
        id="signin"
        class="signin"
      >
        <button
          type="button"
          class="btn-close"
          title="close sign in"
          @click="closeSignin()"
        >
          <i class="material-icons">close</i>
        </button>
        <form
          novalidate
          autocomplete="on"
          role="authentication"
          @submit.prevent="onSubmit($event)"
        >
          <ul>
            <li>
              <div class="form-input">
                <label for="auth-email">Email</label>
                <input
                  id="auth-email"
                  v-model="auth.email"
                  type="email"
                  autocomplete="email"
                  placeholder="email*"
                  aria-label="email address"
                  aria-required="true"
                  @blur="$v.auth.email.$touch()"
                >
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.email.$dirty && (!$v.auth.email.required ||!$v.auth.email.isDefault)}"
                role="alert"
                aria-relevant="all"
              >please use the provided email</span>
            </li>
            <li>
              <div class="form-input">
                <label for="auth-password">Password</label>
                <input
                  id="auth-password"
                  v-model="auth.password"
                  type="password"
                  :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                  placeholder="password*"
                  aria-label="password"
                  aria-required="true"
                  @blur="$v.auth.password.$touch()"
                >
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.password.$dirty && !$v.auth.password.isDefault}"
                role="alert"
                aria-relevant="all"
              >please use the provided password</span>
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
          >
            {{ isSigningUp ? 'Sign Up' : 'Sign In' }}
          </button>
        </form>
        <p
          v-if="isErrorRequestCode"
          class="error-request"
        >
          Oops! There's something wrong with our server.
          <span>[code: {{ isErrorRequestCode }}]</span>
          <br>Please try again later.
        </p>
        <AppSpinner v-show="isLoading" />
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
    import { recaptchaElement } from '@/js/recaptcha';
    import { eventBus } from '@/js/eventBus';
    // import { scrollTo } from '@/js/helpers';
    // import { scrollTo, emailRegex } from '@/js/helpers';
    import AppSpinner from './AppSpinner';

    export default {
        components: {
            AppSpinner
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
        beforeMount () {
            // // // // console.log('TLC: Authentication - beforeMount -> beforeMount');
        },
        mounted () {
            // // // // console.log('TLC: Authentication - mounted -> mounted');
            this.elemPersistLockScroll = document.querySelector('#site-auth');
        },
        validations: {
            auth: {
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

<style lang="scss" scoped>
.signin {
  @include slide-in-panel;
}

@include form;

@include error-request;

form {
  padding: 2em;
}

.footnote {
    @include footnote;
    margin-bottom: 3em;
}

@include btn-close-x("close authentication");
  
@include slide-helper;

@include bg-canvas;

@include fading-helper;

</style>