<template>
  <div>
    <app-logo />
    <app-quick-links />
    <app-contact-info />
    <div class="copyright">
      &copy; Copyright
    </div>
    <app-social-media />
  </div>
</template>
<script>
import Logo from './Logo.vue';
import QuickLinks from './QuickLinks.vue';
import ContactInfo from './ContactInfo.vue';
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    appLogo: Logo,
    appQuickLinks: QuickLinks,
    appContactInfo: ContactInfo,
    appSocialMedia: SocialMedia
  }
};
</script>
