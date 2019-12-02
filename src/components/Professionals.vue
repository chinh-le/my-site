<template>
  <div v-if="professionals" class="professionals">
    <h3 id="professional">Professional</h3>
    <ul v-if="professionals.length > 0">
      <li v-for="(professional, index) in professionals" :key="index">
        <a :href="professional.url" :class="professional.label" :title="professional.label">
          <img :src="professional.image" :alt="professional.label" />
        </a>
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
      professionals: []
    };
  },
  created () {
    // professionals
    _getCollection('professionals').then(querySnapshot => {
      // // console.log('TLC: created -> querySnapshot', querySnapshot);
      if (!querySnapshot.empty) {
        querySnapshot.forEach(element => {
          // console.log('TLC: created -> element.data()', element.data());
          let elemData = element.data();
          if (elemData.image) {
            elemData.image = _getImgContextPath(`works/${elemData.image}`);
            // console.log('TLC: created -> elemData.image', elemData.image);
          }
          this.professionals.push(elemData);
        });
      } else {
        // console.error('list empty!!!');
      }
    });
  }
};
</script>
<style src="@/styles/components/professionals.scss" scoped lang="scss"></style>
