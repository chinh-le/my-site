<template>
  <div class="scholarships">
    <h3>Scholarships</h3>
    <ul v-if="scholarships.length > 0">
      <li v-for="(scholarship, index) in scholarships" :key="index">
        <h4>{{scholarship.header}}</h4>
        <p>
          <a :href="scholarship.url" :title="scholarship.alt">@{{scholarship.location}}</a>
        </p>
        <img :src="scholarship.image" :alt="scholarship.alt" />
      </li>
    </ul>
    <p v-else>Oops! There's something wrong with our server. Please try again later.</p>
  </div>
</template>
<script>
import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
  data () {
    return {
      scholarships: []
    };
  },
  created () {
    _getCollection('scholarships').then(snapshots => {
      // console.log('TLC: created -> snapshots', snapshots);
      if (!snapshots.empty) {
        snapshots.forEach(element => {
          // console.log('TLC: created -> element', element);
          let elemData = element.data();
          // console.log('TLC: created -> elemData', elemData);
          if (elemData.image) {
            // elemData.image = this.getImgContextPath(elemData.image);
            elemData.image = _getImgContextPath(`education/${elemData.image}`);
          }

          this.scholarships.push(elemData);
        });
      } else {
        // console.error('list empty!!!');
      }
    });
  }
};
</script>
<style src="@/styles/components/scholarships.scss" scoped lang="scss>"></style>
