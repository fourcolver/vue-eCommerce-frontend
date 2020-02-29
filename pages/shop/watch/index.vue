<template>
  <div>
    <Header />
    <Slider />
    <LogoSlider />
    <TimerBanner />
    <Category />
    <CategoryTab :products="products" :category="category" />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <CollectionBanner />
    <TopProducts :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Blog />
    <Services />
    <Instagram />
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartBottomModel :openCart="showcartmodal" @closeCart="closeCart" />
    <newsletterModel />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header4'
import Footer from '../../../components/footer/footer4'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartBottomModel from '../../../components/cart-model/cart-bottom-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import LogoSlider from './components/logo_slider'
import TimerBanner from './components/timer_banner'
import Category from './components/category'
import CategoryTab from './components/categorytabs'
import ProductSlider from './components/product_slider'
import CollectionBanner from './components/collectionbanners'
import TopProducts from './components/top_products'
import Blog from './components/blog'
import Services from './components/services'
import Instagram from './components/instagram'
export default {
  components: {
    Header,
    Slider,
    LogoSlider,
    TimerBanner,
    Category,
    CategoryTab,
    ProductSlider,
    CollectionBanner,
    TopProducts,
    Blog,
    Services,
    Instagram,
    Footer,
    quickviewModel,
    compareModel,
    cartBottomModel,
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
        if (item.type === 'watch') {
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
