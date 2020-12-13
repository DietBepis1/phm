<template>
  <div class="flex justify-center appbtn">
    <div class="col">
      <div class="row justify-center btn_div">
        <q-btn
          round
          ripple
          class="appbtn__btn"
          @click="incrementProgress"
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
  }

}
</script>

<style lang="sass">
@import '../css/AppBtn'
</style>
