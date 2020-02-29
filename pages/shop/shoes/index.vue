<template>
<div>
  <Header />
  <Slider />
  <Category />
  <About />
  <CollectionBanner />
  <productSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
  <Category2 />
  <CollectionSlider :products="products" :category="category" />
  <Category3 />
  <CollectionTab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
  <Blog />
  <Service />
  <Instagram />
  <Brand />
  <Footer />
  <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
  <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
  <cartTopModel :openCart="showcartmodal" @closeCart="closeCart" />
  <newsletterModel />
</div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header2'
import Footer from '../../../components/footer/footer2'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartTopModel from '../../../components/cart-model/cart-top-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import Category from './components/category'
import About from './components/about'
import CollectionBanner from './components/collectionbanner'
import productSlider from './components/productSlider'
import Category2 from './components/category2'
import CollectionSlider from './components/collectionslider.vue'
import Category3 from './components/category3'
import CollectionTab from './components/collectiontab'
import Blog from './components/blog'
import Service from './components/service'
import Instagram from './components/instagram'
import Brand from './components/brand'
export default {
  components: {
    Header,
    Slider,
    Category,
    About,
    CollectionBanner,
    productSlider,
    Category2,
    CollectionSlider,
    Category3,
    CollectionTab,
    Blog,
    Service,
    Instagram,
    Brand,
    Footer,
    quickviewModel,
    compareModel,
    cartTopModel,
    newsletterModel
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    })
  },
  mounted() {
    this.productsArray()
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'shoes') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = item
    },
    showCart(item) {
      this.showcartmodal = item
    },
    closeCart(item) {
      this.showcartmodal = item
    }
  }
}
</script>
