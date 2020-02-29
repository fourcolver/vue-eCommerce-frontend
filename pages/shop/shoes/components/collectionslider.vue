<template>
<div>
  <!-- product slider -->
  <section  class="section-b-space">
    <div class="container">
      <div class="row multiple-slider">
        <div class="col-lg-3 col-sm-6" v-for="(collection,index) in category" :key="index">
          <div class="theme-card">
            <h5 class="title-border">{{collection}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:[index]="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product,index) in getCategoryProduct(collection).splice(0,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
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
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="swiper-slide" v-if="getCategoryProduct(collection).length >= 4">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(collection).splice(3,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
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
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="swiper-button-prev" slot="button-prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div class="swiper-button-next" slot="button-next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- product slider end -->
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['products', 'category'],
  data() {
    return {
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    }
  }
}
</script>
