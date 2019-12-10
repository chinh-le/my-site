<template>
  <div id="contactInfo">
    <form
      v-if="!messageSent"
      :class="$style['contact-form']"
      novalidate
      autocomplete="on"
      role="contact"
      @submit.prevent="onSubmit()"
    >
      <ul>
        <li>
          <div :class="$style['form-input-container']">
            <label
              for="contactName"
              :class="$style['input-label']"
            >Name</label>
            <input
              id="contactName"
              v-model="user.name"
              :class="$style['input']"
              type="text"
              placeholder="Name*"
              autocomplete="name"
              aria-label="name"
              aria-required="true"
              autofocus
              @blur="$v.user.name.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.name.$dirty && !$v.user.name.required}]"
            role="alert"
            aria-relevant="all"
          >required</span>
        </li>
        <li>
          <div :class="$style['form-input-container']">
            <label
              for="contactEmail"
              :class="$style['input-label']"
            >Email</label>
            <input
              id="contactEmail"
              v-model="user.email"
              :class="$style['input']"
              type="email"
              placeholder="Email*"
              autocomplete="email"
              aria-label="email address"
              aria-required="true"
              @blur="$v.user.email.$touch()"
            >
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.email.$dirty && (!$v.user.email.validAddress || !$v.user.email.required)}]"
            role="alert"
            aria-relevant="all"
          >
            <span v-if="!$v.user.email.required">required</span>
            <span v-else-if="!$v.user.email.validAddress">invalid</span>
            <span v-else>valid</span>
          </span>
        </li>
        <li>
          <div :class="$style['form-input-container']">
            <label
              for="contactSubject"
              :class="$style['input-label']"
            >Subject</label>
            <input
              id="contactSubject"
              v-model.lazy="user.subject"
              :class="$style['input']"
              type="text"
              placeholder="Subject"
              autocomplete="off"
              aria-label="subject"
            >
          </div>
          <span :class="$style['input-error']">required</span>
        </li>
        <li>
          <div :class="$style['form-input-container']">
            <label
              for="contactMessage"
              :class="$style['input-label']"
            >Message</label>
            <textarea
              id="contactMessage"
              v-model="user.message"
              :class="$style['input']"
              name
              cols="30"
              rows="7"
              placeholder="Message*"
              :maxlength="messageMaxLength + 1"
              autocomplete="off"
              aria-label="message to send"
              aria-required="true"
              @blur="$v.user.message.$touch()"
            />
          </div>
          <span
            :class="[$style['input-error'], {[$style['visible']]: $v.user.message.$dirty && !$v.user.message.required}]"
            role="alert"
            aria-relevant="all"
          >required</span>
          <span
            :class="[$style['input-error'], {[$style['visible']]: !$v.user.message.maxLength}]"
            role="alert"
            aria-relevant="all"
          >Max length: {{ messageMaxLength }}</span>
        </li>
      </ul>
      <BaseRecaptcha />
      <BaseFormButtonSubmit
        :label="'send message'"
        :title="'to Chinh Le'"
        :disabled="$v.$invalid"
      />
    </form>
    <p
      v-else
      :class="$style.confirmation"
    >
      Your message has been sent!
      <br>I will get back to you as soon as possible.
      <br>Thank you.
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
        disableBodyScroll,
        enableBodyScroll,
        clearAllBodyScrollLocks
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
                            // console.log('TLC: validAddress -> email', email);
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
            clearAllBodyScrollLocks();
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

                disableBodyScroll(this.elemPersistLockScroll);

                recaptchaElement(this.recaptchaAction).then(res => {
                    if (res.data.success && res.data.action === this.recaptchaAction) {
                        // escaping user's inputs
                        let inputEscaped = {};
                        for (let i in this.user) {
                            inputEscaped[i] = htmlEscaping(this.user[i]);
                        }
                        // console.log('TLC: onSubmit -> inputEscaped', inputEscaped);

                        writeUserData(inputEscaped)
                            .then(
                                res => {
                                    // console.log('TLC: ContactInfo - onSubmit -> res', res);
                                    this.isLoading = false;

                                    this.messageSent = true;

                                    enableBodyScroll(this.elemPersistLockScroll);
                                },
                                err => {
                                    // console.log('TLC: 4onSubmit -> err', err);
                                    this.isLoading = false;
                                    this.isErrorRequest = true;
                                    this.errorRequestCode = err.code;
                                    enableBodyScroll(this.elemPersistLockScroll);
                                }
                            )
                            .catch(err => {
                                // console.log('TLC: 5onSubmit -> err', err);
                                this.isLoading = false;
                                this.isErrorRequest = true;
                                this.errorRequestCode = err.code;
                                enableBodyScroll(this.elemPersistLockScroll);
                            });
                    } else {
                        // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
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
.contact-form {
    padding-bottom: 2em;
}

.form-input-container {
    background-color: $color-bg-form-input;
    padding: 0 1em;
    border-radius: $form-input-border-radius;
}

.input-label {
    @include screen-reader-ready;
}

.input {
    padding: $form-input-input-padding;
}

.input-error {
    font-size: 0.7em;
    opacity: 0.8;
    position: relative;
    top: -2.5em;
    left: 1.5em;
    visibility: hidden;
    color: $color-txt-form-error;
}

.visible {
    @include visible;
}
</style>