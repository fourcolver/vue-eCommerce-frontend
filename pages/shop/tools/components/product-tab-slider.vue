<template>
  <div>
    <section class="tools_product">
      <div class="container">
        <div class="row multiple-slider">
          <div class="col-xl-3 col-lg-4 col-md-12">
            <div class="theme-card">
            <h5 class="title-border">{{category[1]}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[0]).splice(0, 4)"
                        :key="index"
                      >
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                          {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
                          <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" v-if="getCategoryProduct(category[0]).length >= 5">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[0]).splice(4,4)"
                        :key="index"
                      >
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                          {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
                          <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="col-xl-9 col-lg-8 col-md-12 tools-grey">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <b-tab
                  :title="collection"
                  v-for="(collection,index) in category"
                  :key="index"
                >
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection).splice(0,4)"
                      :key="index"
                    >
                    <productBox7
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
            <div class="banner-tools">
              <img :src="imagepath" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import productBox7 from '../../../../components/product-box/product-box7'
export default {
  props: ['products', 'category'],
  components: {
    productBox7
  },
  data() {
    return {
      imagepath: require('@/assets/images/tools/banner.jpg'),
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100
    }
  }
}
</script>
