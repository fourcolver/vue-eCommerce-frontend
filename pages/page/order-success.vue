<template>
  <div>
<Header />
  <section class="p-0" v-if="order==''">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'"> back to home</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- thank-you section start -->
    <section class="section-b-space light-layout" v-if="order!=''">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="success-text">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <h2>thank you</h2>
              <p>Payment is successfully processsed and your order is on the way</p>
              <p>Transaction ID:{{order.token}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <!-- order-detail section start -->
    <section class="section-b-space" v-if="order!=''">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product-order">
              <h3>your order details</h3>
              <div class="row product-order-detail" v-for="(item,index) in order.product" :key="index">
                <div class="col-3">
                  <img :src="getImgUrl(item.images[0].src)" alt class="img-fluid" />
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>product name</h4>
                    <h5>{{item.title}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>quantity</h4>
                    <h5>{{item.quantity}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>price</h4>
                    <h5>{{ (item.price * curr.curr) * item.quantity | currency(curr.symbol) }}</h5>
                  </div>
                </div>
              </div>
              <div class="total-sec">
                <ul>
                  <li>
                    Total
                    <span>{{ cartTotal * curr.curr | currency(curr.symbol) }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row order-success-sec">
              <div class="col-sm-6">
                <h4>summery</h4>
                <ul class="order-detail">
                  <li>order ID: {{order.token}}</li>
                  <li>Order Date: October 18, 2020</li>
                  <li>Order Total: {{ cartTotal * curr.curr | currency(curr.symbol) }}</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h4>shipping address</h4>
                <ul class="order-detail">
                  <li>gerg harvell</li>
                  <li>568, suite ave.</li>
                  <li>Austrlia, 235153</li>
                  <li>Contact No. 987456321</li>
                </ul>
              </div>
              <div class="col-sm-12 payment-mode">
                <h4>payment method</h4>
                <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>
              </div>
              <div class="col-md-12">
                <div class="delivery-sec">
                  <h3>expected date of delivery</h3>
                  <h2>october 22, 2020</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      order: 'products/getOrder',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    }
  }
}
</script>
