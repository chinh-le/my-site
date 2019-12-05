import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
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
