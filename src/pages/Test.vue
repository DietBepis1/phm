<template>
  <q-page class="flex">
    <div class="row justify-center test">
      <div class="col-xs-10 col-sm-9 col-lg-7 test__input">
        <h4>Query: Get all loanAppData documents from db.</h4>
        <h5>Check console for output!</h5>
        <h6>(req, res) => {query.find({some params}).then(item => response.json(item))}</h6>
        <q-btn
          color="green"
          @click="queryDb"
        >
          Make query
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Test',
  methods: {
    async queryDb () {
      await axios.get('/api/loanappdata')
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.error(err))
    }
  }

}
</script>

<style lang="sass" scoped>
.test
  background: $bright
  width: 100vw

.test__input
  background: $bright
  color: $dark
  text-align: center

.test__output
  background: $dark
  color: $bright
  width: 50vw
</style>
