<template>
  <div>
    <Header />
    <Slider />
    <LogoSlider />
    <Collectionbanner />
    <TopCollection :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Banner />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Blog />
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartRightModel :openCart="showcartmodal" @closeCart="closeCart" />
    <newsletterModel />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header8'
import Footer from '../../../components/footer/footer7'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartRightModel from '../../../components/cart-model/cart-right-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import LogoSlider from './components/logo-slider'
import Collectionbanner from './components/collection-banner'
import TopCollection from './components/top-collection'
import Banner from './components/parallax-banner'
import ProductSlider from './components/product-slider'
import Blog from './components/blog'
export default {
  components: {
    Header,
    Slider,
    LogoSlider,
    Collectionbanner,
    TopCollection,
    Banner,
    ProductSlider,
    Blog,
    Footer,
    quickviewModel,
    compareModel,
    cartRightModel,
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
      comapreproduct: {}
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
        if (item.type === 'pets') {
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
