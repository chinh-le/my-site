import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import { required, maxLength } from 'vuelidate/lib/validators';
import { writeUserData } from '@/firebase';
import { recaptchaElement } from '@/js/recaptcha';
// import { scrollTo, emailRegex } from '@/js/helpers';
import { emailRegex } from '@/js/helpers';
import SvgSpinner from '@/components/svgSpinner/SvgSpinner.vue';
import { htmlEscaping } from '@/xss';

export default {
  mounted () {
    this.elemPersistLockScroll = document.querySelector('#contact-info');
  },
  components: {
    appSvgSpinner: SvgSpinner
  },
  data () {
    return {
      isErrorRequestCode: false,
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
          required,
          validAddress (email) {
            // console.log('TLC: validAddress -> email', email);
            return emailRegex.test(email);
          }
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
      /* scrollTo({
                    x: 0,
                    y: 0
                  }); */

      this.isLoading = true;
      this.isErrorRequestCode = false;

      disableBodyScroll(this.elemPersistLockScroll);

      recaptchaElement(this.recaptchaAction).then(res => {
        if (res.data.success && res.data.action === this.recaptchaAction) {
          // escaping user's inputs
          let inputEscaped = {};
          for (let i in this.user) {
            inputEscaped[i] = htmlEscaping(this.user[i]);
          }
          // console.log('TLC: onSubmit -> inputEscaped', inputEscaped);

          // writeUserData(this.user).then(
          writeUserData(inputEscaped)
            .then(
              res => {
                // console.log('TLC: ContactInfo - onSubmit -> res', res);
                this.isLoading = false;

                this.messageSent = true;

                enableBodyScroll(this.elemPersistLockScroll);
              },
              err => {
                // console.log('TLC: 4onSubmit -> err', err);
                this.isLoading = false;
                this.isErrorRequestCode = err.code;
                enableBodyScroll(this.elemPersistLockScroll);
              }
            )
            .catch(err => {
              // console.log('TLC: 5onSubmit -> err', err);
              this.isLoading = false;
              this.isErrorRequestCode = err.code;
              enableBodyScroll(this.elemPersistLockScroll);
            });
        } else {
          // console.log('TLC: onSubmit -> SPAM Automated Abused!!!');
          this.isErrorRequestCode = 'SPAM Automated Abused!!!';
          this.isLoading = false;
        }
      });
    }
  }
};
