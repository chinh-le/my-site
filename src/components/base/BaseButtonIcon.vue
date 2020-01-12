<template>
  <button
    :id="btnId"
    type="button"
    :class="[$style['btn'], $style[btnClass]]"
    :title="btnTitle"
    @click="clickHandler"
    @blur="blurHandler"
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
            btnIcon: {
                type: String,
                default: () => ''
            },
            clickHandler: {
                type: Function,
                default: () => () => {}
            },
            blurHandler: {
                type: Function,
                default: () => () => {}
            },
        }
    };
</script>

<style lang="scss" module>
.btn {
    display: flex;
    padding: 1em;
    background-color: $theHeader-bg-color;
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
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
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
.btn-download-resume {
    position: relative;
    z-index: $z-index-btn-download-resume;
    &:after {
        content: "download resume";
    }
}
</style>