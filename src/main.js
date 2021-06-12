import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueSplide from '@splidejs/vue-splide';

//custom css
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/color.css'
import './assets/css/transitions.css'
import './assets/css/icomoon.css'
import './assets/css/font-awesome.min.css'
import './assets/css/fontawesome-all.css'
// import './assets/css/owl.carousel.css'
import './assets/css/responsive.css'


Vue.config.productionTip = false

Vue.use(Vuetify,VueSplide)

new Vue({
  router,
  vuetify : new Vuetify(),
  VueSplide,
  render: h => h(App)
}).$mount('#app')
