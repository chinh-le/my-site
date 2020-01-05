<template>
  <p :class="$style['recaptcha']">
    {{ $t('recaptcha.text-1') }}
    <a
      :class="$style['recaptcha-link']"
      :href="$t('recaptcha.policy.link')"
      target="_blank"
      :title="$t('recaptcha.policy.text')"
      :tabindex="tabIndex.recaptcha[0]"
    >{{ $t('recaptcha.policy.text') }}</a> {{ $t('recaptcha.text-2') }}
    <a 
      :class="$style['recaptcha-link']"
      :href="$t('recaptcha.terms.link')"
      target="_blank"
      :title="$t('recaptcha.terms.text')"
      :tabindex="tabIndex.recaptcha[1]"
    >{{ $t('recaptcha.terms.text') }}</a> {{ $t('recaptcha.text-3') }}.
  </p>
</template>

<script>
    import { _tabIndex } from '@/utils/tabIndex';
    export default {
        data () {
            return {
                tabIndex: _tabIndex
            };
        }
    };
</script>

<style lang="scss" module>
.recaptcha {
  font-size: 0.7em;
  line-height: 1.3em;
  color: var(--footnote-txt-color);
  opacity: 0.3;
}
.recaptcha-link {
  color: var(--footnote-txt-color-links);
}
</style>