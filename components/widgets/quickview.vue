<template>
  <div>
    <b-modal
      id="modal-lg"
      size="lg"
      centered
      title="Quickview"
      :hide-footer="true"
      v-if="openModal"
    >
      <div class="row quickview-modal">
        <div class="col-lg-6 col-xs-12">
          <div class="quick-view-img">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(imag,index) in productData.images" :key="index">
                  <img
                    :src="getImgUrl(imag.src)"
                    :id="imag.image_id"
                    class="img-fluid bg-img"
                    alt="imag.alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 rtl-text">
          <div class="product-right">
            <h2>{{productData.title}}</h2>
            <h3 v-if="productData.sale">
              {{ discountedPrice(productData) * curr.curr | currency(curr.symbol) }}
        <del>{{ productData.price * curr.curr | currency(curr.symbol) }}</del>
            </h3>
            <h3 v-else>{{ productData.price * curr.curr | currency(curr.symbol) }}</h3>
            <ul class="color-variant" v-if="productData.variants[0].color">
              <li v-for="(variant,variantIndex) in Color(productData.variants)" :key="variantIndex">
                <a
                  :class="[variant]"
                  v-bind:style="{ 'background-color' : variant}"
                ></a>
              </li>
            </ul>
            <div class="product-description border-product" v-if="productData.variants[0].size">
              <h6 class="product-title">select size</h6>
              <div class="size-box">
                <ul>
                  <li v-for="(variant,variantIndex) in Size(productData.variants)" :key="variantIndex">
                    <a href="javascript:void(0)">{{variant}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-product">
              <h6 class="product-title">product details</h6>
              <p>{{productData.description.substring(0,250)+"...."}}</p>
            </div>
            <div class="product-buttons">
              <a href="javascript:void(0)" @click="addToCart(product)" class="btn btn-solid">add to cart</a>
              <nuxt-link :to="{ path: '/product/sidebar/'+productData.id}" class="btn btn-solid">view detail</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['openModal', 'productData'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
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
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    // Display Unique Size
    Size(variants) {
      const uniqSize = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqSize.indexOf(variants[i].size) === -1) {
          uniqSize.push(variants[i].size)
        }
      }
      return uniqSize
    },
    // add to cart
    addToCart: function (product) {
      this.$store.dispatch('cart/addToCart', product)
    },
    // Get Image Url
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    // Display Sale Price Discount
    discountedPrice(product) {
      return product.price - (product.price * product.discount / 100)
    }
  }
}
</script>
