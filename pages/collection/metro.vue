<template>
  <div>
    <Header />
    <Breadcrumbs title="collection" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="collection-content col">
              <div class="page-main-content">
                <div class="top-banner-wrapper">
                  <a href="#">
                    <img
                      :src='"@/assets/images/mega-menu/2.jpg"'
                      class="img-fluid"
                      alt
                    />
                  </a>
                  <div class="top-banner-content small-section pb-0">
                    <h4>fashion</h4>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </div>
                <div class="collection-product-wrapper">
                  <div
                    class="section-t-space portfolio-section portfolio-padding metro-section port-col"
                  >
                    <no-ssr>
                      <div
                        v-masonry
                        transition-duration="3s"
                        item-selector=".item"
                        class="masonry-container isotopeContainer row"
                      >
                        <div
                          v-masonry-tile
                          class="col-xl-3 col-sm-6 col-grid-box isotopeSelector item"
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
          </div>
        </div>
      </div>
    </section>
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
