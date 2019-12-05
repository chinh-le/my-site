<template>
  <div class="site-auth" id="site-auth">
    <transition name="fading" mode="in-out">
      <div class="bg-canvas" v-show="isShow" @click="closeSignin()"></div>
    </transition>
    <transition name="slide" mode="in-out">
      <div class="signin" v-show="isShow" id="signin">
        <button type="button" @click="closeSignin()" class="btn-close" title="close sign in">
          <i class="material-icons">close</i>
        </button>
        <form novalidate @submit.prevent="onSubmit($event)" autocomplete="on" role="authentication">
          <ul>
            <li>
              <div class="form-input">
                <label for="auth-email">Email</label>
                <input
                  id="auth-email"
                  v-model="auth.email"
                  type="email"
                  autocomplete="email"
                  @blur="$v.auth.email.$touch()"
                  placeholder="email*"
                  aria-label="email address"
                  aria-required="true"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.email.$dirty && (!$v.auth.email.required ||!$v.auth.email.isDefault)}"
                role="alert"
                aria-relevant="all"
              >please use the provided email</span>
            </li>
            <li>
              <div class="form-input">
                <label for="auth-password">Password</label>
                <input
                  id="auth-password"
                  v-model="auth.password"
                  type="password"
                  :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                  @blur="$v.auth.password.$touch()"
                  placeholder="password*"
                  aria-label="password"
                  aria-required="true"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: $v.auth.password.$dirty && !$v.auth.password.isDefault}"
                role="alert"
                aria-relevant="all"
              >please use the provided password</span>
            </li>
            <li v-show="signingOption">
              <input id="isSignup" v-model="isSigningUp" type="checkbox" />
              <label for="isSignup">signing up</label>
            </li>
          </ul>
          <p class="footnote">
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
            >Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </p>
          <button
            :disabled="$v.$invalid"
            type="submit"
            title="submit form"
            role="button"
          >{{ isSigningUp ? 'Sign Up' : 'Sign In' }}</button>
        </form>
        <p class="error-request" v-if="isErrorRequestCode">
          Oops! There's something wrong with our server.
          <span>[code: {{isErrorRequestCode}}]</span>
          <br />Please try again later.
        </p>
        <app-svg-spinner v-show="isLoading" />
      </div>
    </transition>
  </div>
</template>

<script src="./authentication.js"/>
<style scoped lang="scss" src="./authentication.scss"/>
