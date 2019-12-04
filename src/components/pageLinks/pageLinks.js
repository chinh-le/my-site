import { setPosX, windowResizeHandler } from '@/js/helpers';

export default {
  data () {
    return {
      posX: null
    };
  },
  created () {
    // set/keep the nav (pageLinks) dots to the right aligning with the hamburger icon
    this.posX = setPosX('right');

    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy () {
    // console.log('TLC: PageLinks -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'right');
    }
  }
};
