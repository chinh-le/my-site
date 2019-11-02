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
      <button type="submit">
        Send Message
      </button>
    </form>
  </div>
</template>
<script>
import { writeUserData } from '@/firebase';

export default {
  data () {
    return {
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
      writeUserData(this.user);
    }
  }
};
</script>
