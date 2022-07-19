import Vue from 'vue'
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
// import VModal from 'vue-js-modal'
import axios from 'axios'
import store from '@/store/store'
import VueFlashMessage from '@smartweb/vue-flash-message';
import FlashMessage from '@/components/flashMessage';
import App from '../app.vue'
import Hospital from '@/pages/hospital/index'

Vue.use(Vuetify)
// Vue.use(VModal)
Vue.use(VueFlashMessage);

// Material Design Icons - JS SVG (@mdi/js) を使うのでmdiSvgを指定
const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
})

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers['X-CSRF-TOKEN'] = document
    .getElementsByName('csrf-token')[0]
    .getAttribute('content');
  const flashMessage = document.getElementById('flashMessage');
  new Vue({
    el: flashMessage,
    render: h => h(FlashMessage)
  })
  // const el = document.getElementById('billingIndex');
  // new Vue({
  //   el: el,
  //   vuetify,
  //   store,
  //   render: h => h(Billing)
  // })
  const el2 = document.getElementById('hospitalIndex');
  new Vue({
    el: el2,
    vuetify,
    store,
    render: h => h(Hospital)
  })
})
