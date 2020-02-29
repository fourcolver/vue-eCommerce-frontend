<template>
<div>
    <Header />
    <Breadcrumbs title="Slider Element" />
  <!-- product slider -->
  <section>
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
                          <h4>{{ product.price | currency }}</h4>
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
                          <h4>{{ product.price | currency }}</h4>
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
  <section class="ratio_square section-b-space">
    <div class="container">
      <div class="row partition3 partition_3">
        <div class="col-lg-4">
          <div class="theme-card card-border">
            <h5 class="title-border">{{category[0]}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[0]).splice(0, 4)"
                        :key="index"
                      >
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
                  <div class="swiper-slide" v-if="getCategoryProduct(category[0]).length >= 5">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[0]).splice(4,4)"
                        :key="index"
                      >
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
        <div class="col-lg-4 center-slider border-0">
          <div>
            <div class="title2">
              <h4>on sale</h4>
              <h2 class="title-inner2">{{category[1]}}</h2>
            </div>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper1="swiperOption1">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(product,index) in getCategoryProduct(category[1]).splice(0,4)"
                    :key="index"
                  >
                    <div>
                      <div class="product-box product-wrap">
                    <div class="img-wrapper">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
      </div>
      <div class="front">
        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
          <img
            :src="getImgUrl(imageSrc ? imageSrc : product.images[0].src)"
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
        <li
          class="grid_thumb_img"
          :class="{active: imageSrc == image.src}"
          v-for="(image,index) in product.images"
          :key="index"
        >
          <a href="javascript:void(0);">
            <img :src="getImgUrl(image.src)" alt="'image.alt'" />
          </a>
        </li>
      </ul>
      <div class="cart-detail">
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true"></i>
        </a>
        <a
          href="javascript:void(0)"
          title="Quick View"
        >
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        <a href="javascript:void(0)" title="Comapre">
          <i class="ti-reload" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="product-info">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
        <h6>{{ product.title }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
      <div class="add-btn">
        <button
          data-toggle="modal"
          data-target="#addtocart"
          title="Add to cart"
          class="btn btn-outline"
        >
          <i class="ti-shopping-cart"></i> add to cart
        </button>
      </div>
    </div>
                  </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev">
                </div>
                <div class="swiper-button-next" slot="button-next">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="theme-card card-border">
            <h5 class="title-border">{{category[2]}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[2]).splice(0,4)"
                        :key="index"
                      >
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
                  <div class="swiper-slide" v-if="getCategoryProduct(category[2]).length >= 5">
                    <div>
                      <div
                        class="media"
                        v-for="(product,index) in getCategoryProduct(category[2]).splice(4,5)"
                        :key="index"
                      >
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
  <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <Footer />
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
// import productBox3 from '../../../../components/product-box/product-box3'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
    // productBox3
  },
  data() {
    return {
      products: [],
      category: [],
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
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  mounted() {
    this.productsArray()
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'fashion') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
    },
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100
    }
  }
}
</script>
