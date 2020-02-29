<template>
  <div>
  <!-- slider tab  -->
  <section class="section-b-space ratio_square">
    <div class="container">
      <div class="title2">
        <h4>{{subtitle}}</h4>
        <h2 class="title-inner2">{{title}}</h2>
      </div>
      <div class="row">
        <div class="col">
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
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- slider tab end -->
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
import productBox3 from '../../../../components/product-box/product-box3'
export default {
  props: ['products', 'category'],
  components: {
    productBox3
  },
  data() {
    return {
      title: 'our collection',
      subtitle: 'special products',
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
    }
  }
}
</script>
