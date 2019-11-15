<template>
  <transition name="slide">
    <div class="signin-container" v-show="isShow">
      <div class="signin">
        <button type="button" @click="closeSiginin()" class="btn-close"></button>
        <form novalidate @submit.prevent="onSubmit($event)">
          <ul>
            <li>
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="user.email"
                  type="email"
                  autocomplete="username"
                  @input="$v.user.email.$touch()"
                  placeholder="email*"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: !$v.user.email.isDefault && $v.user.email.$dirty}"
              >Please use the provided</span>
            </li>
            <li>
              <div class="form-field">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="user.password"
                  type="password"
                  :autocomplete="isSigningUp ? 'new-password' : 'current-password'"
                  @input="$v.user.password.$touch()"
                  placeholder="password*"
                />
              </div>
              <span
                class="form-error"
                :class="{visible: !$v.user.password.isDefault && $v.user.password.$dirty}"
              >Please use the provided</span>
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
          <button :disabled="$v.$invalid" type="submit">{{ isSigningUp ? 'Sign Up' : 'Sign In' }}</button>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import config from '@/config';
import { required } from 'vuelidate/lib/validators';
import { signup, login } from '@/firebase';
import { recaptchaElement } from '@/recaptcha';
import { eventBus } from '@/eventBus';

export default {
  created () {
    eventBus.$on('ebOpenAuth', () => {
      this.isShow = true;
    });
  },
  props: {
    show: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  data () {
    return {
      isShow: false,
      recaptchaAction: 'login',
      signingOption: false,
      isSigningUp: false,
      user: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    user: {
      email: {
        required,
        isDefault (email) {
          return email === config.appDefaultEmail;
        }
      },
      password: {
        required,
        isDefault: password => {
          return password === config.appDefaultPassword;
        }
      }
    }
  },
  methods: {
    closeSiginin () {
      // this.$emit('ceSignin');
      this.isShow = false;
    },
    onSubmit (evt) {
      const payload = {
        email: this.user.email,
        password: this.user.password
      };
      // console.log('payload: ', payload);

      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            if (this.isSigningUp) {
              signup(payload)
                .then(res => {
                  console.log('res: ', res);
                  if (res.user) {
                    this.isShow = false; // close login form
                  }
                })
                .catch(err => {
                  console.log('1err: ', err);
                });
            } else {
              login(payload)
                .then(res => {
                  console.log('res: ', res);
                  if (res.user) {
                    this.isShow = false; // close login form
                  }
                })
                .catch(err => {
                  console.log('1err: ', err);
                });
            }
          } else {
            console.error('SPAM!!!');
          }
        })
        .catch(err => {
          console.log('err: ', err);
        });
    }
  }
};
</script>
<style scoped lang="scss">
$signin-width: 100%;
$app-bg-color: #333;
$body-padding: 1em;
$app-txt-color: #999;
$form-field-bg-color: #444;
$app-txt-color-focus: #b36a12;
$app-min-height: 500px;

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
.signin-container {
  position: absolute;
  top: 0;
  right: 0;
  width: $signin-width;
  height: $signin-width;
  min-height: $app-min-height;
  background-color: $app-bg-color;
}
.signin {
  display: flex;
  flex-direction: column;
  padding: $body-padding;
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
.btn-close {
  font-family: "Roboto";
  font-size: 1.7em;
  padding: 0.5em 0 0 1em;
  align-self: flex-end;
  color: $app-txt-color;
  margin-bottom: 1em;
  &:before {
    content: "\00d7";
  }
  &:after {
    content: "close authentication";
    @extend .visually-hidden;
  }
}
.slide-enter-active {
  animation: slideIn 0.5s ease-in;
}
.slide-leave-active {
  animation: slideOut 0.4s ease-out;
}
@keyframes slideIn {
  from {
    transform: translateX($signin-width);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX($signin-width);
  }
}
.grecaptcha-badge {
  visibility: hidden;
}
</style>
