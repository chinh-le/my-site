<template>
  <button
    :class="[$style['btn'], $style[`btn-${btnLabel}`], $style[setActive]]"
    :title="btnTitle"
    @click="clickHandler(btnLabel)"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
    export default {
        props: {
            btnLabel: {
                type: String,
                default: () => ''
            },
            btnTitle: {
                type: String,
                default: () => ''
            },
            clickHandler: {
                type: Function,
                default: () => () => {}
            },
        },
        computed: {
            setActive () {
                return this.$i18n.locale === this.btnLabel ? 'active' : '';
            }
        }
    };
</script>

<style lang="scss" module>
.btn {
    color: $lang-button-color;
    text-transform: uppercase;
    font-size: var(--base-button-lang-size);
    padding: 1.2em 1.5em;
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