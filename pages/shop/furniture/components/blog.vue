<template>
<div>
    <section class="blog blog-2 section-b-space ratio3_2">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title1">
                    <h4>{{subtitle}}</h4>
            <h2 class="title-inner1">{{title}}</h2>
                </div>
                <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(blog,index) in bloglist" :key="index">
                <a href="#">
                  <div class="classic-effect">
                    <div>
                      <img
                        :src="getImgUrl(blog.images[0])"
                        class="img-fluid"
                        alt
                      />
                    </div>
                    <span></span>
                  </div>
                </a>
                <div class="blog-details">
                  <h4>{{blog.date}}</h4>
                  <a href="#">
                    <p>{{blog.title}}</p>
                  </a>
                  <hr class="style1" />
                  <h6>by: {{blog.author}} , 2 Comment</h6>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: 'from the blog',
      subtitle: 'recent story',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  computed: mapState({
    bloglist: state => state.blog.bloglist
  }),
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/blog/' + path)
    }
  }
}
</script>
