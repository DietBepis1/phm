<template>
  <div class="flex justify-center appbtn">
    <div class="col">
      <div class="row justify-center appbtn_container">
        <q-btn
          round
          ripple
          class="appbtn__btn"
          @click="incrementProgress(data.text)"
        >
          <q-img
            :src="require(`../assets/svg/${data.icon}`)"
            class="appbtn__btn-svg"
          />
        </q-btn>
      </div>
      <div class="appbtn__text">
        {{ data.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    data: Object
  },
  methods: {
    incrementProgress (btnValue) {
      // Emits an event which sends the value of the button clicked and a call to
      // increment progress bar.
      this.$emit('incrementProgress', btnValue)
    }
  }

}
</script>

<style lang="sass">
@import '../css/AppBtn'
</style>
