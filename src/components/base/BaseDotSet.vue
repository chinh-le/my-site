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
                default: () => {}
            },
            ratingsLength: {
                type: Number,
                default: () => 0
            },
            skill: {
                type: Object,
                default: () => {}
            }
        }
    };
</script>

<style lang="scss" module>
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
    background-color: $skills-dot-icon-color;
}
.dot-label {
    font-size: 0.7em;
    line-height: 0.5em;
    color: $dimlight-color;
}
.fill {
    // opacity: 0.5;
}
.empty {
    opacity: 0.15;
}
</style>