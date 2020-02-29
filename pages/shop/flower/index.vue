<template>
  <div>
    <Header />
    <Slider />
    <CollectionBanner />
    <TopProducts :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Categorytab :products="products" :category="category" />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
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
import Header from '../../../components/header/header2'
import Footer from '../../../components/footer/footer1'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartBottomModel from '../../../components/cart-model/cart-bottom-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import CollectionBanner from './components/collection_banner'
import TopProducts from './components/top_products'
import Categorytab from './components/category_tab'
import ProductSlider from './components/product_slider'
import Blog from './components/blog'
import Services from './components/services'
import Instagram from './components/instagram'

export default {
  components: {
    Header,
    Slider,
    CollectionBanner,
    TopProducts,
    Categorytab,
    ProductSlider,
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
        if (item.type === 'flower') {
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
