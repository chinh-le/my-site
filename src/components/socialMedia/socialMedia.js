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
        // console.log('TLC: created -> list empty');
      }
    });
  }
};
