<template>
  <div :class="$style['personals-container']">
    <h3>{{ $t('personals.heading') }}</h3>
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
      <div
        v-if="personals.length > 0"
        :class="$style['personals']"
      >
        <AppCardOverlayList
          :items="personals"
        />
      </div>
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
                personals: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getData('personals')
                .then(querySnapshot => {
                    // console.log('TLC: created -> querySnapshot', querySnapshot);
                    this.errorRequest = false;
                    this.errorRequestCode = null;

                    if (!querySnapshot.empty) {
                        querySnapshot.forEach(element => {
                            let elemData = element.data();
                            // console.log('TLC: created -> elemData', elemData);
                            // console.log('TLC: created -> elemData.image', elemData.image);

                            if (elemData.image) {
                                elemData.image = _getImgContextPath(`works/${elemData.image}`);
                                // console.log('TLC: created -> elemData.image', elemData.image);
                            }

                            this.personals.push(elemData);
                        });
                    } else {
                        // console.log('TLC: created -> list empty');
                        this.personals = [];
                    }
                })
                .catch(err => {
                    // console.log('TLC: personals - created -> err.code', err.code);
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;
                });
        }
    };
</script>

<style lang="scss" module>
.personals-container {
  min-height: 200px;
}
.personals {
    width: var(--personals-width);
}
@include slide-fade-helper('enter');
</style>