// @ is an alias to /src
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { init, onStateChange } from '@/firebase';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Authentication from '@/components/authentication/Authentication.vue';
import PageLinks from '@/components/pageLinks/PageLinks.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNavigation: Navigation,
    appAuthentication: Authentication,
    appPageLinks: PageLinks
  },
  beforeCreate () {
    init(); // set firebase config
    onStateChange(); // authentication state observer
  },
  created () { },
  beforeMount () { },
  mounted () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroyed () { },
  destroyed () { },
  watch: {
    $route (fr, to) {
      clearAllBodyScrollLocks();
    }
  }
};
