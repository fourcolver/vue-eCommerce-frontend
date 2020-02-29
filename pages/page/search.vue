<template>
  <div>
    <Header />
    <Breadcrumbs title="search" />
    <!--section start-->
    <section class="authentication-page section-b-space">
      <div class="container">
        <section class="search-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <form class="form-header">
                  <div class="input-group">
                    <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                            v-on:keyup="searchProduct"
                            placeholder="Search Products....."
                          >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!-- section end -->
    <section class="section-b-space ratio_asos pt-0" v-if="searchItems.length">
      <div class="container">
        <div class="row search-product">
          <div
            class="col-xl-2 col-md-4 col-sm-6"
            v-for="(product, index) in searchItems"
            :key="index"
          >
            <div class="product-box">
              {{product.title}}
                              <productBox1
                                :product="product"
                                :index="index"
                              />
                            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      searchString: ''
    }
  },
  computed: {
    ...mapState({
      searchItems: state => state.products.searchProduct
    })
  },
  methods: {
    searchProduct() {
      this.$store.dispatch('products/searchProduct', this.searchString)
    }
  }
}
</script>
