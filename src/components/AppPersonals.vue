<template>
  <div :class="$style['personals']">
    <h3>{{ $t('personals.heading') }}</h3>
    <AppCardOverlayList
      v-if="personals.length > 0"
      :items="personals"
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
                personals: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getCollection('personals')
                .then(querySnapshot => {
                    // console.log('TLC: created -> querySnapshot', querySnapshot);
                    this.errorRequest = false;
                    this.errorRequestCode = null;
                
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
                        this.personals = [];
                    }
                })
                .catch(err => {
                    this.isErrorRequest = true;
                    this.ErrorRequestCode = err.code;
                });
        }
    };

</script>

<style lang="scss" module>
.personals {}
</style>