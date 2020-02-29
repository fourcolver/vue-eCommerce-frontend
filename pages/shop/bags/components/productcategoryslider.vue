<template>
<div>
  <!-- product slider-->
  <section class="ratio_square">
    <div class="container">
      <div class="row partition3 partition_3">
        <div class="col-lg-4">
          <div class="theme-card card-border">
            <h5 class="title-border">{{category[0]}}</h5>
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
        <div class="col-lg-4 center-slider border-0">
          <div>
            <div class="title2">
              <h4>on sale</h4>
              <h2 class="title-inner2">{{category[1]}}</h2>
            </div>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper1="swiperOption1">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(product,index) in getCategoryProduct(category[1]).splice(0,4)"
                    :key="index"
                  >
                    <div>
                      <div class="product-box product-wrap">
                    <productBox3
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
                  </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev">
                </div>
                <div class="swiper-button-next" slot="button-next">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="theme-card card-border">
            <h5 class="title-border">{{category[2]}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[2]).splice(0,4)"
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
                  <div class="swiper-slide" v-if="getCategoryProduct(category[2]).length >= 5">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[2]).splice(4,5)"
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
  <!-- product slider end-->
</template>
<script>
import { mapGetters } from 'vuex'
import productBox3 from '../../../../components/product-box/product-box3'
export default {
  props: ['products', 'category'],
  components: {
    productBox3
  },
  data() {
    return {
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption1: {
        loop: false,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
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
    showCartModal(item) {
      this.showCart = item
      this.$emit('openCart', this.showCart)
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
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100
    }
  }
}
</script>
