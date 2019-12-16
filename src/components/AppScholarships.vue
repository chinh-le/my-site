<template>
  <div :class="$style['scholarships']">
    <h3>{{ $t('scholarships.heading') }}</h3>
    <AppCardList
      v-if="scholarships.length > 0"
      :items="scholarships"
    />
    <BaseErrorRequest
      v-show="isErrorRequest"
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
                scholarships: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getCollection('scholarships')
                .then(snapshots => {
                    // console.log('TLC: created -> snapshots', snapshots);
                    this.isErrorRequest = false;
                    this.errorRequestCode = null;

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
                        // console.log('TLC: created -> list empty');
                        this.scholarships = [];
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
.scholarships {
    width: var(--works-content-sub-width);

}
</style>