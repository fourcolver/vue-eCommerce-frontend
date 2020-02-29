<template>
  <div>
    <Header />
    <Breadcrumbs title="collection" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-t-space portfolio-section portfolio-padding metro-section port-col">
            <no-ssr>
                      <div
                        v-masonry
                        transition-duration="3s"
                        item-selector=".item"
                        class="masonry-container isotopeContainer row"
                      >
                        <div
                          v-masonry-tile
                          class="col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector item"
                          :key="index"
                          v-for="(product, index) in products"
                        >
                          <div class="product-box">
                            <div class="img-wrapper">
                              <div class="front">
                                <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                                  <img
                                    :src="getImgUrl(product.images[0].src)"
                                    :id="product.id"
                                    class="img-fluid bg-img"
                                    :alt="product.title"
                                    :key="index"
                                  />
                                </nuxt-link>
                              </div>
                              <div class="cart-info cart-wrap">
                                <button
                                  data-toggle="modal"
                                  data-target="#addtocart"
                                  title="Add to cart"
                                  @click="addToCart(product)"
                                  v-b-modal.modal-cart
                                  variant="primary"
                                >
                                  <i class="ti-shopping-cart"></i>
                                </button>
                                <nuxt-link :to="{ path: '/page/account/wishlist'}">
                                  <i
                                    class="ti-heart"
                                    aria-hidden="true"
                                    @click="addToWishlist(product)"
                                  ></i>
                                </nuxt-link>
                                <a
                                  href="javascript:void(0)"
                                  title="Quick View"
                                  @click="showQuickview(product)"
                                  v-b-modal.modal-lg
                                  variant="primary"
                                >
                                  <i class="ti-search" aria-hidden="true"></i>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Comapre"
                                  @click="showCoampre(product)"
                                  v-b-modal.modal-compare
                                  variant="primary"
                                >
                                  <i class="ti-reload" aria-hidden="true"></i>
                                </a>
                              </div>
                            </div>
                            <div class="product-detail">
                              <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                                <h6>{{product.title}}</h6>
                              </nuxt-link>
                              <h4>{{ product.price * currency.curr | currency(currency.symbol) }}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </no-ssr>
          </div>
        </div>
      </div>
    </div>
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
    <Footer />
  </div>
</template>
<script>
import NoSSR from 'vue-no-ssr'
import { mapState, mapGetters } from 'vuex'
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import quickviewModel from '../../components/widgets/quickview'
import compareModel from '../../components/widgets/compare-popup'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    quickviewModel,
    compareModel,
    'no-ssr': NoSSR
  },
  data() {
    return {
      products: [],
      cartval: false,
      showquickviewmodel: false,
      showcomparemodal: false,
      quickviewproduct: {},
      comapreproduct: {}
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  mounted() {
    this.productsArray()
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'metro') {
          this.products.push(item)
        }
      })
    },
    showQuickview(productData) {
      this.showquickviewmodel = true
      this.quickviewproduct = productData
    },
    showCoampre(productData) {
      this.showcomparemodal = true
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = false
    },
    addToWishlist: function (product) {
      this.$store.dispatch('products/addToWishlist', product)
    },
    addToCart: function (product) {
      this.$store.dispatch('cart/addToCart', product)
    }
  }
}
</script>
