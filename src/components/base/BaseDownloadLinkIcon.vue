<template>
  <a
    :href="linkUrl"
    target="_blank"
    :class="[$style['link'], $style['link-download']]"
    :title="$t('buttons.download')"
  >
    <i class="material-icons">cloud_download</i>
  </a>
</template>

<script>
    import { mapState } from 'vuex';
    import { _getDownloadUrl } from '@/firebase';
    import { _appConfig } from '@/config';

    export default {
        data () {
            return {
                linkUrl: null
            };
        },
        computed: {
            ...mapState([
                'lang'
            ])
        },
        watch: {
            lang (newVal) {
                setDownloadLink(newVal).then(res => {
                    this.linkUrl = res;
                });
            }
        },
        created () {
            setDownloadLink(this.lang).then(res => {
                this.linkUrl = res;
            });
        },
    };

    const setDownloadLink = (lang) => {
        const resumeFilePath = _appConfig.appResumeNamePath + lang + '.pdf';

        return _getDownloadUrl(resumeFilePath);
    };
</script>

<style lang="scss" module>
.link {
    color: $download-icon-color;
    border-radius: 2em;
    &:hover {
        cursor: pointer;
    }
    &:after{
        @include screen-reader-ready;
    }
}
.link-download {
    &:after {
        content: "cloud download";
    }
    > i {
        padding: 0.6em 0.7em 0.6em 0.9em;
    }
}
</style>