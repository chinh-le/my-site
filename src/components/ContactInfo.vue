<template>
  <div class="contactInfo">
    <h3>Get in Touch</h3>
    <form @submit.prevent="onSubmit()">
      <ul>
        <li>
          <input
            v-model.lazy="user.name"
            type="text"
            placeholder="Name"
            >
          <input
            v-model.lazy="user.email"
            type="email"
            placeholder="Email"
            >
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
            v-model.lazy="user.message"
            name=""
            cols="30"
            rows="10"
            placeholder="Message"
            />
        </li>
      </ul>
      <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
      <button type="submit">
        Send Message
      </button>
    </form>
  </div>
</template>
<script>
import { writeUserData } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';

export default {
  data () {
    return {
      recaptchaAction: 'contactInfo',
      user: {
        name: '',
        email: '',
        subject: '',
        message: ''
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
