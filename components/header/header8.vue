<template>
  <div>
    <header class="header-2 header-6">
      <div class="mobile-fix-option"></div>
      <TopBar />

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu border-section border-top-0">
              <div class="brand-logo layout2-logo">
                <nuxt-link :to="{ path: '/shop/fashion'}">
                  <img
                    :src='"@/assets/images/icon/logo/14.png"'
                    class="img-fluid"
                    alt="logo"
                  />
                </nuxt-link>
              </div>
              <div class="pets-search">
                <form class="form_search" role="form">
                  <input
                            type="search"
                            class="nav-search nav-search-field"
                            v-model="searchString"
                            @keyup="searchProduct"
                            placeholder="Find the best for your pet..."
                          >
                  <button type="submit" name="nav-submit-button" class="btn-search">
                    <i class="ti-search"></i>
                  </button>
                </form>
                <ul class="search-results" v-if="searchItems.length">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <img
                              :src='getImgUrl(product.images[0].src)'
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <h6>{{ product.title }}</h6>
                            </nuxt-link>
                            <h4>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          </div>
                        </li>
                      </ul>
              </div>

              <div class="menu-right pull-right">
                <div class="icon-nav">
                  <ul>
                    <li class="onhover-div mobile-search">
                      <div>
                        <img
                          :src='"@/assets/images/icon/search.png"'
                          class="img-fluid"
                          alt
                        />
                        <i class="ti-search"></i>
                      </div>
                      <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                            @keyup="searchProduct"
                            placeholder="Search a Product"
                          >
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                      <ul class="search-results" v-if="searchItems.length">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <img
                              :src='getImgUrl(product.images[0].src)'
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <h6>{{ product.title }}</h6>
                            </nuxt-link>
                            <h4>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    </li>
                    <li class="onhover-div mobile-setting">
                      <div>
                        <img
                          :src='"@/assets/images/icon/setting.png"'
                          class="img-fluid"
                          alt
                        />
                        <i class="ti-settings"></i>
                      </div>
                      <div class="show-div setting">
                        <h6>language</h6>
                        <ul>
              <li>
                <nuxt-link class="navbar-item" to="/fr">Français</nuxt-link>
              </li>
              <li>
                <nuxt-link class="navbar-item" to="/en">English</nuxt-link>
              </li>
            </ul>
                        <h6>currency</h6>
                        <ul class="list-inline">
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('eur', '€')">eur</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('inr', '₹')">inr</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('gbp', '£')">gbp</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('usd', '$')">usd</a>
              </li>
            </ul>
                      </div>
                    </li>
                    <li class="onhover-div mobile-cart">
                      <div>
                        <img
                          :src='"@/assets/images/icon/cart.png"'
                          class="img-fluid"
                          alt
                        />
                        <i class="ti-shopping-cart"></i>
                        <span class="cart_qty_cls">{{cart.length}}</span>
                      </div>
                      <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>Your cart is currently empty.</li>
          </ul>
          <ul class="show-div shopping-cart" v-if="cart.length">
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
                    <span>{{item.quantity}} x {{ item.price | currency }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="#" @click='removeCartItem(item)'>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{ cartTotal | currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                  view cart
                </nuxt-link>
                <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'checkout'">
                  checkout
                </nuxt-link>
              </div>
            </li>
          </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-nav-center">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import TopBar from '../widgets/topbar'
import Nav from '../widgets/navbar'
export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: ''
    }
  },
  components: {
    TopBar,
    Nav
  },
  computed: {
    ...mapState({
      searchItems: state => state.products.searchProduct
    }),
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    openSearch() {
      this.search = true
    },
    closeSearch() {
      this.search = false
    },
    searchProduct() {
      this.$store.dispatch('products/searchProduct', this.searchString)
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
