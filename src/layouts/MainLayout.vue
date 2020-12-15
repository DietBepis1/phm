<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="header"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="bright"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="toolbar-title">
          <q-img
            src="../assets/images/logo-phmc.png"
            class="brand-img"
          />
        </q-toolbar-title>

        <div class="nav__phone">
          1-800-9LENDER
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      class="nav__drawer"
    >
      <q-list>
        <q-item-label
          header
          class="nav__label"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'You\'ll always have a home here.',
    icon: 'house',
    link: '/'
  },
  {
    title: 'Apply',
    caption: 'Explore financing.',
    icon: 'fas fa-pen-fancy',
    link: '/#/apply'
  },
  {
    title: 'Log in',
    caption: 'Client portal.',
    icon: 'fas fa-user-friends',
    link: ''
  },
  {
    title: 'Questions?',
    caption: 'Get help from our FAQs or client support.',
    icon: 'fas fa-question',
    link: ''
  },
  {
    title: 'Love us?',
    caption: 'Let us know with a review.',
    icon: 'favorite',
    link: ''
  },
  {
    title: 'Employees',
    caption: 'Log in here.',
    icon: 'fas fa-user-tie',
    link: '#/test'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  background: $dark
  opacity: 1

.toolbar-title
  color: $bright

.brand-img
  background-size: contain
  max-width: 200px

.nav__phone
  font-size: 1.05rem

.nav__label
  color: $accent

.nav__drawer
  background: $bright
</style>
