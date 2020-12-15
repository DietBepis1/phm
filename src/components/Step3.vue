<template>
  <transition-group
    appear
    enter-active-class="animated slideInLeft"
  >
    <div
      key="text"
      class="app-q__credit-container"
    >
      <div class="app-q__title">
        Let's do a quick credit check.
      </div>
      <div class="app-q__content">
        Don't worry! It is only a "soft-pull" and will not impact your credit
        score. A credit check helps us connect you with the right mortgage
        officer and loan options.
      </div>
      <div class="row justify-center">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <!-- q-input rules must evaluate to true to trigger error -->
          <q-input
            v-model="creditInfo.firstName"
            type="text"
            label="First Name"
            hint="First name"
            lazy-rules
            :rules="[val => val.length >= 2 || 'Please enter a valid name.']"
          />

          <q-input
            v-model="creditInfo.lastName"
            type="text"
            label="Last Name"
            hint="Last Name"
            lazy-rules
            :rules="[val => val.length >= 2 || 'Please enter a valid name.']"
          />

          <q-input
            v-model="creditInfo.phoneNum"
            mask="(###) ### - ####"
            label="Phone Number"
            hint="Enter your phone number.."
            lazy-rules
          />

          <q-input
            v-model="creditInfo.email"
            type="email"
            label="Email"
            hint="Enter your email."
            lazy-rules
            :rules="[val => isValidEmail(val) || 'Please enter a valid email address.']"
          />

          <q-input
            v-model="creditInfo.ssn"
            mask="###-##-####"
            label="Social Security Number"
            lazy-rules
          />

          <q-toggle
            v-model="accept"
            @click="accept = !accept"
            checked-icon="check"
            unchecked-icon="clear"
            label="I authorize PHMC to obtain my personal information for the purpose of issuing credit."
          />

          <div>
            <q-btn
              glossy
              :disabled="!accept"
              label="Submit"
              type="submit"
              color="primary"
              class="app-q__credit-btn"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm app-q__credit-btn"
            />
          </div>
        </q-form>
      </div>
    </div>
  </transition-group>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Step3',
  data () {
    return {
      accept: false,
      isHidden: true,
      creditInfo: {
        firstName: null,
        lastName: null,
        ssn: null,
        creditScore: null,
        phoneNum: null,
        email: null
      }
    }
  },
  methods: {
    // Takes Step3's creditInfo object and emits a request to reconcile
    // loanAppData and commit to db. Also clears the prompt.
    async onSubmit () {
      // Get a "credit score" from a random number generating api at random.org
      const response = await axios.get('https://www.random.org/integers/?num=1&min=300&max=850&col=1&base=10&format=plain&rnd=new')

      this.creditInfo.creditScore = response.data
      this.creditInfo.ssn = this.obfuscateSsn(this.creditInfo.ssn)
      this.$emit('reconcileLoanAppData', this.creditInfo)
      this.onReset()
    },
    // Resets form fields
    onReset () {
      this.creditInfo.firstName = ''
      this.creditInfo.lastName = ''
      this.creditInfo.ssn = ''
      this.creditInfo.phoneNum = ''
      this.creditInfo.email = ''
    },
    // Mutate ssn before storage for security and privacy
    obfuscateSsn (ssn) {
      let hash = 0
      let chr = 0

      for (let i = 0; i < ssn.length; i++) {
        chr = ssn.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // convert to 32 bit int

        return hash
      }
    },
    isValidEmail (val) {
      const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailRegex.test(val)
    }
  }

}
</script>

<style lang="sass" scoped>
@import "../css/LoanApp"
</style>
