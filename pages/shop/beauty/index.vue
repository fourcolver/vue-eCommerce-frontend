<template>
<div>
    <Header />
    <Slider />
    <About />
    <ProductSlider :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <VideoTutorial />
    <TopProductslider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Blog />
    <Instagram />
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartRightModel :openCart="showcartmodal" @closeCart="closeCart" />
    <newsletterModel />
</div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartRightModel from '../../../components/cart-model/cart-right-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import About from './components/about'
import ProductSlider from './components/product-slider'
import VideoTutorial from './components/video-tutorial'
import TopProductslider from './components/top-product-slider'
import Blog from './components/blog'
import Instagram from './components/instagram'
export default {
  components: {
    Header,
    Slider,
    About,
    ProductSlider,
    VideoTutorial,
    TopProductslider,
    Blog,
    Instagram,
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
        if (item.type === 'beauty') {
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
