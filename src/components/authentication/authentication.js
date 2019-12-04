import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import config from '@/config';
import { required } from 'vuelidate/lib/validators';
import { signup, login } from '@/firebase';
import { recaptchaElement } from '@/js/recaptcha';
import { eventBus } from '@/js/eventBus';
// import { scrollTo } from '@/js/helpers';
// import { scrollTo, emailRegex } from '@/js/helpers';
import SvgSpinner from '@/components/svgSpinner/SvgSpinner.vue';

export default {
  components: {
    appSvgSpinner: SvgSpinner
  },
  created () {
    // // // // console.log('TLC: Authentication - created -> created');
    eventBus.$on('evtBusOpenAuth', () => {
      /* scrollTo({
                    x: 0,
                    y: 0
                  }); */

      this.isShow = true;

      disableBodyScroll(this.elemPersistLockScroll);
    });
  },
  beforeDestroy () {
    // // // // console.log('TLC: Authentication - beforeDestroy -> beforeDestroy');
    clearAllBodyScrollLocks();
  },
  destroyed () {
    // // // // console.log('TLC: Authentication - destroyed -> destroyed');
  },
  props: {
    show: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  beforeMount () {
    // // // // console.log('TLC: Authentication - beforeMount -> beforeMount');
  },
  mounted () {
    // // // // console.log('TLC: Authentication - mounted -> mounted');
    this.elemPersistLockScroll = document.querySelector('#site-auth');
  },
  data () {
    return {
      isErrorRequestCode: false,
      isLoading: false,
      elemPersistLockScroll: null,
      isShow: false,
      recaptchaAction: 'login',
      signingOption: false,
      isSigningUp: false,
      auth: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    auth: {
      email: {
        required,
        /* validAddress (email) {
                          return emailRegex.test(email);
                        }, */
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
    closeSignin () {
      // this.$emit('ceSignin');
      this.isShow = false;

      enableBodyScroll(this.elemPersistLockScroll);
    },
    onSubmit (evt) {
      const payload = {
        email: this.auth.email,
        password: this.auth.password
      };
      // // // console.log('TLC: onSubmit -> payload', payload);

      this.isLoading = true;
      this.isErrorRequestCode = false;

      recaptchaElement(this.recaptchaAction)
        .then(res => {
          if (res.data.success && res.data.action === this.recaptchaAction) {
            if (this.isSigningUp) {
              signup(payload)
                .then(res => {
                  // // console.log('TLC: onSubmit -> res', res);
                  if (res.user) {
                    this.closeSignin();
                    this.isLoading = false;
                  }
                })
                .catch(err => {
                  // console.log('TLC: onSubmit -> err', err);
                  this.isErrorRequestCode = err.code;
                  this.isLoading = false;
                });
            } else {
              login(payload)
                .then(res => {
                  // // console.log('TLC: onSubmit -> res', res);
                  if (res.user) {
                    this.closeSignin();
                    this.isLoading = false;
                  }
                })
                .catch(err => {
                  // console.log('TLC: onSubmit -> err', err.code);
                  this.isErrorRequestCode = err.code;
                  this.isLoading = false;
                });
            }
          } else {
            // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
            this.isErrorRequestCode = 'SPAM Automated Abused!!!';
            this.isLoading = false;
          }
        })
        .catch(err => {
          // console.log('TLC: onSubmit -> err', err);
          this.isErrorRequestCode = err.code;
          this.isLoading = false;
        });
    }
  }
};
