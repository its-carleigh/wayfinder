<template>
  <v-app>
    <landing-page/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  },
  data() {
    return {

    }
  },
  mounted() {
    this.$store.commit('setInitialLoad', true)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px;
}
</style>
