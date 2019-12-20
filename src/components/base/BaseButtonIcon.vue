<template>
  <button
    :id="btnId"
    type="button"
    :class="[$style['btn'], $style[btnClass]]"
    :title="btnTitle"
    @click="btnHandler"
  >
    <i class="material-icons">{{ btnIcon }}</i>
  </button>
</template>

<script>
    export default {
        props: {
            btnId: {
                type: String,
                default: () => ''
            },
            btnClass: {
                type: String,
                default: () => ''
            },
            btnTitle: {
                type: String,
                default: () => ''
            },
            btnHandler: {
                type: Function,
                default: () => () => {}
            },
            btnIcon: {
                type: String,
                default: () => ''
            },
        }
    }
</script>

<style lang="scss" module>
.btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.6em;
    &:hover {
        cursor: pointer;
    }
    &:after {
        @include screen-reader-ready;
    }
    > i {
        font-size: var(--base-button-icon-size);
        transition: font-size var(--the-header-anim-duration) var(--the-header-anim-timing);
        color: $auth-icon-color;
    }
}
.btn-close {
    padding: var(--base-button-icon-close-padding);
    &:after {
        content: 'close';
    }
}
.btn-signin {
    &:after {
        content: "open signin";
    }
}
.btn-signout {
    &:after {
        content: "signout";
    }
}
.btn-nav {
    &:after {
        content: "open navigation";
    }
}
</style>