<template>
<div>
    <Header />
    <Slider />
    <CategoryTab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Category1 />
    <Banner />
    <ProductCategorySlider :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Services />
    <Category2 />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Blog />
    <Instagram />
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartLeftModel :openCart="showcartmodal" @closeCart="closeCart" />
    <newsletterModel />
</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header3'
import Footer from '../../../components/footer/footer3'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartLeftModel from '../../../components/cart-model/cart-left-model'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import CategoryTab from './components/categorytab'
import Category1 from './components/category'
import Banner from './components/banner'
import ProductCategorySlider from './components/productcategoryslider'
import Services from './components/services'
import Category2 from './components/category2'
import ProductSlider from './components/productslider'
import Blog from './components/blog'
import Instagram from './components/instagram'
export default {
  components: {
    Header,
    Slider,
    CategoryTab,
    Category1,
    Banner,
    ProductCategorySlider,
    Services,
    Category2,
    ProductSlider,
    Blog,
    Instagram,
    Footer,
    quickviewModel,
    compareModel,
    cartLeftModel,
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
        if (item.type === 'bags') {
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
