import Vue from 'vue';

export const eventBus = new Vue({
  methods: {
    openNav () {
      this.$emit('evtBusOpenNav');
    },
    closeNav () {
      this.$emit('evtBusCloseNav');
    },
    openAuth () {
      this.$emit('evtBusOpenAuth');
    },
    closeAuth () {
      this.$emit('evtBusCloseAuth');
    }
  }
});
