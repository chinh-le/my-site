<template>
  <div class="contact-info" id="contact-info">
    <form
      @submit.prevent="onSubmit()"
      v-if="!messageSent"
      novalidate
      autocomplete="on"
      role="contact"
    >
      <ul>
        <li class="name">
          <div class="form-input">
            <label for="contact-name">Name</label>
            <input
              id="contact-name"
              v-model="user.name"
              type="text"
              placeholder="Name*"
              @blur="$v.user.name.$touch()"
              autocomplete="name"
              aria-label="name"
              aria-required="true"
              autofocus
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.name.$dirty && !$v.user.name.required}"
            role="alert"
            aria-relevant="all"
          >required</span>
        </li>
        <li class="email">
          <div class="form-input">
            <label for="contact-email">Email</label>
            <input
              id="contact-email"
              v-model="user.email"
              type="email"
              placeholder="Email*"
              @blur="$v.user.email.$touch()"
              autocomplete="email"
              aria-label="email address"
              aria-required="true"
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.email.$dirty && (!$v.user.email.validAddress || !$v.user.email.required)}"
            role="alert"
            aria-relevant="all"
          >
            <span v-if="!$v.user.email.required">required</span>
            <span v-else-if="!$v.user.email.validAddress">invalid</span>
            <span v-else>valid</span>
          </span>
        </li>
        <li>
          <div class="form-input">
            <label for="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="Subject"
              v-model.lazy="user.subject"
              autocomplete="off"
              aria-label="subject"
            />
          </div>
          <span class="form-error">required</span>
        </li>
        <li>
          <div class="form-input">
            <label for="contact-message">Message</label>
            <textarea
              id="contact-message"
              name
              cols="30"
              rows="7"
              placeholder="Message*"
              v-model="user.message"
              :maxlength="messageMaxLength + 1"
              @blur="$v.user.message.$touch()"
              autocomplete="off"
              aria-label="message to send"
              aria-required="true"
            />
          </div>
          <span
            class="form-error"
            :class="{visible: $v.user.message.$dirty && !$v.user.message.required}"
            role="alert"
            aria-relevant="all"
          >required</span>
          <span
            class="form-error"
            :class="{visible: !$v.user.message.maxLength}"
            role="alert"
            aria-relevant="all"
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
      <button type="submit" :disabled="$v.$invalid" title="submit form">Send Message</button>
    </form>
    <p class="message-conf" v-else>
      Your message has been sent!
      <br />I will get back to you as soon as possible.
      <br />Thank you.
    </p>
    <p class="error-request" v-if="isErrorRequestCode">
      Oops! There's something wrong with our server.
      <span>[{{isErrorRequestCode}}]</span>
      <br />Please try again later.
    </p>
    <app-svg-spinner v-show="isLoading" />
  </div>
</template>

<script src="./contactInfo.js"/>
<style scoped lang="scss" src="./contactInfo.scss"/>
