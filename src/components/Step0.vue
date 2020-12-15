<template>
  <div>
    <div class="app-q__title">
      What type of purchase do you wish to make?
    </div>

    <div class="row justify-center">
      <AppBtn
        v-for="(item, index) in step0"
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
  name: 'Step0',
  components: {
    AppBtn
  },
  props: {
    step0: Array
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
