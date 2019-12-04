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
        this.professionals = false;
      }
    });
  }
};
