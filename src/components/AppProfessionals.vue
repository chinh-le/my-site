<template>
  <div :class="$style['professionals-container']">
    <h3>{{ $t('professionals.heading') }}</h3>
    <transition
      name="slide-fade"
      mode="out-in"
      :enter-class="$style['slide-fade-enter']"
      :enter-to-class="$style['slide-fade-enter-to']"
      :enter-active-class="$style['slide-fade-enter-active']"
      :leave-class="$style['slide-fade-leave']"
      :leave-to-class="$style['slide-fade-leave-to']"
      :leave-active-class="$style['slide-fade-leave-active']"
    >
      <AppCardOverlayList
        v-if="professionals.length > 0"
        :class="$style['professionals']"
        :items="professionals"
        :tab-index="tabIndex"
      />
      <BaseDualRing v-else-if="!isErrorRequest" />
      <BaseErrorRequest
        v-else
        :error-code="errorRequestCode"
      />
    </transition>
  </div>
</template>

<script>
    import { _getData } from '@/utils/helpers';
    import { _getImgContextPath } from '@/firebase';
    import { _tabIndex } from '@/utils/tabIndex';
    import AppCardOverlayList from './AppCardOverlayList';
    import BaseErrorRequest from './base/BaseErrorRequest';
    import BaseDualRing from './base/BaseDualRing';

    export default {
        components: {
            BaseDualRing,
            BaseErrorRequest,
            AppCardOverlayList
        },
        data () {
            return {
                tabIndex: _tabIndex.listProfessionals,
                professionals: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getData('professionals')
                .then(querySnapshot => {
                    // console.log('TLC: created -> querySnapshot', querySnapshot);
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
                    // console.log('TLC: professionals - created -> err.code', err.code);
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;            
                });
        }
    };

</script>

<style lang="scss" module>
.professionals-container {
  min-height: 200px;
}
.professionals {
    width: var(--professionals-width);
    margin-bottom: 4em;
}
@include slide-fade-helper('enter');
</style>