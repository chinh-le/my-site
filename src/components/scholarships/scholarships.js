import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
  mounted () {
    // const scholars = document.querySelector('#scholarships');
    // console.log('TLC: mounted -> scholars', scholars.clientHeight);
  },
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
        this.scholarships = false;
      }
    });
  }
};
