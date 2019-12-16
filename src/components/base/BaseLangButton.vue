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
    color: $lang-button-color;
    text-transform: uppercase;
    font-size: var(--base-button-lang-size);
    padding: 1.2em;
    &:before {
        @include screen-reader-ready;
    }
    &:hover {
        cursor: pointer;
    }
}
.active {
    color: $nav-links-color-active;
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