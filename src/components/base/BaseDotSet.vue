<template>
  <div :class="$style['dot-set']">
    <div id="dots">
      <span
        v-for="dot in ratingsLength"
        :key="dot"
        :class="[$style['dot'], {[$style['fill']]: dot <= skill.rate, [$style['empty']]: dot > skill.rate}]"
      />
    </div>
    <label
      :class="$style['dot-label']"
      for="dots"
    >{{ $t(`skills.ratings.${ratings[skill.rate]}`) }}</label>
  </div>
</template>

<script>
    export default {
        props: {
            ratings: {
                type: Object,
                default () {
                    return {};
                }
            },
            ratingsLength: {
                type: Number,
                default () {
                    return 0;
                }
            },
            skill: {
                type: Object,
                default () {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" module>
$dot-width: 0.7em;

.dot-set {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.dot {
    width: $dot-width;
    height: $dot-width;
    display: inline-block;
    margin-left: 0.3em;
    border-radius: $dot-width;
    background-color: $color-icon-skill-dot;
    opacity: 0.15;
}
.dot-label {
    font-size: 0.7em;
    line-height: 0.5em;
    @include color-unfocus;
}
.fill {
    opacity: 0.4;
}
.empty {
    opacity: 0.15;
}
</style>