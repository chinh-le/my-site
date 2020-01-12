<template>
  <div :class="$style['download-resume']">
    <!-- <div> -->
    <BaseButtonIcon
      :id="'downloadResume'"
      :btn-class="'btn-download-resume'"
      :btn-title="'download resume'"
      :click-handler="toggleDownloadList"
      :btn-icon="'cloud_download'"
      :blur-handler="hideDownloadList"
    />
    <transition
      name="slide-vertical"
      mode="in-out"
      :enter-active-class="$style['slide-vertical-enter-active']"
      :leave-active-class="$style['slide-vertical-leave-active']"
    >
      <AppResumeList
        v-show="listShow"
        :style="`top:${topPos}`"
      />
    </transition>
  </div>
</template>
<script>
    import BaseButtonIcon from './base/BaseButtonIcon';
    import AppResumeList from './AppResumeList';
    export default {
        components: {
            AppResumeList,
            BaseButtonIcon
        },
        data () {
            return {
                elSiteWrap: null,
                elTheHeader: null,
                topPos: null,
                listShow: false
            };
        },
        mounted () {
            this.elTheHeader = document.querySelector('#theHeader');
            this.elSiteWrap = document.querySelector('#siteWrap');
            
            setInlineStyle(this);
            
            window.addEventListener('resize', () => setInlineStyle(this));

            this.elSiteWrap.addEventListener('scroll', this.hideDownloadList);
        },
        beforeDestroy () {
            window.removeEventListener('resize', setInlineStyle);

            this.elSiteWrap.removeEventListener('scroll', this.hideDownloadList);
        },
        methods: {
            hideDownloadList () {
                this.listShow = false;
            },
            toggleDownloadList () {
                this.listShow = !this.listShow;
                
            }
        }
    };

    const setInlineStyle = (vm) => {
        vm.topPos = `${vm.elTheHeader.offsetHeight}px`;
    };
</script>
<style lang="scss" module>
.download-resume {
    position: relative;
}
@include slide-vertical-helper;

</style>