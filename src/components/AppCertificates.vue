<template>
  <div :class="$style['certificates-container']">
    <h3>{{ $t('certifications.heading') }}</h3>
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
        v-if="certificates.length > 0"
        :class="$style['certificates']"
      >
        <AppCardList
          :items="certificates"
          :tab-index="tabIndex"
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
    import { _getData, _getImgContextPath } from '@/utils/helpers';
    import { _tabIndex } from '@/utils/tabIndex';
    import AppCardList from './AppCardList';
    import BaseErrorRequest from './base/BaseErrorRequest';
    import BaseDualRing from './base/BaseDualRing';

    export default {
        components: {
            BaseDualRing,
            BaseErrorRequest,
            AppCardList
        },
        data () {
            return {
                tabIndex: _tabIndex.listCertificates,
                certificates: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getData('certificates')
                .then(snapshots => {
                    // // // console.log('TLC: created -> snapshots', snapshots);
                    this.isErrorRequest = false;
                    this.errorRequestCode = null;

                    if (!snapshots.empty) {
                        snapshots.forEach(element => {
                            // // // console.log('TLC: created -> element.data()', element.data());
                            let elemData = element.data();
                            if (elemData.image) {
                                elemData.image = _getImgContextPath(`education/${elemData.image}`);
                            }
                            // // // console.log('TLC: created -> elemData.image', elemData.image);
                            this.certificates.push(elemData);
                        });
                        // console.log('TLC: created -> this.certificates', this.certificates);
                    } else {
                        // // // console.log('TLC: created -> lsit empty');
                        this.certificates = [];
                    }
                })
                .catch(err => {
                    // // console.log('TLC: created -> err', err);
                    this.isErrorRequest = true;
                    this.errorRequestCode = err.code;
                });
        }
    };

</script>

<style lang="scss" module>
.certificates-container {
  min-height: 200px;
}
.certificates {
    width: var(--education-content-sub-width);
    margin-bottom: 3em;  
}
@include slide-fade-helper('enter');
</style>