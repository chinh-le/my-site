<template>
  <footer class="site-footer">
    <app-logo />
    <app-quick-links />
    <!-- <app-contact-info /> -->
    <app-social-media />
    <app-copyright></app-copyright>
  </footer>
</template>
<script>
import Logo from './Logo.vue';
import QuickLinks from './QuickLinks.vue';
// import ContactInfo from './ContactInfo.vue';
import SocialMedia from './SocialMedia.vue';
import Copyright from './Copyright';

export default {
  components: {
    appLogo: Logo,
    appQuickLinks: QuickLinks,
    // appContactInfo: ContactInfo,
    appSocialMedia: SocialMedia,
    appCopyright: Copyright
  }
};
</script>
<style scoped lang="scss">
</style>
