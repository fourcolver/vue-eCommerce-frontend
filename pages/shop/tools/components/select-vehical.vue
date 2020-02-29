<template>
  <div>
    <section
      class="full-banner parallax small-slider tools-parallax-product"
      v-bind:style="{ 'background-image': `url(${imagepath})` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="tools-description">
              <div>
                <h3>{{title}}</h3>
                <div class="tools-form">
                  <div class="search-box">
                    <select class="form-control">
                      <option value>Select Make</option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Fiat</option>
                      <option value="4">Hyndai</option>
                      <option value="5">Skoda</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="model" class="form-control">
                      <option value>Select Model</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="engine" class="form-control">
                      <option value>Select category</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="year" class="form-control">
                      <option value>Select Year</option>
                    </select>
                  </div>
                  <div class="search-button">
                    <a href="#" class="btn btn-solid btn-find">find my part</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-12 tools-grey ratio_square">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product,index) in products"
                  :key="index"
                >
                  <div class="product-box">
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
import productBox7 from '../../../../components/product-box/product-box7'
export default {
  props: ['products'],
  components: {
    productBox7
  },
  data() {
    return {
      imagepath: require('@/assets/images/parallax/21.jpg'),
      title: 'select your vehical',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  methods: {
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
    }
  }
}
</script>
