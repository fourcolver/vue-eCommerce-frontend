<template>
  <div>
    <section id="tool-bg" class="p-0 height-85 tools_slider">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="slider-contain">
                    <div>
                      <h4>{{item.subtitle}}</h4>
                      <h1>{{item.title}}</h1>
                      <a href="#" class="btn btn-solid">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tools-parts" id="tool-1">
                <img :src="item.imagetool1" class="img-fluid" alt />
              </div>
              <!-- <div class="tools-parts1" id="tool-2">
                <img src="../assets/images/tools/4.png" class="img-fluid blur-up lazyload" alt />
              </div> -->
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
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/49.jpg'),
          imagetool1: require('@/assets/images/tools/1.png'),
          title: 'Auto parts',
          subtitle: 'welcome to tools',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/50.jpg'),
          imagetool1: require('@/assets/images/tools/3.png'),
          title: 'car body parts',
          subtitle: 'save 15% off',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
