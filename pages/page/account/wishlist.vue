<template>
  <div>
    <Header />
    <Breadcrumbs title="wishlist" />
    <section class="wishlist-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="wishlist.length">
              <thead>
                <tr class="table-head">
                  <th scope="col">image</th>
                  <th scope="col">product name</th>
                  <th scope="col">price</th>
                  <th scope="col">availability</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in wishlist" :key="index">
                <tr>
                  <td>
                    <a href="#">
                      <img :src='getImgUrl(item.images[0].src)' alt="">
                    </a>
                  </td>
                  <td>
                    <a href="#">{{item.title}}</a>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <p>in stock</p>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">{{ item.price * curr.curr | currency(curr.symbol) }}</h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" class="icon mr-1">
                            <i class="ti-close" @click="removeWishlistItem(item)"></i>
                          </a>
                          <a href="#" class="cart">
                            <i class="ti-shopping-cart" @click="addToCart(item)"></i>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>{{ item.price * curr.curr | currency(curr.symbol) }}</h2>
                  </td>
                  <td>
                    <p>in stock</p>
                  </td>
                  <td>
                    <a href="javascript:void(0)" class="icon mr-3" @click="removeWishlistItem(item)">
                      <i class="ti-close"></i>
                    </a>
                    <a href="javascript:void(0)" class="cart" @click="addToCart(item)">
                      <i class="ti-shopping-cart" ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row wishlist-buttons" v-if="wishlist.length">
          <div class="col-12">
            <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'">continue shopping</nuxt-link>
          </div>
        </div>
        <div class="col-sm-12 empty-cart-cls text-center" v-if="!wishlist.length">
              <img :src='"@/assets/images/empty-wishlist.png"' class="img-fluid" alt="empty cart" />
              <h3 class="mt-3">
                <strong>Your Wishlist is Empty</strong>
              </h3>
              <div class="col-12">
                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">continue shopping</nuxt-link>
              </div>
            </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapGetters({
      wishlist: 'products/wishlistItems',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    removeWishlistItem: function (product) {
      this.$store.dispatch('products/removeWishlistItem', product)
    },
    addToCart: function (product) {
      this.$store.dispatch('cart/addToCart', product)
    }
  }
}
</script>
