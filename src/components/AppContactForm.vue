<template>
  <div id="contactInfo">
    <form
      v-if="!messageSent"
      :class="$style['contact-form']"
      novalidate
      autocomplete="on"
      :role="$t('forms.contact.heading')"
      @submit.prevent="onSubmit()"
    >
      <ul :class="$style['form-list']">
        <li :class="[$style['form-list-item'], $style['name']]">
          <div :class="$style['form-input-container']">
            <label
              for="contactName"
              :class="[$style['input-label'], $style['screen-reader-ready']]"
            >{{ $t('forms.contact.name') }}</label>
            <input
              id="contactName"
              v-model="user.name"
              :class="$style['input']"
              type="text"
              :placeholder="$t('forms.contact.name')"
              autocomplete="name"
              :aria-label="$t('forms.contact.name')"
              aria-required="true"
              autofocus
              @blur="$v.user.name.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.name.$dirty && !$v.user.name.required}]"
            role="alert"
            aria-relevant="all"
          >{{ $t('forms.errors.required') }}</span>
        </li>
        <li :class="[$style['form-list-item'], $style['email']]">
          <div :class="$style['form-input-container']">
            <label
              for="contactEmail"
              :class="[$style['input-label'], $style['screen-reader-ready']]"
            >{{ $t('forms.contact.email') }}</label>
            <input
              id="contactEmail"
              v-model="user.email"
              :class="$style['input']"
              type="email"
              :placeholder="$t('forms.contact.email')"
              autocomplete="email"
              :aria-label="$t('forms.contact.email')"
              aria-required="true"
              @blur="$v.user.email.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.email.$dirty && (!$v.user.email.validAddress || !$v.user.email.required)}]"
            role="alert"
            aria-relevant="all"
          >
            <span v-if="!$v.user.email.required">{{ $t('forms.errors.required') }}</span>
            <span v-else-if="!$v.user.email.validAddress">{{ $t('forms.errors.email') }}</span>
          </span>
        </li>
        <li :class="$style['form-list-item']">
          <div :class="$style['form-input-container']">
            <label
              for="contactSubject"
              :class="[$style['input-label'], $style['screen-reader-ready']]"
            >{{ $t('forms.contact.subject') }}</label>
            <input
              id="contactSubject"
              v-model.lazy="user.subject"
              :class="$style['input']"
              type="text"
              :placeholder="$t('forms.contact.subject')"
              autocomplete="off"
              aria-label="subject"
            >
          </div>
          <span :class="$style['input-error']">{{ $t('forms.errors.required') }}</span>
        </li>
        <li :class="$style['form-list-item']">
          <div :class="$style['form-input-container']">
            <label
              for="contactMessage"
              :class="[$style['input-label'], $style['screen-reader-ready']]"
            >{{ $t('forms.contact.message') }}</label>
            <textarea
              id="contactMessage"
              v-model="user.message"
              :class="$style['input']"
              name
              cols="30"
              rows="7"
              :placeholder="$t('forms.contact.message')"
              :maxlength="messageMaxLength + 1"
              autocomplete="off"
              :aria-label="$t('forms.contact.message')"
              aria-required="true"
              @blur="$v.user.message.$touch()"
            />
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.message.$dirty && !$v.user.message.required}]"
            role="alert"
            aria-relevant="all"
          >{{ $t('forms.errors.required') }}</span>
          <span
            :class="[$style['input-error'], {[$style['visible']]: !$v.user.message.maxLength}]"
            role="alert"
            aria-relevant="all"
          >{{ $t('forms.errors.max-length') }}: {{ messageMaxLength }}</span>
        </li>
      </ul>
      <BaseRecaptcha />
      <BaseFormButtonSubmit
        :label="$t('forms.contact.button.label')"
        :title="$t('forms.contact.button.title')"
        :disabled="$v.$invalid"
      />
    </form>
    <p
      v-else
      :class="$style.confirmation"
    >
      {{ $t('forms.contact.notification.text-1') }}
      <br>{{ $t('forms.contact.notification.text-2') }}
      <br>{{ $t('forms.contact.notification.text-3') }}
    </p>
    <BaseErrorRequest
      v-if="isErrorRequest"
      :error-code="errorRequestCode"
    />
    <BaseSpinner v-show="isLoading" />
  </div>
