<template>
  <div :class="$style['scholarships-container']">
    <h3>{{ $t('scholarships.heading') }}</h3>
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
        v-if="scholarships.length > 0"
        :class="$style['scholarships']"
      >
        <AppCardList
          :items="scholarships"
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
                tabIndex: _tabIndex.listScholarships,
                scholarships: [],
                isErrorRequest: false,
                errorRequestCode: null
            };
        },
        created () {
            _getData('scholarships')
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
.scholarships-container {
  min-height: 200px;
}
.scholarships {
    width: var(--education-content-sub-width);
}
@include slide-fade-helper('enter');
</style>