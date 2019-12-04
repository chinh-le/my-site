import { setPosX, windowResizeHandler } from '@/js/helpers';
import ContactInfo from '@/components/contactInfo/ContactInfo.vue';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the heading (h1) to the left aligning with the logo
    this.posX = setPosX('left');

    window.addEventListener('resize', this.resizeHandler);
  },
  mounted () {
    document.querySelector('#site-wrap').scroll({
      left: 0,
      top: 0
    });
  },
  beforeDestroy () {
    // console.log('TLC: Contact -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appContactInfo: ContactInfo
  }
};
