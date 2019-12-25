<template>
  <div id="contactInfo">
    <transition
      name="slide-fade"
      mode="out-in"
      :enter-class="$style['slide-fade-enter']"
      :enter-to-class="$style['slide-fade-enter-to']"
      :enter-active-class="$style['slide-fade-enter-active']"
      :leave-class="$style['slide-fade-leave']"
      :leave-to-class="$style['slide-fade-leave-to']"
      :leave-active-class="$style['slide-fade-leave-active']"
    >
      <form
        v-if="requestStatus === 'toSend'"
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
        <p :class="[$style['text'], $style['last']]">
          {{ $t('app.download-instruction.text-1') }}.
        </p>
      </form>
      <div
        v-else-if="requestStatus === 'sent'"
        :class="$style['confirmation']"
      >
        <p :class="$style['text']">
          {{ $t('forms.contact.confirmation.text-1') }}
        </p>
        <p :class="$style['text']">
          {{ $t('forms.contact.confirmation.text-2') }}
        </p>
        <p :class="$style['text']">
          {{ $t('forms.contact.confirmation.text-3') }}
        </p>
      </div>
      <BaseDualRing v-else-if="requestStatus === 'sending'" />
      <BaseErrorRequest
        v-else-if="requestStatus === 'error'"
        :error-code="errorRequestCode"
      />
    </transition>
  </div>
</template>

<script>
    import { required, maxLength } from 'vuelidate/lib/validators';
    import { _writeUserData } from '@/firebase';
    import { _recaptchaElement } from '@/utils/recaptcha';
    import { _emailRegex } from '@/utils/helpers';
    import { _htmlEscaping } from '@/xss';
    import BaseFormButtonSubmit from './base/BaseFormButtonSubmit';
    import BaseErrorRequest from './base/BaseErrorRequest';
    import BaseRecaptcha from './base/BaseRecaptcha';
    import BaseDualRing from './base/BaseDualRing';

    export default {
        components: {
            BaseRecaptcha,
            BaseErrorRequest,
            BaseFormButtonSubmit,
            BaseDualRing
        },
        data () {
            return {
                requestStatus: 'toSend',
                errorRequestCode: '',
                elemPersistLockScroll: null,
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
                            return _emailRegex.test(email);
                        }
                    },
                    message: {
                        required,
                        maxLength: maxLength(this.messageMaxLength)
                    }
                }
            };
        },
        methods: {
            onSubmit () {
                this.errorRequestCode = null;
                this.requestStatus = 'sending';

                _recaptchaElement(this.recaptchaAction).then(res => {
                    if (res.data.success && res.data.action === this.recaptchaAction) {
                        // escaping user's inputs
                        let inputEscaped = {};
                        for (let i in this.user) {
                            inputEscaped[i] = _htmlEscaping(this.user[i]);
                        }
                        // // console.log('TLC: onSubmit -> inputEscaped', inputEscaped);

                        _writeUserData(inputEscaped)
                            .then(
                                () => {
                                    // // console.log('TLC: ContactInfo - onSubmit -> res', res);
                                    this.requestStatus = 'sent';
                                },
                                err => {
                                    // // console.log('TLC: 4onSubmit -> err', err);
                                    this.errorRequestCode = err.code;
                                    this.requestStatus = 'error';
                                }
                            )
                            .catch(err => {
                                // // console.log('TLC: 5onSubmit -> err', err);
                                this.errorRequestCode = err.code;
                                this.requestStatus = 'error';
                            });
                    } else {
                        // // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
                        this.errorRequestCode = 'SPAM Automated Abused!!!';
                        this.requestStatus = 'error';
                    }
                });
            }
        }
    };

</script>

<style lang="scss" module>
.contact-form {
  --form-input-autofill-bg-color: transparent;
  --form-button-submit-txt-color: #f7f7f7;
  --form-button-submit-bg-color: #D85426;
  --form-button-submit-txt-color-disabled: #979797;
  --footnote-txt-color: #a7a7a7;
  --footnote-txt-color-links: #b7b7b7;
}
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
.form-input-container {
    background-color: var(--form-input-bg-color);
    padding: 0 1em;
    border-radius: $form-input-border-radius;
}
.input {
    padding: $form-input-input-padding;
    &::placeholder {
      text-transform: var(--form-input-placeholder);
    }
}
// reset form input autofill bg color
@include reset-form-autofill;
.input-error {
    font-size: 0.7em;
    opacity: 0.8;
    position: relative;
    top: -2.5em;
    left: 1.5em;
    visibility: hidden;
    color: $form-error-txt-color;
}
.text {
  color: $dimlight-color;
  margin: 1em 0;
  &::first-letter {
    text-transform: capitalize;
  }
}
.confirmation {
  // color: $dimlight-color;
  margin: 1em 0;
  &::first-letter {
    text-transform: capitalize;
  }
}
.screen-reader-ready {
  @include screen-reader-ready;
}
@include visible;
</style>