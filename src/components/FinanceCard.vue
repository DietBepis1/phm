<template>
  <q-card class="card">
    <img
      :src="require(`../assets/images/${data.imageUrl}`)"
      class="card__img"
    />

    <q-card-section class="row justify-center card__title">
      <div class="row justify-center">
        <div>{{ data.title }}</div>
      </div>
    </q-card-section>

    <q-card-section class="row card__content">
      <div>
        {{ data.content }}
      </div>
    </q-card-section>

    <q-card-section class="row justify-center card__bottom">
      <q-btn
        glossy
        ripple
        color="primary"
        class="card__btn"
      >
        <a
          href="#/apply"
          class="card__btn-a"
        >Explore</a>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'FinanceCard',
  props: {
    data: Object
  }
}
</script>

<style lang="sass" scoped>
@import '../css/FinanceCard'
</style>
