<template>
  <a
    :href="linkHref"
    :target="linkTarget"
    :class="[$style['link'], $style[linkClass]]"
    :title="linkTitle"
  >
    <i class="material-icons">{{ linkIcon }}</i>
  </a>
</template>

<script>
    export default {
        props: {
            linkHref: {
                type: String,
                default () {
                    return null;
                }
            },
            linkTarget: {
                type: String,
                default () {
                    return '_blank';
                }
            },
            linkClass: {
                type: String,
                default () {
                    return null;
                }
            },
            linkTitle: {
                type: String,
                default () {
                    return null;
                }
            },
            linkIcon: {
                type: String,
                default () {
                    return null
                }
            }
        }
        
    }
</script>

<style lang="scss" module>
.link {
    color: $download-icon-color;
    border-radius: 2em;
    &:hover {
        cursor: pointer;
    }
    &:after{
        @include screen-reader-ready;
    }
}
.link-download {
    &:after {
        content: "cloud download";
    }
    > i {
        padding: 0.6em 0.7em 0.6em 0.9em;
    }
}
</style>