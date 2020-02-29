<template>
  <div>
    <div
    class="full-banner gym-parallax parallax p-0"
    v-bind:style="{ 'background-image': `url(${imagepath})` }"
    >
      <div class="section-t-space section-b-space gym-product">
        <div class="container">
          <div class="title1 title-gradient">
            <h4>{{subtitle}}</h4>
            <h2 class="title-inner1">{{title}}</h2>
          </div>
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="product-para">
                <p
                  class="text-center"
                >{{description}}</p>
              </div>
            </div>
          </div>
          <div class="row part-cls">
            <div
            class="col-xl-3 col-sm-6"
            v-for="(product,index) in getCategoryProduct(category[1])"
            :key="index"
          >
            <div class="product-box">
              <productBox9
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
import productBox9 from '../../../../components/product-box/product-box9'
export default {
  props: ['products', 'category'],
  components: {
    productBox9
  },
  data() {
    return {
      imagepath: require('@/assets/images/parallax/25.jpg'),
      title: 'top collection',
      subtitle: 'special offer',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  methods: {
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
