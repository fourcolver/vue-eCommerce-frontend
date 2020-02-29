<template>
  <div>
    <section class="addtocart_count">
      <div class="full-box">
        <div class="container">
          <div class="title4">
            <h2 class="title-inner4">{{title}}</h2>
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="theme-card center-align">
                <div class="offer-slider">
                  <div class="sec-1">
                    <div
                      class="product-box2"
                      v-for="(product,index) in products.slice(0, 2)"
                      :key="index"
                    >
                      <div class="media">
                       <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img
                            :id="product.id"
                            :src="getImgUrl(product.vImage ? product.vImage : product.images[0].src)"
                            class="img-fluid bg-img"
                            :alt="product.title"
                          />
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
        <h6>{{ product.title }}</h6>
      </nuxt-link>
                          <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          <ul class="color-variant">
                            <li v-for="(variant,index) in Color(product.variants)" :key="index">
                              <a
                                :class="[variant]"
                                v-bind:style="{ 'background-color' : variant}"
                                @click="productColorchange(variant, product)"
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 center-slider">
              <div>
                <div class="offer-slider">
                  <div>
                    <div
                      class="product-box product-wrap"
                      v-for="(product,index) in products.slice(2, 3)"
                      :key="index"
                    >
                    <productBox6
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
            </div>
            <div class="col-md-4">
              <div class="theme-card center-align">
                <div class="offer-slider">
                  <div class="sec-1">
                    <div
                      class="product-box2"
                      v-for="(product,index) in products.slice(3, 5)"
                      :key="index"
                    >
                      <div class="media">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img
                            :src="getImgUrl(product.vImage ? product.vImage : product.images[0].src)"
                            :id="product.id"
                            class="img-fluid bg-img"
                            alt="product.title"
                          />
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
        <h6>{{ product.title }}</h6>
      </nuxt-link>
                          <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          <ul class="color-variant">
                            <li v-for="(variant,index) in Color(product.variants)" :key="index">
                              <a
                                v-on:click="productColorchange(variant, product)"
                                :class="[variant]"
                                v-bind:style="{ 'background-color' : variant}"
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
</template>

<script>
import { mapGetters } from 'vuex'
import productBox6 from '../../../../components/product-box/product-box6'
export default {
  props: ['products'],
  components: {
    productBox6
  },
  data() {
    return {
      title: 'Eat Fresh vegetables and fruits',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true
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
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    productColorchange(color, product, index) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.productslist[index].vImage = img.src
            }
          })
        }
      })
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
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
    }
  }
}
</script>
