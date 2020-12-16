 /* eslint-disable */
<template>
  <q-page class="flex q-page">
    <!--div will conditionally render based on what step of preliminary
    application process customer is on-->

    <!-- Step 0 of the app questionnaire -->
    <div class="row flex-center app-questionnaire">
      <div
        v-if="currentStep == 0.0"
        class="col-xs-10 col-sm-9 col-md-12 app-q__container"
        :duration="2000"
      >
        <Step0
          :step0="step0"
          :currentStep="currentStep"
          @incrementProgress="incrementProgress($event)"
        />
      </div>

      <!-- Step 1 of the app questionnaire -->

      <div
        v-if="currentStep == 0.25"
        class="col-xs-10 col-sm-9 col-md-12 app-q__container"
      >

        <Step1
          :step1="step1"
          @incrementProgress="incrementProgress($event)"
        />

      </div>

      <!-- Step 2 of the app questionnaire -->
      <div
        v-if="currentStep == 0.5"
        class="col-xs-10 col-sm-9 col-md-12 app-q__container"
      >
        <Step2
          :step2="step2"
          @incrementProgress="incrementProgress($event)"
        />
      </div>

      <!-- Step 3 of the app questionnaire -->
      <div
        v-if="currentStep == 0.75"
        class="col-xs-10 col-sm-6 col-md-4 app-q__container"
      >
        <Step3 @reconcileLoanAppData="reconcileLoanAppData($event)" />
      </div>

      <!--Progress bar-->
      <div class="absolute-bottom">

        <q-linear-progress
          size="5vh"
          :value="currentStep"
          color="primary"
          class="q-mt-lg"
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="dark"
              :label="`${currentStep*100}% completed`"
              class="app-q__progress-bar"
            />
          </div>
        </q-linear-progress>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import Step0 from '../components/Step0'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import { step0 } from '../data/step0.js'
import { step1 } from '../data/step1.js'
import { step2 } from '../data/step2.js'

export default {
  name: 'LoanApp',
  components: { Step0, Step1, Step2, Step3 },
  data () {
    return {
      // Current application step for progress tracker and rendering.
      currentStep: 0.0,
      // Object for capturing data as a customer goes through application questionnaire.
      loanAppData: {
        firstName: null,
        lastName: null,
        typeOfLoan: null,
        incomeRange: null,
        ssn: null,
        creditScore: null,
        leadTime: null,
        phoneNum: null,
        email: null
      }
    }
  },
  methods: {
    incrementProgress (userSelection) {
      // changes loanAppData object with current step's button value and
      // increments the progress counter

      // See userSelection if enabled
      // console.log(userSelection)

      if (this.currentStep === 0) {
        this.loanAppData.typeOfLoan = userSelection
      }
      else if (this.currentStep === 0.25) {
        this.loanAppData.incomeRange = userSelection
      }
      else if (this.currentStep === 0.5) {
        this.loanAppData.leadTime = userSelection
      }

      // this.currentStep += 0.25
      // This is purely for style. I feel like it makes the prompts feel nicer.
      setTimeout(
        () => {
          this.currentStep += 0.25
        },
        0
      )
    },
    reconcileLoanAppData (data) {
      // Set remaining parameters
      this.loanAppData.firstName = data.firstName
      this.loanAppData.lastName = data.lastName
      this.loanAppData.ssn = data.ssn
      this.loanAppData.creditScore = data.creditScore
      this.loanAppData.phoneNum = data.phoneNum
      this.loanAppData.email = data.email

      axios
        .post('/api/loanappdata', this.loanAppData)
        .then(res => console.log('Okay!'))
        .catch(err => console.error(err))

      this.currentStep += 0.25

      // Log the loanAppData object for view
      // console.log(this.loanAppData)

      // Simulate Processing
      setTimeout(
        () => this.$router.push('/completion'),
        250
      )
    }
  },
  computed: {
    step0 () {
      return step0
    },
    step1 () {
      return step1
    },
    step2 () {
      return step2
    }
  }
}
</script>

<style lang='sass'>
@import '../css/LoanApp'
</style>
