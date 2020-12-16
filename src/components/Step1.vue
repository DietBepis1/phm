<template>
  <div>
    <transition
      appear
      enter-active-class="animated slideInUp"
    >
      <div class="app-q__title">
        What is your approximate gross annual income?
      </div>
    </transition>
    <transition
      appear
      appear-active-class="animated slideInDown"
    >
      <div class="row justify-center">
        <AppBtn
          v-for="(item, index) in step1"
          :key="index"
          :data="item"
          @incrementProgress="incrementProgress($event)"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import AppBtn from './AppBtn'
export default {
  name: 'Step1',
  components: {
    AppBtn
  },
  props: {
    step1: {
      type: Array,
      default: function () {
        return { msg: 'Missing Prop' }
      }
    }
  },
  methods: {
    // Catches AppBtn press and propagates the event upward.
    incrementProgress (btnValue) {
      this.$emit('incrementProgress', btnValue)
      this.active = !this.active
    }
  }

}
</script>

<style lang="sass" scoped>
@import '../css/LoanApp'
</style>
