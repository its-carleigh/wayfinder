<template>
    <div>
      <div>
          <div style="font-size: 20px;">The "Something Fun & Relevant" Site! Welcome: 
            <span style="font-weight: bold; font-size: 20px" :style="[cssVars]" class="themed">
              {{$store.state.userName}}
            </span>
          </div>
          <div class="d-flex flex-row" style="width: 100%;justify-content: space-between">
              <div>
                <v-card flat outlined class="card-bordered" :style="[cssVars]">
                  <span @click="goTo('API')">Click Here to Go to the API Page!</span>
                </v-card>
              </div>
              <div>
                <v-card flat outlined class="card-bordered" :style="[cssVars]">
                  <span @click="goTo('ChangeThemeColor')">Click Here to Change Theme Color</span>
                </v-card>
              </div>
              <div>
                <v-card flat outlined class="card-bordered" :style="[cssVars]">
                  <span @click="goTo('Sponsors')">Click Here to See Who Sponsored This Site</span>
                </v-card>
              </div>
          </div>
      </div>
      <name-modal v-if="$store.state.initialLoad" />
    </div>
</template>

<script>
import NameModal from './NameModal'
import {mapState} from 'vuex'
export default {
  name: 'LandingPage',
  components: {
    NameModal,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['username', 'initial', 'theme']),
    cssVars() {
      return {
        '--color': this.$store.state.themeColor,
      }
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route)
    }
  },
}
</script>


<style lang="scss" scoped>
  .card-bordered {
    margin: 50px;
    padding: 10px;
    border: 1px solid var(--color) !important;
  }
  .themed {
    color: var(--color)
  }
</style>
