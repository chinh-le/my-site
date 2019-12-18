<template>
  <div
    id="app"
    :class="$style['app']"
  >
    <div
      id="bgGradient"
      :class="$style['bg-gradient']"
    />
    <TheHeader />
    <main
      id="siteWrap"
      :class="$style['site-wrap']"
    >
      <transition
        name="fading"
        mode="out-in"
        :enter-class="$style['fading-enter']"
        :enter-to-class="$style['fading-enter-to']"
        :enter-active-class="$style['fading-enter-active']"
        :leave-class="$style['fading-leave']"
        :leave-active-class="$style['fading-leave-actvive']"
        :leave-to-class="$style['fading-leave-to']"
      >
        <router-view />
      </transition>
    </main>
    <TheFooter />
    <AppNavigate />
    <AppAuthenticate />
    <AppNavigateLinksSidebar />
  </div>
</template>

<script>
    // @ is an alias to /src
    import { init, onStateChange } from '@/firebase';
    import TheHeader from '@/components/TheHeader';
    import TheFooter from '@/components/TheFooter';
    import AppNavigate from '@/components/AppNavigate';
    import AppAuthenticate from '@/components/AppAuthenticate';
    import AppNavigateLinksSidebar from '@/components/AppNavigateLinksSidebar';

    export default {
        components: {
            AppNavigateLinksSidebar,
            AppAuthenticate,
            AppNavigate,
            TheHeader,
            TheFooter,
        },
        data () {
            return {
                elBody: null,
                elBgGradient: null,
                elSiteWrap: null,
                elTheHeader: null,
                elTheFooter: null
            }
        },
        beforeCreate () {
            init(); // set firebase config
            onStateChange(); // authentication state observer
        },
        mounted () {
            this.elBody = document.querySelector('body');
            this.elBgGradient = document.querySelector('#bgGradient');
            this.elSiteWrap = document.querySelector('#siteWrap');
            this.elTheHeader = document.querySelector('#theHeader');
            this.elTheFooter = document.querySelector('#theFooter');
            
            setInlineStyle(this);
 
            window.addEventListener('resize', () => {
                setInlineStyle(this);
            });
        },
        beforeDestroy () {
            window.removeEventListener('resize', setInlineStyle);
        }
    };
    
    const setInlineStyle = (vm) => {
        vm.elBody.setAttribute('style', `height: ${window.innerHeight}px`);
        vm.elBgGradient.setAttribute('style', `height: ${window.innerHeight}px`);
        vm.elSiteWrap.setAttribute('style', `height: ${window.innerHeight - vm.elTheHeader.clientHeight - vm.elTheFooter.clientHeight}px; top: ${vm.elTheHeader.clientHeight}px`);
    };
</script>

<style lang="scss" module>
.app {
  z-index: $z-index-app; //2;
  width: var(--app-width);
  margin: 0 auto;
}
.bg-gradient {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.site-wrap {
  position: relative;
  top: var(--site-header-height);
  z-index: $z-index-site-wrap; //4;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: var(--site-wrap-padding);
  overflow-y: scroll;
  scrollbar-color: #D85426 #D85426;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
      background: transparent;
      width: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 0.5em;
  }
  &:hover {
  scrollbar-color: #D85426 #D85426;
    &::-webkit-scrollbar-thumb {
      background: #D85426;
    }
  }
}
@include fading-helper;
</style>
