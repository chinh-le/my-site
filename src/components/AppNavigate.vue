<template>
  <div
    id="site-nav"
    class="site-nav"
  >
    <transition
      name="fading"
      mode="in-out"
    >
      <div
        v-show="isShow"
        class="bg-canvas"
        title="close navigation"
        @click="closeNav()"
      />
    </transition>
    <transition name="slide">
      <div
        v-show="isShow"
        id="navigation"
        class="navigation"
      >
        <button
          type="button"
          class="btn-close"
          title="close navigation"
          @click="closeNav()"
        >
          <i class="material-icons">close</i>
        </button>
        <div class="content">
          <BaseLang />
          <AppNavigateLinks />
          <AppSocialMedia />
          <BaseCopyright />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import {
        disableBodyScroll,
        enableBodyScroll,
        clearAllBodyScrollLocks
    } from 'body-scroll-lock';
    import BaseLang from './BaseLang';
    import AppNavigateLinks from './AppNavigateLinks';
    import AppSocialMedia from './AppSocialMedia';
    import BaseCopyright from './BaseCopyright';
    import { eventBus } from '@/js/eventBus';
    // import { scrollTo } from '@/js/helpers';

    export default {
        components: {
            BaseLang,
            AppNavigateLinks,
            AppSocialMedia,
            BaseCopyright
        },
        /* props: {
            navShow: {
                type: Boolean
            },
            nav: {
                show: {
                    type: Boolean,
                    default () {
                        return false;
                    }
                },
                cb: {
                    type: Function
                }
            },
            show: {
                type: Boolean,
                default () {
                    return false;
                }
            },
            cb: {
                type: Function,
                default () {
                    return null;
                }
            }
        }, */
        data () {
            return {
                isShow: false,
                elemPersistLockScroll: null
            };
        },
        watch: {
            $route (to, from) {
                // console.log('to: ', to);
                // console.log('from: ', from);
                this.isShow = false; // close nav on route change
            }
        },
        created () {
            // console.log('TLC: Navigation - created -> created');
            eventBus.$on('evtBusOpenNav', () => {
                /* scrollTo({
                          x: 0,
                          y: 0
                        }); */

                this.isShow = true;

                disableBodyScroll(this.elemPersistLockScroll);
                // console.log(
                // 'TLC: Navigation - created - evtBusOpenNav -> disableBodyScroll'
                // );
            });
        },
        beforeMount () {
            // console.log('TLC: Navigation - beforeMount -> beforeMount');
        },
        mounted () {
            // console.log('TLC: Navigation - mounted -> mounted');
            this.elemPersistLockScroll = document.querySelector('#site-nav');
        },
        beforeUpdate () {
            // console.log('TLC: Navigation - beforeUpdate -> beforeUpdate');
        },
        updated () {
            // console.log('TLC: Navigation - updated -> updated');
        },
        beforeDestroy () {
            // console.log('TLC: Navigation - beforeDestroy -> beforeDestroy');
            clearAllBodyScrollLocks();
        },
        destroyed () {
            // console.log('TLC: Navigation - destroyed -> destroyed');
        },
        methods: {
            closeNav () {
                this.isShow = false;

                enableBodyScroll(this.elemPersistLockScroll);
                // console.log('TLC: Navigation - closeNav -> enableBodyScroll');
            }
        },
        beforeCreated () {
            // console.log('TLC: Navigation - beforeCreated -> beforeCreated');
        }
    };

</script>

<style lang="scss" scoped>
.navigation {
  @include slide-in-panel;
}

.page-links {
  display: block;
}

.content {
  padding: 2em 1em;
}

@include btn-close-x("close navigation");

@include slide-helper;

.bg-canvas {
  @include bg-canvas;
}

@include fading-helper;
</style>