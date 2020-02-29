<template>
  <div>
    <div class="bg-block">
      <section class="p-0">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="title4">
                <h2 class="title-inner4">{{title}}</h2>
                <div class="line">
                  <span></span>
                </div>
              </div>
              <div class="theme-tab">
                <b-tabs content-class="mt-3">
                  <b-tab :title="collection" v-for="(collection,index) in category" :key="index">
                    <div class="row product-tab">
                      <div
                        class="tab-box"
                        v-for="(product,index) in getCategoryProduct(collection)"
                        :key="index"
                      >
                        <div class="product-box2">
                          <div class="media">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <img
                                :src="getImgUrl(product.images[0].src)"
                                class="img-fluid bg-img"
                                alt
                              />
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
                                <h6>{{ product.title }}</h6>
                              </nuxt-link>
                              <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                              <ul class="color-variant">
                                <li v-for="(variant,index) in Color(product.variants)" :key="index">
                                  <a
                                    :class="[variant]"
                                    v-bind:style="{ 'background-color' : variant}"
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  props: ['products', 'category'],
  data() {
    return {
      title: 'trending products'
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
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100
    }
  }
}
</script>
