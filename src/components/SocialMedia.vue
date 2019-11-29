<template>
  <ul class="social-media">
    <li v-for="(socialMedia, index) in socialMedias" :key="index">
      <a :href="socialMedia.url" :class="socialMedia.label" :title="socialMedia.label">
        <img :src="socialMedia.image" :alt="socialMedia.label" />
      </a>
    </li>
  </ul>
</template>
<script>
import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
  data () {
    return {
      socialMedias: []
    };
  },
  created () {
    _getCollection('socialMedia').then(snapshots => {
      // console.log('TLC: created -> snapshots', snapshots);
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
        // console.log('TLC: created -> this.socialMedias', this.socialMedias);
      } else {
        console.error('list empty!!!');
      }
    });
  }
};
</script>
<style scoped lang="scss" src="@/styles/components/socialMedia.scss"></style>
