<template>
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
      <h3>{{ $t('personals.heading') }}</h3>
      <AppCardOverlayList
        :items="personals"
      />
      <BaseErrorRequest
        v-show="isErrorRequest"
        :error-code="errorRequestCode"
      />
    </div>
  </transition>
</template>

<script>
    import { _getCollection, _getImgContextPath } from '@/firebase'
    import AppCardOverlayList from './AppCardOverlayList'
    import BaseErrorRequest from './base/BaseErrorRequest'

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
            }
        },
        created () {
            _getCollection('personals')
                .then(querySnapshot => {
                    // console.log('TLC: created -> querySnapshot', querySnapshot)
                    this.errorRequest = false
                    this.errorRequestCode = null

                    if (!querySnapshot.empty) {
                        querySnapshot.forEach(element => {
                            let elemData = element.data()
                            // console.log('TLC: created -> elemData', elemData);
                            // console.log('TLC: created -> elemData.image', elemData.image);

                            if (elemData.image) {
                                elemData.image = _getImgContextPath(`works/${elemData.image}`)
                                // console.log('TLC: created -> elemData.image', elemData.image)
                            }

                            this.personals.push(elemData)
                        })
                    } else {
                        // console.log('TLC: created -> list empty')
                        this.personals = []
                    }
                })
                .catch(err => {
                    this.isErrorRequest = true
                    this.ErrorRequestCode = err.code
                })
        }
    }
</script>

<style lang="scss" module>
.personals {
    width: var(--personals-width);
}
@include slide-fade-helper('enter');
</style>