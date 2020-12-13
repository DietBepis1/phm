<template>
  <q-page class="flex flex-center app-ques">
    <!--div will conditionally render based on what step of preliminary
    application process customer is on-->
    <div
      v-if="currentStep == 0.0"
      :class="`apply__step0${currentStep}`"
    >
      <div class="app-ques__title">
        What type of purchase do you wish to make?
      </div>
      <div class="flex">
        <AppBtn
          v-for="(item, index) in step0"
          :key="index"
          :data="item"
        />
      </div>
    </div>
    <q-linear-progress
      size="50px"
      :value="currentStep"
      color="primary"
      class="progress-bar"
    >
      <div class="absolute-full flex flex-center">
        <q-badge
          color="white"
          text-color="accent"
          :label="`${currentStep*100}% Complete`"
        />
      </div>
    </q-linear-progress>
  </q-page>
</template>

<script>
import AppBtn from '../components/AppBtn'

export default {
  name: 'LoanApp',
  components: { AppBtn },
  data () {
    return {
      currentStep: 0.0,
      step0: [
        {
          text: 'Single-family Home',
          icon: 'home.svg'
        },
        {
          text: 'Multi-family Home',
          icon: 'apartment.svg'
        },
        {
          text: 'Townhouse or Condominium',
          icon: 'condo.svg'
        },
        {
          text: 'Construction or Renovation',
          icon: 'construction.svg'
        }
      ]
    }
  },
  methods: {
    incrementProgress () {
      this.currentStep += 0.1
    }
  }
}
</script>

<style lang='sass'>
@import '../css/LoanApp'
</style>
