<template>
  <q-page class="flex">
    <!--Parallax scrolling website! Three different images will give the impression of motion
    as a user scrolls down the page.-->
    <div class="row flex-center landing-img1">
      <div class="col-xs-10 col-sm-9 col-lg-7 landing__content">
        <div class="landing__title">
          GOLD MAY GLITTER, BUT PLATINUM IS PRETTIER
        </div>
        <div class="landing__subtitle">
          Financing your dream home is just one click away.
        </div>
        <div class="row justify-center landing__btn">
          <q-btn
            glossy
            color="accent"
            to='/apply'
            class="landing__btn-purch"
          >
            Purchase
          </q-btn>
          <q-btn
            glossy
            color="accent"
            class="landing__btn-refi"
          >
            Refinance
          </q-btn>
        </div>
      </div>
    </div>

    <section class="row justify-center section-dark">
      <div class="col-xs-10 col-sm-9 col-lg-7">
        <div class="row justify-center section-dark__title">
          Innovative Mortgages, Working for You
        </div>
        <div class="row justify-center section-dark__content">
          <p>
            Platinum Home Mortgage is at the forefront of lending; whether you
            wish to purchase a home, multi-family building, condominium, or
            townhome, we have you covered. We offer a vast array of financing options,
            including down payment assistance, renovation and construction loans, jumbo
            loans, refinancing, and much more. Further, because Platinum Home Mortgage is a direct
            lender, we can tailor a loan to fit your exact needs.
          </p>
        </div>
        <div class="row justify-evenly section-dark__card-container">
          <FinanceCard
            v-for="(item, index) in financeData"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </section>

    <div class="row flex-center landing-img2" />

    <section class="row justify-center section-dark">
      <div class="col-xs-10 col-sm-9 col-lg-7">
        <div class="row justify-center items-center">
          <div class="col-lg-6 section-dark__test-title">
            Winning America's Heart, One Loan at a Time.
          </div>
          <div class="col-lg-6 section-dark__testimonial-container">
            <Testimonial
              v-for="(item, index) in testimonials"
              :key="index"
              :data="item"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="row justify-center items-center landing-img3" />

    <div class="row justify-center section-dark">
      <q-btn
        v-for="(item,index) in socialIcons"
        :key="index"
        ripple
        target="_blank"
        :style="`background: ${item.color}`"
        @click="openLink(item.url)"
        :icon="item.icon"
        class="sharing-icons"
      />
    </div>

    <section class="row justify-center section-dark">
      <div class="col-xs-10 col-sm-9 col-lg-7">
        <div class="row justify-center items-center">
          <div class="section-dark__footer-info">
            &copy; 2020 PHMC
            <br>
            <em>In New York: dba PHMC Mortgage</em>
            <br>
            PHMC is an <strong>equal housing lender</strong>.
            <br>
            NMLS ID #13589. For licensing information, go to:
            www.nmlsconsumeraccess.org
            <br>
            All loans subject to credit approval and certain restrictions may
            apply. Information subject to change without notice.
            <br>
            HomeStyle® is a registered trademark of Fannie Mae.
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import FinanceCard from '../components/FinanceCard'
import Testimonial from '../components/Testimonial'
import { financeData } from '../data/financeCardData.js'
import { testimonials } from '../data/testimonials.js'
import { socialIcons } from '../data/socialMedia.js'

export default {
  name: 'PageIndex',
  components: {
    FinanceCard,
    Testimonial
  },
  methods: {
    // Opens link to external url for social media icons
    openLink (url) {
      window.open(url)
    }
  },
  computed: {
    financeData () {
      return financeData
    },
    testimonials () {
      return testimonials
    },
    socialIcons () {
      return socialIcons
    }
  }

}
</script>

<style lang="sass" scoped>
@import '../css/Index'
</style>
