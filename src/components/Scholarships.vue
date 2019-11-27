<template>
  <div class="scholarships">
    <h3>Scholarships</h3>
    <ul class>
      <li v-for="scholarship in scholarships" :key="scholarship.header">
        <h4>{{scholarship.header}}</h4>
        <p>
          <a :href="scholarship.url" :title="scholarship.url">@{{scholarship.location}}</a>
        </p>
        <img :src="scholarship.image" :alt="scholarship.alt" />
      </li>
    </ul>
  </div>
</template>
<script>
import { _getCollection } from '@/firebase';
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
            elemData.image = this.getImgContextPath(elemData.image);
          }

          this.scholarships.push(elemData);
        });
      } else {
        console.error('list empty!!!');
      }
    });
  },
  methods: {
    getImgContextPath (imgName) {
      const imgPath = require('@/assets/education/' + imgName);

      return imgPath || null;
    }
  }
};
</script>
<style src="@/styles/components/scholarships.scss" scoped lang="scss>"></style>
