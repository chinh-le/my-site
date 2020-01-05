<template>
  <ul
    v-if="socialMedias.length > 0"
    id="socialMedia"
    :class="$style['social-media']"
  >
    <li
      v-for="(socialMedia, index) in socialMedias"
      :key="index"
      :tabindex="tabIndex.socialMedia[index]"
    >
      <BaseLinkImage :link="socialMedia" />
    </li>
  </ul>
</template>

<script>
    import { _getImgContextPath } from '@/firebase';
    import { _getData } from '@/utils/helpers';
    import { _tabIndex } from '@/utils/tabIndex';
    import BaseLinkImage from './base/BaseLinkImage';

    export default {
        components: {
            BaseLinkImage
        },
        data () {
            return {
                tabIndex: _tabIndex,
                socialMedias: []
            };
        },
        created () {
            _getData('socialMedia')
                .then(snapshots => {
                    // // // console.log('TLC: created -> snapshots', snapshots);
                    if (!snapshots.empty) {
                        snapshots.forEach(element => {
                            let elemData = element.data();

                            if (elemData.image) {
                                elemData.image = _getImgContextPath(
                                    `socialMedia/${elemData.image}`
                                );
                            }
                            
                            this.socialMedias.push(elemData);
                        });
                    }
                });
            /* .catch(err => {
                    errorHandler(err);
                }); */
        }
    };

    /* const errorHandler = () => {
        // console.log('TLC: errorHandler -> err', err);
    }; */
</script>

<style lang="scss" module>
.social-media {
  display: var(--social-media-display);
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>