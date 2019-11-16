<template>
  <!-- <div class="contactInfo"> -->
  <form @submit.prevent="onSubmit()" class="contact-info">
    <ul>
      <li>
        <div class="form-field">
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
      <li>
        <div class="form-field">
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
        <div class="form-field">
          <label for="subject">Subject</label>
          <input v-model.lazy="user.subject" type="text" placeholder="Subject" id="subject" />
        </div>
        <span class="form-error">required</span>
      </li>
      <li>
        <div class="form-field">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="user.message"
            name
            cols="30"
            rows="10"
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
  <!-- </li> -->
</template>
<script>
import { required, maxLength } from 'vuelidate/lib/validators';
import { writeUserData } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';

export default {
  data () {
    return {
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
  methods: {
    onSubmit () {
      // console.log(this.user);
      recaptchaElement(this.recaptchaAction).then(res => {
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
$app-txt-color: #999;
$form-field-bg-color: #444;
$app-txt-color-focus: #b36a12;

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
.visible {
  visibility: visible !important;
}

.form-field {
  background-color: $form-field-bg-color;
  padding: 0 1.5em;
}
.form-error {
  font-size: 0.7em;
  opacity: 0.8;
  position: relative;
  top: -2.5em;
  left: 2em;
  visibility: hidden;
  color: $app-txt-color-focus;
}
form {
  li {
    margin-bottom: 0.5em;
  }
  label {
    @extend .visually-hidden;
  }
  button {
    font-size: 1em;
    padding: 1.5em;
    background-color: $form-field-bg-color;
    border: 0;
    color: $app-txt-color;
    &:disabled {
      border: 1px solid $form-field-bg-color;
      background: none;
    }
  }
}
.footnote {
  margin-bottom: 4em;
}
</style>
