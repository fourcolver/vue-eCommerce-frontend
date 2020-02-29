<template>
  <div>
    <Header />
    <Breadcrumbs title="Slider Element" />
    <!-- Home slider -->
    <section>
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
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <nuxt-link :to="{ path: '/collection/left-sidebar'}" class="btn btn-solid">shop now</nuxt-link>
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
    <div class="container section-b-space section-t-space">
    <div class="row">
        <div class="col">
            <div class="card">
                <h5 class="card-header">Classes</h5>
                <div class="card-body">
                    <h5 class="card-title">For Parallax Image - .parallax</h5>
                    <h5>contain-align - .text-left, .text-center, .text-right</h5>
                    <h5>contain-position - .p-left, .p-center, .p-right</h5>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
  </div>
</template>
<script type="text/javascript">
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
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
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'welcome to fashion',
          subtitle: 'women fashion',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/2.jpg'),
          title: 'welcome to fashion',
          subtitle: 'men fashion',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
