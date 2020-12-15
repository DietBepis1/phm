<template>
  <q-page class="flex q-page">
    <div class='row flex-center completion-page'>
      <div class="col-xs-10 col-sm-9 col-lg-6 completion__content">
        <div class="completion__title">
          You did it!
        </div>
        <div class="completion__helper-txt">
          What's next? Make an account to check your application status, or wait
          for one of our mortgages officers to get in contact. If you have questions,
          feel free to call us or visit our help section. Thank you for choosing
          Platinum Home Mortgage!
        </div>
        <div class="row justify-center completion__btn">
          <q-btn
            glossy
            color="accent"
            class="completion__btn-sign-in"
          >
            Create Account
          </q-btn>
          <q-btn
            glossy
            color="accent"
            class="completion__btn-help"
          >
            Help Center
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../css/CompletionPage'
</style>
