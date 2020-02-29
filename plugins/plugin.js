import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import PayPal from 'vue-paypal-checkout'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.component('paypal-checkout', PayPal)
Vue.use(VueLazyLoad)

const config = {
  apiKey: 'Your API Key',
  authDomain: 'Your Auth Domain',
  databaseURL: 'Your Database URL',
  projectId: 'Your ProjectId',
  storageBucket: 'Your Storage Bucket',
  messagingSenderId: 'Your Messaging SenderId'
}
firebase.initializeApp(config)
