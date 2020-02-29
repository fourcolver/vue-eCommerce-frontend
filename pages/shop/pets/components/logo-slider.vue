<template>
    <div>
        <section class="section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="slide-6 no-arrow">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <div>
                      <div class="logo-block text-center">
                        <a href="#">
                          <img :src="item.imagepath" alt />
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
    </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          420: {
            slidesPerView: 2
          }
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/logos/9.png')
        },
        {
          imagepath: require('@/assets/images/logos/10.png')
        },
        {
          imagepath: require('@/assets/images/logos/11.png')
        },
        {
          imagepath: require('@/assets/images/logos/12.png')
        },
        {
          imagepath: require('@/assets/images/logos/13.png')
        },
        {
          imagepath: require('@/assets/images/logos/14.png')
        },
        {
          imagepath: require('@/assets/images/logos/15.png')
        },
        {
          imagepath: require('@/assets/images/logos/16.png')
        }
      ]
    }
  }
}
</script>
