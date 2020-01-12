<template>
  <ul
    id="resumeList"
    :class="$style['resume-list']"
  >
    <li
      v-for="(link, key, index) in links"
      :key="key"
    >
      <BaseLinkImage
        :link="link" 
        :tabindex="tabIndex.siteAction[++index]"
      />
    </li>
  </ul>
</template>
<script>
    import { mapState } from 'vuex';
    import { _appConfig } from '@/config';
    import { _tabIndex } from '@/utils/tabIndex';
    import { _getImgContextPath } from '@/utils/helpers';
    import { _getDownloadUrl } from '@/firebase';
    import BaseLinkImage from './base/BaseLinkImage';
    export default {
        components: {
            BaseLinkImage
        },
        data () {
            return {
                tabIndex: _tabIndex,
                links: {
                    pdf: {
                        url: null,
                        label: 'pdf',
                        image: _getImgContextPath(`icons/pdf-icon.png`)
                    },
                    docx: {
                        url: null,
                        label: 'doc',
                        image: _getImgContextPath(`icons/doc-icon.png`)

                    }
                }
            };
        },
        computed: {
            ...mapState([
                'lang'
            ])
        },
        watch: {
            lang () {
                this.setDownloadLinks();
            }
        },
        created () {
            this.setDownloadLinks();
        },
        methods: {
            setDownloadLinks () {
                for (const key of Object.keys(this.links)) {
                    setDownloadLink(this.lang, key).then(res => {
                        this.links[key].url = res;
                    });
                }
            }
        }
    };

    const setDownloadLink = (lang, format) => {
        const resumeFilePath = `${_appConfig.appResumeNamePath}${lang}.${format}`;

        return _getDownloadUrl(resumeFilePath);
    };
</script>
<style lang="scss" module>
.resume-list {
    position: absolute;
    top: 0;
    left: 4px;
    background-color: $theHeader-bg-color;
    z-index: $z-index-download-resume-list;
}
</style>