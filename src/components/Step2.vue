<template>
  <div>
    <div class="app-q__title">
      What is the timeframe for your Purchase?
    </div>
    <div class="row justify-center">
      <AppBtn
        v-for="(item, index) in step2"
        :key="index"
        :data="item"
        @incrementProgress="incrementProgress($event)"
      />
    </div>
  </div>
</template>

<script>
import AppBtn from './AppBtn'
export default {
  name: 'Step2',
  components: {
    AppBtn
  },
  props: {
    step2: Array
  },
  methods: {
    // Catches AppBtn press and propagates the event upward.
    incrementProgress (btnValue) {
      this.$emit('incrementProgress', btnValue)
    }
  }

}
</script>

<style lang="sass" scoped>
@import '../css/LoanApp'
</style>
