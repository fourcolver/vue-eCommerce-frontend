<template>
  <div>
    <Header />
    <Slider />
    <Collectionbanner />
    <ProductList :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <TopCollection :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Blog />
    <Instagram />
    <LogoSlider />
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartTopModel :openCart="showcartmodal" @closeCart="closeCart" />
    <newsletterModel />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header7'
import Footer from '../../../components/footer/footer6'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartTopModel from '../../../components/cart-model/cart-top-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import Collectionbanner from './components/collection-banner'
import ProductList from './components/product-list'
import TopCollection from './components/top-collection'
import Blog from './components/blog'
import Instagram from './components/instagram'
import LogoSlider from './components/logo-slider'
export default {
  components: {
    Header,
    Slider,
    Collectionbanner,
    ProductList,
    TopCollection,
    Blog,
    Instagram,
    LogoSlider,
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
        if (item.type === 'gym') {
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
