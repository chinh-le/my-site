<template>
  <div class="contactInfo">
    <h3>Get in Touch</h3>
    <form @submit.prevent="onSubmit()">
      <ul>
        <li>
          <div>
            <input
              v-model="user.name"
              type="text"
              placeholder="Name"
              @blur="$v.user.name.$touch()"
              >
            <p v-show="$v.user.name.$dirty && !$v.user.name.required">
              required
            </p>
          </div>
          <div>
            <input
              v-model="user.email"
              type="email"
              placeholder="Email"
              @blur="$v.user.email.$touch()"
              >
            <p v-show="$v.user.email.$dirty && !$v.user.email.required">
              required
            </p>
          </div>
        </li>
        <li>
          <input
            v-model.lazy="user.subject"
            type="text"
            placeholder="Subject (optional)"
            >
        </li>
        <li>
          <textarea
            id=""
            v-model="user.message"
            name=""
            cols="30"
            rows="10"
            placeholder="Message"
            :maxlength="messageMaxLength + 1"
            @input="$v.user.message.$touch()"
            />
          <p v-show="$v.user.message.$dirty && !$v.user.message.required">
            required
          </p>
          <p v-show="!$v.user.message.maxLength">
            Max length: 250
          </p>
        </li>
      </ul>
      <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
      <button
        type="submit"
        :disabled="$v.$invalid"
        >
        Send Message
      </button>
    </form>
  </div>
</template>
<script>
import { required, maxLength } from 'vuelidate/lib/validators';
import { writeUserData } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';

export default {
  data () {
    return {
      messageMaxLength: 10,
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
  methods: {
    onSubmit () {
      // console.log(this.user);
      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            writeUserData(this.user);
          } else {
            console.error('SPAM!!!');
          }
        });
    }
  }
};
</script>
<style scoped lang="scss">
.grecaptcha-badge {
  visibility: hidden;
}
</style>
