<template>
<!-- Home slider -->
<section class="p-0">
    <div class="slide-1 home-slider">
         <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                <div
                class="home text-center p-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="slider-contain">
                                <div>
                                    <h4>{{item.title}}</h4>
                                    <h1>{{item.subtitle}}</h1>
                                    <nuxt-link :to="{ path: '/collection/left-sidebar'}" class="btn btn-solid">Save up to 50% off</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</section>
<!-- Home slider end -->
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/6.jpg'),
          title: 'summer sale',
          subtitle: 'the bag',
          alignclass: 'p-center'
        },
        {
          imagepath: require('@/assets/images/home-banner/7.jpg'),
          title: 'summer sale',
          subtitle: 'the bag',
          alignclass: 'p-center'
        },
        {
          imagepath: require('@/assets/images/home-banner/8.jpg'),
          title: 'summer sale',
          subtitle: 'the bag',
          alignclass: 'p-center'
        }
      ]
    }
  }
}
</script>
