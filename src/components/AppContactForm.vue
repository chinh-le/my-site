<template>
  <div id="contact-info">
    <form
      v-if="!messageSent"
      :class="$style.contactForm"
      novalidate
      autocomplete="on"
      role="contact"
      @submit.prevent="onSubmit()"
    >
      <ul>
        <li>
          <div :class="$style.formInputContainer">
            <label
              for="contact-name"
              :class="$style.inputLabel"
            >Name</label>
            <input
              id="contact-name"

              v-model="user.name"
              :class="$style.input"
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
            class="form-error"
            :class="[$style.inputError, {[$style.visible]: $v.user.name.$dirty && !$v.user.name.required}]"
            role="alert"
            aria-relevant="all"
          >required</span>
        </li>
        <li>
          <div :class="$style.formInputContainer">
            <label
              for="contact-email"
              :class="$style.inputLabel"
            >Email</label>
            <input
              id="contact-email"

              v-model="user.email"
              :class="$style.input"
              type="email"
              placeholder="Email*"
              autocomplete="email"
              aria-label="email address"
              aria-required="true"
              @blur="$v.user.email.$touch()"
            >
          </div>
          <span
            :class="[$style.inputError, {[$style.visible]: $v.user.email.$dirty && (!$v.user.email.validAddress || !$v.user.email.required)}]"
            role="alert"
            aria-relevant="all"
          >
            <span v-if="!$v.user.email.required">required</span>
            <span v-else-if="!$v.user.email.validAddress">invalid</span>
            <span v-else>valid</span>
          </span>
        </li>
        <li>
          <div :class="$style.formInputContainer">
            <label
              for="contact-subject"
              :class="$style.inputLabel"
            >Subject</label>
            <input
              id="contact-subject"
              v-model.lazy="user.subject"
              :class="$style.input"
              type="text"
              placeholder="Subject"
              autocomplete="off"
              aria-label="subject"
            >
          </div>
          <span :class="$style.inputError">required</span>
        </li>
        <li>
          <div :class="$style.formInputContainer">
            <label
              for="contact-message"
              :class="$style.inputLabel"
            >Message</label>
            <textarea
              id="contact-message"
              v-model="user.message"
              :class="$style.input"
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
            :class="[$style.inputError, {[$style.visible]: $v.user.message.$dirty && !$v.user.message.required}]"
            role="alert"
            aria-relevant="all"
          >required</span>
          <span
            :class="[$style.inputError, {[$style.visible]: !$v.user.message.maxLength}]"
            role="alert"
            aria-relevant="all"
          >Max length: {{ messageMaxLength }}</span>
        </li>
      </ul>
      <p class="footnote">
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
        >Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p>
      <BaseButtonSubmit
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
    <!-- <p
      v-if="isErrorRequest"
      :class="$atyle.requestError"
    >
      Oops! There's something wrong with our server.
      <span>[{{ isErrorRequest }}]</span>
      <br>Please try again later.
    </p> -->
    <BaseErrorRequest :is-error-request="isErrorRequest" />
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
    import { recaptchaElement } from '@/js/recaptcha';
    // import { scrollTo, emailRegex } from '@/js/helpers';
    import { emailRegex } from '@/js/helpers';
    import { htmlEscaping } from '@/xss';
    import BaseSpinner from './BaseSpinner';
    import BaseButtonSubmit from './BaseButtonSubmit';
    import BaseErrorRequest from './BaseErrorRequest';

    export default {
        components: {
            BaseErrorRequest,
            BaseButtonSubmit,
            BaseSpinner
        },
        data () {
            return {
                isErrorRequest: false,
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
            this.elemPersistLockScroll = document.querySelector('#contact-info');
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
                                    this.isErrorRequest = err.code;
                                    enableBodyScroll(this.elemPersistLockScroll);
                                }
                            )
                            .catch(err => {
                                // console.log('TLC: 5onSubmit -> err', err);
                                this.isLoading = false;
                                this.isErrorRequest = err.code;
                                enableBodyScroll(this.elemPersistLockScroll);
                            });
                    } else {
                        // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                        this.isErrorRequest = 'SPAM Automated Abused!!!';
                        this.isLoading = false;
                    }
                });
            }
        }
    };

</script>

<style lang="scss" module>
.contactForm {
    padding-bottom: 2em;
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