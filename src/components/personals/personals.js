import { _getCollection, _getImgContextPath } from '@/firebase';
export default {
  data () {
    return {
      personals: []
    };
  },
  created () {
    _getCollection('personals').then(querySnapshot => {
      // console.log('TLC: created -> querySnapshot', querySnapshot);
      if (!querySnapshot.empty) {
        querySnapshot.forEach(element => {
          let elemData = element.data();
          if (elemData.image) {
            elemData.image = _getImgContextPath(`works/${elemData.image}`);
          }
          this.personals.push(elemData);
        });
      } else {
        // console.log('TLC: created -> list empty');
        this.personals = false;
      }
    });
  }
};
