import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Vuetify,{
    VCard,
    VImg,
    VBtn,
    VDialog,
    VApp,
    VTextField,
    VTextarea,
    VMenu,
    VIcon,
} from 'vuetify'

Vue.use(Vuetify, {
    components: {
        VCard,
        VImg,
        VBtn,
        VDialog,
        VApp,
        VTextField,
        VTextarea,
        VMenu,
        VIcon,
    }
})

const opts = {
  icons: {
    iconfont: 'fa',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
  },
}

export default new Vuetify(opts)
