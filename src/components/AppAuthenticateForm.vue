<template>
  <div
    id="formAuthenticateContainer"
    :class="$style['form-authenticate-container']"
  >
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
    <BaseDualRingMessage
      v-if="requestStatus === 'sending'"
      :error-code="errorRequestCode"
    />
  </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import { _recaptchaElement } from '@/utils/recaptcha';
    import { _signup, _signin } from '@/firebase';
    import { _appConfig } from '@/config';
    import { _eventBus } from '@/utils/eventBus';
    import BaseFormButtonSubmit from './base/BaseFormButtonSubmit';
    import BaseRecaptcha from './base/BaseRecaptcha';
    import BaseDualRingMessage from './base/BaseDualRingMessage';

    export default {
        components: {
            BaseDualRingMessage,
            BaseRecaptcha,
            BaseFormButtonSubmit
        },
        props: {
            closeAuth: {
                type: Function,
                default: () => () => {}
            }
        },
        data () {
            return {
                requestStatus: '',
                errorRequestCode: '',
                elBtnClose: null,
                elFormAuthenticate: null,
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
                        return email === _appConfig.appResumeEmail || email === _appConfig.appAdminEmail || email === _appConfig.appTesterEmail;
                    }
                },
                password: {
                    required,
                    isDefault: password => {
                        return password === _appConfig.appResumePassword || password === _appConfig.appAdminPassword || password === _appConfig.appTesterPassword;
                    }
                }
            }
        },
        created () {
            _eventBus.$on('evtBusCloseAuth', () => {
                this.requestStatus = '';
                this.errorRequestCode = '';
            });
        },
        mounted () {
            this.elBtnClose = document.querySelector('#btnCloseAuth');
            this.elFormAuthenticate = document.querySelector('#formAuthenticateContainer');

            setInlineStyle(this);
            
            window.addEventListener('resize', () => setInlineStyle(this));
        },
        beforeDestroy () {
            _eventBus.$off('evtBusCloseAuth');
            window.removeEventListener('resize', setInlineStyle);
        },
        methods: {
            onSubmit () {
                const payload = {
                    email: this.auth.email,
                    password: this.auth.password
                };
                // // // console.log('TLC: onSubmit -> payload', payload);

                this.requestStatus = 'sending';
                this.errorRequestCode = '';

                _recaptchaElement(this.recaptchaAction)
                    .then(res => {
                        if (res.data.success && res.data.action === this.recaptchaAction) {
                            if (this.isSigningUp) {
                                _signup(payload)
                                    .then(res => {
                                        // // // console.log('TLC: onSubmit -> res', res);
                                        if (res.user) {
                                            this.closeAuth();
                                            this.requestStatus = '';
                                        }
                                    })
                                    .catch(err => {
                                        // // // console.log('TLC: onSubmit -> err', err);
                                        this.errorRequestCode = err.code;
                                    });
                            } else {
                                _signin(payload)
                                    .then(res => {
                                        // console.log('TLC: onSubmit -> res', res);
                                        if (res.user) {
                                            this.closeAuth();
                                            this.requestStatus = '';
                                        }
                                    })
                                    .catch(err => {
                                        // console.log('TLC: onSubmit -> err', err);
                                        this.errorRequestCode = err.code;
                                    });
                            }
                        } else {
                            // // // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                            this.errorRequestCode = 'SPAM Automated Abused!!!';
                        }
                    })
                    .catch(err => {
                        // // // console.log('TLC: onSubmit -> err', err);
                        this.errorRequestCode = err.code;
                    });
            }
        }
    };

    const setInlineStyle = (vm) => {
        // // console.log('TLC: setInlineStyle -> vm', vm.elFormAuthenticate);
        const elHeight = window.innerHeight - vm.elBtnClose.clientHeight;
        
        vm.elFormAuthenticate.setAttribute('style', `height: ${elHeight}px`);
    };
</script>

<style lang="scss" module>
.form-authenticate-container {
    padding: 2em;
    overflow-y: scroll;
    box-sizing: border-box;
}
.form-authenticate {
    --form-input-txt-color: #575757;
    --form-input-bg-color: #ddd;
    --form-input-autofill-bg-color: #ddd;
    --form-button-submit-txt-color: #f7f7f7;
    --form-button-submit-bg-color: #D85426;
    --form-button-submit-txt-color-disabled: #979797;
    --form-button-submit-bg-color-disabled: rgba(0,0,0,0.1);
    --footnote-txt-color: #979797;
    --footnote-txt-color-links: #878787;
}
.form-input-container {
  background-color: var(--form-input-bg-color);
  padding: 0 1em;
  border-radius: $form-input-border-radius;
}
.input {
  background-color: var(--form-input-bg-color) !important;
  padding: $form-input-input-padding;
  &::placeholder {
    text-transform: var(--form-input-placeholder);
  }
}
// reset form input autofill bg color
@include reset-form-autofill;
.download-instruction {
  color: var(--download-instruction-txt-color);
  padding: 2em 0;
  font-size: 0.8em;
  line-height: 1.5em;
  > a {
    color: var(--download-instruction-txt-color);
    text-decoration: underline;
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