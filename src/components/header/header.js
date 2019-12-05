import { logout } from '@/firebase';
import Logo from '@/components/logo/Logo.vue';
import SocialMedia from '@/components/socialMedia/SocialMedia.vue';
import { eventBus } from '@/js/eventBus';

export default {
  created () {
    // console.log(
    // 'TLC: Header created -> this.$store.getters.isAuthenticated ',
    // this.$store.getters.isAuthenticated
    // );
  },
  components: {
    appLogo: Logo,
    appSocialMedia: SocialMedia
  },
  data () {
    return {
      showSignin: false
    };
  },
  computed: {
    downloadUrl () {
      return this.$store.getters.downloadUrl;
    },
    authenticated () {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    openNav () {
      eventBus.openNav();
    },
    openAuth () {
      eventBus.openAuth();
    },
    toggleSignin () {
      this.showSignin = !this.showSignin;
    },
    signout () {
      logout();
    }
  }
};
