<template>
  <!--  logo section -->
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="slide-6 no-arrow">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div>
                    <div class="logo-block">
                      <a href="#">
                        <img :src="item.img" alt>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  logo section end-->
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: require('@/assets/images/logos/1.png') },
        { img: require('@/assets/images/logos/2.png') },
        { img: require('@/assets/images/logos/3.png') },
        { img: require('@/assets/images/logos/4.png') },
        { img: require('@/assets/images/logos/5.png') },
        { img: require('@/assets/images/logos/6.png') },
        { img: require('@/assets/images/logos/7.png') },
        { img: require('@/assets/images/logos/8.png') }
      ],
      swiperOption: {
        dots: false,
        loop: true,
        slideSpeed: 300,
        slidesPerView: 6,
        breakpoints: {
          1367: {
            slidesPerView: 5,
            loop: true
          },
          1024: {
            slidesPerView: 4,
            loop: true
          },
          767: {
            slidesPerView: 3,
            loop: true
          },
          480: {
            slidesPerView: 2
          }
        }
      }
    }
  }
}
</script>
