<template>
  <div class="certificates" id="certificates">
    <h3>Certifications</h3>
    <ul v-if="certificates.length > 0">
      <li v-for="certificate in certificates" :key="certificate.header">
        <h4>{{certificate.header}}</h4>
        <p>
          <a :href="certificate.url" :title="certificate.url">@{{certificate.location}}</a>
        </p>
        <img :src="certificate.image" :alt="certificate.alt" />
      </li>
    </ul>
    <p v-if="!certificates">
      Oops! There's something wrong with our server.
      <br />Please try again later.
    </p>
  </div>
</template>
<script>
import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
  mounted () {
    // const certs = document.querySelector('#certificates');
    // console.log('TLC: mounted -> certs', certs.clientHeight);
  },
  data () {
    return {
      certificates: []
    };
  },
  created () {
    _getCollection('certificates').then(snapshots => {
      // console.log('TLC: created -> snapshots', snapshots);
      if (!snapshots.empty) {
        snapshots.forEach(element => {
          // console.log('TLC: created -> element.data()', element.data());
          let elemData = element.data();
          if (elemData.image) {
            elemData.image = _getImgContextPath(`education/${elemData.image}`);
          }
          // console.log('TLC: created -> elemData.image', elemData.image);
          this.certificates.push(elemData);
        });
      } else {
        // console.log('TLC: created -> lsit empty');
        this.certificates = false;
      }
    });
  }
};
</script>
<style src="@/styles/components/certificates.scss" scoped lang="scss"></style>
