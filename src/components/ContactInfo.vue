<template>
  <div class="contact-info" id="contact-info">
    <form @submit.prevent="onSubmit()" v-if="!messageSent">
      <ul>
        <li class="name">
          <div class="form-input">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="user.name"
              type="text"
              placeholder="Name*"
              @blur="$v.user.name.$touch()"
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.name.$dirty && !$v.user.name.required}"
          >required</span>
        </li>
        <li class="email">
          <div class="form-input">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="user.email"
              type="email"
              placeholder="Email*"
              @blur="$v.user.email.$touch()"
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.email.$dirty && !$v.user.email.required}"
          >required</span>
        </li>
        <li>
          <div class="form-input">
            <label for="subject">Subject</label>
            <input v-model.lazy="user.subject" type="text" placeholder="Subject" id="subject" />
          </div>
          <span class="form-error">required</span>
        </li>
        <li>
          <div class="form-input">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="user.message"
              name
              cols="30"
              rows="7"
              placeholder="Message*"
              :maxlength="messageMaxLength + 1"
              @input="$v.user.message.$touch()"
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.message.$dirty && !$v.user.message.required}"
          >required</span>
          <span
            class="form-error"
            :class="{visible: !$v.user.message.maxLength}"
          >Max length: {{messageMaxLength}}</span>
        </li>
      </ul>
      <p class="footnote">
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
        >Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p>
      <button type="submit" :disabled="$v.$invalid">Send Message</button>
    </form>
    <p
      class="message-conf"
      v-else
    >Your message has been sent! I will get back to you as soon as possible. Thank you.</p>
    <app-svg-spinner v-show="isLoading" />
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
import { recaptchaElement } from '@/recaptcha';
import { scrollTo } from '@/helpers';
import SvgSpinner from '@/components/SvgSpinner';

export default {
  mounted () {
    this.elemPersistLockScroll = document.querySelector('#contact-info');
  },
  components: {
    appSvgSpinner: SvgSpinner
  },
  data () {
    return {
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
  // KIM - to use dynamic value, which is also used in template (textarea): this.messageMaxLength
  validations () {
    return {
      user: {
        name: {
          required
        },
        email: {
          required
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
      scrollTo({
        x: 0,
        y: 0
      });

      this.isLoading = true;

      disableBodyScroll(this.elemPersistLockScroll);

      // console.log(this.user);
      recaptchaElement(this.recaptchaAction).then(res => {
        if (res.data.success && res.data.action === this.recaptchaAction) {
          writeUserData(this.user).then(
            res => {
              // console.log('TLC: ContactInfo - onSubmit -> res', res);
              this.isLoading = false;

              this.messageSent = true;

              enableBodyScroll(this.elemPersistLockScroll);
            },
            err => {
              console.error(err);
            }
          );
          /* .catch(err => {
              console.error(err);
            }); */
        } else {
          // console.error('SPAM!!!');
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/styles/components/contactInfo";
</style>
