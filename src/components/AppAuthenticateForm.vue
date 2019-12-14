<template>
  <div>
    <form
      :class="$style['form-authenticate']"
      novalidate
      autocomplete="on"
      :role="$t('forms.authentication.heading')"
      @submit.prevent="onSubmit()"
    >
      <ul>
        <li>
          <div :class="$style['form-input-container']">
            <label
              :class="[$style['input-label'], $style['screen-reader-ready']]"
              for="auth-email"
            >{{ $t('forms.authentication.email') }}</label>
            <input
              id="auth-email"
              v-model="auth.email"
              :class="$style['input']"
              type="email"
              autocomplete="email"
              :placeholder="$t('forms.authentication.email')"
              :aria-label="$t('forms.authentication.email')"
              aria-required="true"
              @blur="$v.auth.email.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.auth.email.$dirty && (!$v.auth.email.required ||!$v.auth.email.isDefault)}]"
            role="alert"
            aria-relevant="all"
          >{{ $t('forms.errors.provided.email') }}</span>
        </li>
        <li>
          <div :class="$style['form-input-container']">
            <label
              :class="[$style['input-label'], $style['screen-reader-ready']]"
              for="auth-password"
            >{{ $t('forms.authentication.password') }}</label>
            <input
              id="auth-password"
              v-model="auth.password"
              :class="$style['input']"
              type="password"
              :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
              :placeholder="$t('forms.authentication.password')"
              :aria-label="$t('forms.authentication.password')"
              aria-required="true"
              @blur="$v.auth.password.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style.visible]: $v.auth.password.$dirty && !$v.auth.password.isDefault}]"
            role="alert"
            aria-relevant="all"
          >{{ $t('forms.errors.provided.password') }}</span>
        </li>
        <li v-show="signingOption">
          <input
            id="isSignup"
            v-model="isSigningUp"
            :class="$style['input-checkbox']"
            type="checkbox"
          >
          <label
            :class="$style['input-label']"
            for="isSignup"
          >{{ $t('forms.authentication.signing-up') }}</label>
        </li>
      </ul>
      <BaseRecaptcha />
      <BaseFormButtonSubmit
        :label="isSigningUp ? $t('forms.authentication.button.signup') : $t('forms.authentication.button.signin')"
        :disabled="$v.$invalid"
      />
    </form>
    <BaseErrorRequest
      v-if="isErrorRequest"
      :error-code="errorRequestCode"
    />
    <BaseSpinner v-show="isLoading" />
  </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import { recaptchaElement } from '@/utils/recaptcha';
    import { signup, login } from '@/firebase';
    import { appConfig } from '@/config';
    import BaseSpinner from './base/BaseSpinner';
    import BaseFormButtonSubmit from './base/BaseFormButtonSubmit';
    import BaseErrorRequest from './base/BaseErrorRequest';
    import BaseRecaptcha from './base/BaseRecaptcha';

    export default {
        components: {
            BaseRecaptcha,
            BaseErrorRequest,
            BaseSpinner,
            BaseFormButtonSubmit
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
                errorRequestCode: null,
                isLoading: false,
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
            onSubmit () {
                const payload = {
                    email: this.auth.email,
                    password: this.auth.password
                };
                // console.log('TLC: onSubmit -> payload', payload);

                this.isLoading = true;
                this.isErrorRequest = false;
                this.errorRequestCode = null;

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
                                        this.isErrorRequest = true;
                                        this.errorRequestCode = err.code;
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
                                        // console.log('TLC: onSubmit -> err', err);
                                        this.isErrorRequest = true;
                                        this.errorRequestCode = err.code;
                                        this.isLoading = false;
                                    });
                            }
                        } else {
                            // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                            this.isErrorRequest = true;
                            this.errorRequestCode = 'SPAM Automated Abused!!!';
                            this.isLoading = false;
                        }
                    })
                    .catch(err => {
                        // console.log('TLC: onSubmit -> err', err);
                        this.isErrorRequest = true;
                        this.errorRequestCode = err.code;
                        this.isLoading = false;
                    });
            }
        }
    }
</script>

<style lang="scss" module>
.form-authenticate {
  padding: 2em;
}
.form-input-container {
  background-color: $form-input-bg-color;
  padding: 0 1em;
  border-radius: $form-input-border-radius;
}
.input {
  padding: $form-input-input-padding;
  &::placeholder {
    text-transform: var(--form-input-placeholder);
  }
}
.input-error {
  font-size: 0.7em;
  opacity: 0.8;
  position: relative;
  top: -2.5em;
  left: 1.5em;
  visibility: hidden;
  color: $form-error-txt-color;
}
.screen-reader-ready {
  @include screen-reader-ready;
}
@include visible;
</style>