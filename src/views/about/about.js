import { setPosX, windowResizeHandler } from '@/js/helpers';
import Skills from '@/components/skills/Skills.vue';

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
  beforeDestroy () {
    // console.log('TLC: About -> beforeDestroy');
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler (evt) {
      this.posX = windowResizeHandler(evt, 'left');
    }
  },
  components: {
    appSkills: Skills
  }
};
