<template>
  <ul
    v-if="socialMedias.length > 0"
    id="socialMedia"
    :class="$style['social-media']"
  >
    <li
      v-for="(socialMedia, index) in socialMedias"
      :key="index"
    >
      <BaseLinkImage :link="socialMedia" />
    </li>
  </ul>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    import BaseLinkImage from './base/BaseLinkImage';

    export default {
        components: {
            BaseLinkImage
        },
        data () {
            return {
                socialMedias: []
            };
        },
        created () {
            _getCollection('socialMedia')
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
                        // // // console.log('TLC: created -> this.socialMedias', this.socialMedias);
                    } else {
                        // // // console.log('TLC: created -> list empty');
                    }
                })
                .catch(err => {
                    errorHandler(err);
                });
        }
    };

    const errorHandler = () => {
        // console.log('TLC: errorHandler -> err', err);
    };
</script>

<style lang="scss" module>
.social-media {
  display: var(--social-media-display);
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>