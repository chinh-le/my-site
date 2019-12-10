<template>
  <div :class="$style['professionals']">
    <h3>Professional</h3>
    <AppCardOverlayList
      v-if="professionals.length > 0"
      :items="professionals"
    />
    <BaseErrorRequest
      v-show="isErrorRequest"
      :error-code="errorRequestCode"
    />
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    import AppCardOverlayList from './AppCardOverlayList';
    import BaseErrorRequest from './base/BaseErrorRequest';

    export default {
        components: {
            BaseErrorRequest,
            AppCardOverlayList
        },
        data () {
            return {
                professionals: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            // professionals
            _getCollection('professionals')
                .then(querySnapshot => {
                    // // console.log('TLC: created -> querySnapshot', querySnapshot);
                    this.isErrorRequest = false;
                    this.errorRequestCode = null;

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
                        // console.log('TLC: created -> list empty');
                        this.professionals = [];
                    }
                })
                .catch(err => {
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;
                });
        }
    };

</script>

<style lang="scss" module>
.professionals {
  margin-bottom: 4em;
}
</style>