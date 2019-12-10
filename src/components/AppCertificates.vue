<template>
  <div :class="$style['certificates']">
    <h3>Certifications</h3>
    <AppCardList
      v-if="certificates.length > 0"
      :items="certificates"
    />
    <BaseErrorRequest
      v-if="isErrorRequest"
      :error-code="errorRequestCode"
    />
  </div>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase';
    import AppCardList from './AppCardList';
    import BaseErrorRequest from './base/BaseErrorRequest';

    export default {
        components: {
            BaseErrorRequest,
            AppCardList
        },
        data () {
            return {
                certificates: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getCollection('certificates')
                .then(snapshots => {
                    // // console.log('TLC: created -> snapshots', snapshots);
                    this.isErrorRequest = false;
                    this.errorRequestCode = null;

                    if (!snapshots.empty) {
                        snapshots.forEach(element => {
                            // // console.log('TLC: created -> element.data()', element.data());
                            let elemData = element.data();
                            if (elemData.image) {
                                elemData.image = _getImgContextPath(`education/${elemData.image}`);
                            }
                            // // console.log('TLC: created -> elemData.image', elemData.image);
                            this.certificates.push(elemData);
                        });
                    } else {
                        // // console.log('TLC: created -> lsit empty');
                        this.certificates = [];
                    }
                })
                .catch(err => {
                    // console.log('TLC: created -> err', err);
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;
                });
        }
    };

</script>

<style lang="scss" module>
.certificates {
  margin-bottom: 3em;
}
</style>