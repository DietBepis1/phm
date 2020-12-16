<template>
  <div class="flex justify-center testimonial">
    <div class="row testimonial__container">
      <div class="col-4 justify-end img-col">
        <q-img
          :src="require(`../assets/images/${data.icon}`)"
          class="testimonial__img"
        />
      </div>
      <div class="col-8 text-col">
        <div class="testimonial__title">
          {{ data.title }}
        </div>
        <div class="testimonial__content">
          {{ data.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    data: Object
  }

}
</script>

<style lang="sass" scoped>
@import '../css/Testimonial'
</style>
