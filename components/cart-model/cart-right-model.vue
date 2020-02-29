<template>
  <div>
    <div id="cart_side" class="add_to_cart right" :class="{ openSide:openCart }">
      <a href="javascript:void(0)" class="overlay" @click="closeCart(openCart)"></a>
      <div class="cart-inner">
        <div class="cart_top">
          <h3>my cart</h3>
          <div class="close-cart">
            <a href="javascript:void(0)" @click="closeCart(openCart)">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="cart_media" v-if="cart.length">
          <ul class="cart_product">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                  <img alt class="mr-3" :src='getImgUrl(item.images[0].src)'>
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                    <h4>{{item.title}}</h4>
                  </nuxt-link>
                  <h4>
                    <span>{{item.quantity}} x {{ item.price * curr.curr | currency(curr.symbol) }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="javascript:void(0)" @click='removeCartItem(item)'>
                  <i class="ti-trash" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          </ul>
          <ul class="cart_total">
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{ cartTotal * curr.curr | currency(curr.symbol) }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'btn btn-solid btn-xs view-cart'">
                  view cart
                </nuxt-link>
                <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'btn btn-solid btn-xs checkout'">
                  checkout
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 empty-cart-cls text-left" v-if="!cart.length">
              <h4 class="mt-3">
                <strong>Your Cart is Empty</strong>
              </h4>
              <nuxt-link :to="{ path: '/'}" class="btn btn-solid">continue shopping</nuxt-link>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: ['openCart'],
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    // Get Image Url
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    closeCart(val) {
      val = false
      this.$emit('closeCart', val)
    },
    removeCartItem: function (product) {
      this.$store.dispatch('cart/removeCartItem', product)
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { curr: currency, symbol: currSymbol }
      this.$store.dispatch('products/changeCurrency', this.currencyChange)
    }
  }
}
</script>