</template>

<script>
    import {
        // disableBodyScroll,
        // enableBodyScroll,
        // clearAllBodyScrollLocks
    } from 'body-scroll-lock';
    import { required, maxLength } from 'vuelidate/lib/validators';
    import { writeUserData } from '@/firebase';
    import { recaptchaElement } from '@/utils/recaptcha';
    import { emailRegex } from '@/utils/helpers';
    import { htmlEscaping } from '@/xss';
    import BaseSpinner from './base/BaseSpinner';
    import BaseFormButtonSubmit from './base/BaseFormButtonSubmit';
    import BaseErrorRequest from './base/BaseErrorRequest';
    import BaseRecaptcha from './base/BaseRecaptcha';

    export default {
        components: {
            BaseRecaptcha,
            BaseErrorRequest,
            BaseFormButtonSubmit,
            BaseSpinner
        },
        data () {
            return {
                isErrorRequest: false,
                errorRequestCode: null,
                isLoading: false,
                elemPersistLockScroll: null,
                messageSent: false,
                messageMaxLength: 500,
                recaptchaAction: 'contactInfo',
                user: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }
            };
        },
        mounted () {
            this.elemPersistLockScroll = document.querySelector('#contactInfo');
        },
        // KIM - to use dynamic value, which is also used in template (textarea): this.messageMaxLength
        validations () {
            return {
                user: {
                    name: {
                        required
                    },
                    email: {
                        required,
                        validAddress (email) {
                            // // console.log('TLC: validAddress -> email', email);
                            return emailRegex.test(email);
                        }
                    },
                    message: {
                        required,
                        maxLength: maxLength(this.messageMaxLength)
                    }
                }
            };
        },
        beforeDestroy () {
            // clearAllBodyScrollLocks();
        },
        methods: {
            onSubmit () {
                /* scrollTo({
                    x: 0,
                    y: 0
                  }); */

                this.isLoading = true;
                this.isErrorRequest = false;
                this.errorRequestCode = null;

                // disableBodyScroll(this.elemPersistLockScroll);

                recaptchaElement(this.recaptchaAction).then(res => {
                    if (res.data.success && res.data.action === this.recaptchaAction) {
                        // escaping user's inputs
                        let inputEscaped = {};
                        for (let i in this.user) {
                            inputEscaped[i] = htmlEscaping(this.user[i]);
                        }
                        // // console.log('TLC: onSubmit -> inputEscaped', inputEscaped);

                        writeUserData(inputEscaped)
                            .then(
                                () => {
                                    // // console.log('TLC: ContactInfo - onSubmit -> res', res);
                                    this.isLoading = false;

                                    this.messageSent = true;

                                    // enableBodyScroll(this.elemPersistLockScroll);
                                },
                                err => {
                                    // // console.log('TLC: 4onSubmit -> err', err);
                                    this.isLoading = false;
                                    this.isErrorRequest = true;
                                    this.errorRequestCode = err.code;
                                    // enableBodyScroll(this.elemPersistLockScroll);
                                }
                            )
                            .catch(err => {
                                // // console.log('TLC: 5onSubmit -> err', err);
                                this.isLoading = false;
                                this.isErrorRequest = true;
                                this.errorRequestCode = err.code;
                                // enableBodyScroll(this.elemPersistLockScroll);
                            });
                    } else {
                        // // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                        this.isErrorRequest = true;
                        this.errorRequestCode = 'SPAM Automated Abused!!!';
                        this.isLoading = false;
                    }
                });
            }
        }
    };

</script>

<style lang="scss" module>
.form-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.form-list-item {
  width: var(--contact-input-width);
  &.name,
  &.email {
    width: var(--contact-input-name-email-width);
  }
}
.contact-form {
    padding-bottom: 2em;
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