<template>
  <div>
    <form
      :class="$style.formAuthenticate"
      novalidate
      autocomplete="on"
      role="authentication"
      @submit.prevent="onSubmit($event)"
    >
      <ul>
        <li>
          <div :class="$style.formInputContainer">
            <label
              :class="$style.inputLabel"
              for="auth-email"
            >Email</label>
            <input
              id="auth-email"
              v-model="auth.email"
              :class="$style.input"
              type="email"
              autocomplete="email"
              placeholder="email*"
              aria-label="email address"
              aria-required="true"
              @blur="$v.auth.email.$touch()"
            >
          </div>
          <span
            :class="[$style.inputError, {[$style.visible]: $v.auth.email.$dirty && (!$v.auth.email.required ||!$v.auth.email.isDefault)}]"
            role="alert"
            aria-relevant="all"
          >please use the provided email</span>
        </li>
        <li>
          <div :class="$style.formInputContainer">
            <label
              :class="$style.inputLabel"
              for="auth-password"
            >Password</label>
            <input
              id="auth-password"

              v-model="auth.password"
              :class="$style.input"
              type="password"
              :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
              placeholder="password*"
              aria-label="password"
              aria-required="true"
              @blur="$v.auth.password.$touch()"
            >
          </div>
          <span
            :class="[$style.inputError, {[$style.visible]: $v.auth.password.$dirty && !$v.auth.password.isDefault}]"
            role="alert"
            aria-relevant="all"
          >please use the provided password</span>
        </li>
        <li v-show="signingOption">
          <input
            id="isSignup"
            v-model="isSigningUp"
            :class="$style.inputCheckbox"
            type="checkbox"
          >
          <label
            :class="$style.inputLabel"
            for="isSignup"
          >signing up</label>
        </li>
      </ul>
      <p :class="$style.footnote">
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
        >Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p>
      <BaseButtonSubmit
        :label="isSigningUp ? 'sign up' : 'sign in'"
        :title="'to authenticate'"
        :disabled="$v.$invalid"
      />
    </form>
    <BaseErrorRequest :is-error-request="isErrorRequest" />
    <BaseSpinner v-show="isLoading" />
  </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import { recaptchaElement } from '@/js/recaptcha';

    import { signup, login } from '@/firebase';

    import { appConfig } from '@/config';
    import BaseSpinner from './BaseSpinner';
    import BaseButtonSubmit from './BaseButtonSubmit';
    import BaseErrorRequest from './BaseErrorRequest';

    export default {
        components: {
            BaseErrorRequest,
            BaseSpinner,
            BaseButtonSubmit
        },
        props: {
            closeSignin: {
                type: Function,
                default () {
                    return null;
                }
            }
        },
        data () {
            return {
                isErrorRequest: false,
                isLoading: false,
                // elemPersistLockScroll: null,
                // isShow: false,
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
                    isDefault (email) {
                        return email === appConfig.appDefaultEmail;
                    }
                },
                password: {
                    required,
                    isDefault: password => {
                        return password === appConfig.appDefaultPassword;
                    }
                }
            }
        },
        methods: {
            onSubmit (evt) {
                const payload = {
                    email: this.auth.email,
                    password: this.auth.password
                };
                // console.log('TLC: onSubmit -> payload', payload);

                this.isLoading = true;
                this.isErrorRequest = false;

                recaptchaElement(this.recaptchaAction)
                    .then(res => {
                        if (res.data.success && res.data.action === this.recaptchaAction) {
                            if (this.isSigningUp) {
                                signup(payload)
                                    .then(res => {
                                        // console.log('TLC: onSubmit -> res', res);
                                        if (res.user) {
                                            this.closeSignin();
                                            this.isLoading = false;
                                        }
                                    })
                                    .catch(err => {
                                        // console.log('TLC: onSubmit -> err', err);
                                        this.isErrorRequest = err.code;
                                        this.isLoading = false;
                                    });
                            } else {
                                login(payload)
                                    .then(res => {
                                        // console.log('TLC: onSubmit -> res', res);
                                        if (res.user) {
                                            this.closeSignin();
                                            this.isLoading = false;
                                        }
                                    })
                                    .catch(err => {
                                        // console.log('TLC: onSubmit -> err', err.code);
                                        this.isErrorRequest = err.code;
                                        this.isLoading = false;
                                    });
                            }
                        } else {
                            // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                            this.isErrorRequest = 'SPAM Automated Abused!!!';
                            this.isLoading = false;
                        }
                    })
                    .catch(err => {
                        // console.log('TLC: onSubmit -> err', err);
                        this.isErrorRequest = err.code;
                        this.isLoading = false;
                    });
            }
        }
    }
</script>

<style lang="scss" module>
.formAuthenticate {
    padding: 2em;
}

.formInputContainer {
    background-color: $color-bg-form-input;
    padding: 0 1em;
    border-radius: $form-input-border-radius;
}

.inputLabel {
    @include screen-reader-ready;
}

.input {
    padding: $form-input-input-padding;
}

.inputError {
    font-size: 0.7em;
    opacity: 0.8;
    position: relative;
    top: -2.5em;
    left: 1.5em;
    visibility: hidden;
    color: $color-txt-form-error;
}

.footnote {
    @include footnote;
    margin-bottom: 3em;
}

.visible {
    @include visible;
}
</style>