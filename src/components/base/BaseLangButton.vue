<template>
  <button
    :class="[$style['btn'], $style[`btn-${btnLabel}`], $style[setActive]]"
    :title="btnTitle"
    @click="btnHandler(btnLabel)"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
    export default {
        props: {
            btnLabel: {
                type: String,
                default () {
                    return null;
                }
            },
            btnTitle: {
                type: String,
                default () {
                    return null;
                }
            },
            btnHandler: {
                type: Function,
                default () {
                    return null;
                }
            },
        },
        computed: {
            setActive () {
                return this.$i18n.locale === this.btnLabel ? 'active' : null;
            }
        }
    }
</script>

<style lang="scss" module>
.btn {
    color: $color-txt;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 1.2em;
    &:before {
        @include screen-reader-ready;
    }
    &:hover {
        cursor: pointer;
    }
}
.active {
    color: $color-nav-links-current;
}    
.btn-en {
    &:before {
        content: "english";
    }
}
.btn-fr {
    &:before {
        content: "français";
    }
}
.btn-en {
    &:before {
        content: "vietnam";
    }
}
</style>