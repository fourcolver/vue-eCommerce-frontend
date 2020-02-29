<template>
    <div>
    <Header />
    <Breadcrumbs title="Category Element" />
        <div class="container">
    <section class="section-b-space border-section border-top-0">
      <div class="row">
        <div class="col">
          <div class="slide-6 no-arrow">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div class="category-block">
                    <a href="#">
                      <div class="category-image">
                        <img :src="item.img" alt>
                      </div>
                    </a>
                    <div class="category-details">
                      <a href="#">
                        <h5>{{item.title}}</h5>
                      </a>
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
  <section class="p-0 ratio2_1">
    <div class="container-fluid">
        <div class="row category-border">
            <div class="col-sm-4 border-padding" v-for="(item, index) in items2" :key="index">
                <div class="category-banner">
                    <div>
                        <img :src="item.imagepath" class="img-fluid bg-img" alt="">
                    </div>
                    <div class="category-box">
                        <a href="#">
                            <h2>{{item.title}}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- category  -->
  <div class="container category-button">
    <section class="section-b-space border-section border-bottom-0">
      <div class="row partition1">
        <div class="col" v-for="(cat,index) in category" :key="index">
          <a href="#" class="btn btn-outline btn-block">{{ cat.title }}</a>
        </div>
      </div>
    </section>
  </div>
  <!-- category end -->
  <div class="category-bg ratio_square">
      <div class="container-fluid p-0">
        <div class="row order-section">
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block">
              <img alt :src="imagepath_1" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block even">
              <div>
                <h6>{{subtitle_1}}</h6>
                <a href="#">
                  <h2>{{title_1}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_1}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block">
              <img alt :src="imagepath_2" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block">
              <div>
                <h6>{{subtitle_2}}</h6>
                <a href="#">
                  <h2>{{title_2}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_2}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block even">
              <img alt :src="imagepath_3" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block">
              <div>
                <h6>{{subtitle_3}}</h6>
                <a href="#">
                  <h2>{{title_3}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_3}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-b-space ratio_portrait">
      <div class="container">
        <div class="row">
          <div class="col">
            <div v-swiper:mySwiper1="swiperOption1">
              <div class="swiper-wrapper category-m">
                <div class="swiper-slide" v-for="(item, index) in itemsCat" :key="index">
                  <div class="category-wrapper">
                    <div>
                      <div>
                        <img
                          :src="item.imagepath"
                          class="img-fluid bg-img"
                          alt
                        />
                      </div>
                      <h4>{{item.title}}</h4>
                      <div v-html="item.description">
                      </div>
                      <a href="#" class="btn btn-outline">{{item.button}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- category 3 -->
  <section class="p-0">
    <div class="container">
      <div class="row background">
        <div class="col" v-for="(item,index) in itemsizes" :key="index">
          <a href="#">
            <div class="contain-bg">
              <h4>{{item.title}}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- category 3 end-->
  <Footer />
    </div>
</template>
<script>
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
      itemsizes: [
        { title: 'size 06' },
        { title: 'size 07' },
        { title: 'size 08' },
        { title: 'size 09' },
        { title: 'size 10' }
      ],
      swiperOption1: {
        slidesPerView: 4,
        freeMode: true,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          586: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      itemsCat: [
        {
          imagepath: require('@/assets/images/watch/cat1.png'),
          title: 'calculator watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/watch/cat2.png'),
          title: 'Antimagnetic watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/watch/cat3.png'),
          title: 'History of watches',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/watch/cat4.png'),
          title: 'watch models',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/watch/cat1.png'),
          title: 'women watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        }
      ],
      imagepath_1: require('@/assets/images/cat1.jpg'),
      title_1: 'Tacker bag',
      subtitle_1: 'on sale',
      offer_1: 'save 30% off',
      imagepath_2: require('@/assets/images/cat2.jpg'),
      title_2: 'Zipper storage bag',
      subtitle_2: 'new products',
      offer_2: '-80% off',
      imagepath_3: require('@/assets/images/cat3.jpg'),
      title_3: 'gate check bag',
      subtitle_3: 'summer sale',
      offer_3: 'minimum 50% off',
      category: [
        { title: 'airbag' },
        { title: 'burn bag' },
        { title: 'briefcase' },
        { title: 'carpet bag' },
        { title: 'money bag' },
        { title: 'tucker bag' }
      ],
      items: [
        { img: require('@/assets/images/icon/cat1.png'),
          title: 'sport shoes'
        },
        { img: require('@/assets/images/icon/cat2.png'),
          title: 'casual shoes'
        },
        { img: require('@/assets/images/icon/cat3.png'),
          title: 'formal shoes'
        },
        { img: require('@/assets/images/icon/cat4.png'),
          title: 'flat'
        },
        { img: require('@/assets/images/icon/cat5.png'),
          title: 'heels'
        },
        { img: require('@/assets/images/icon/cat6.png'),
          title: 'boots'
        },
        { img: require('@/assets/images/icon/cat2.png'),
          title: 'casual shoes'
        },
        { img: require('@/assets/images/icon/cat3.png'),
          title: 'casual shoes'
        }
      ],
      items2: [
        {
          imagepath: require('@/assets/images/cat1.png'),
          title: 'men'
        },
        {
          imagepath: require('@/assets/images/cat2.png'),
          title: 'women'
        },
        {
          imagepath: require('@/assets/images/cat3.png'),
          title: 'kids'
        }
      ],
      swiperOption: {
        dots: false,
        loop: true,
        slideSpeed: 300,
        slidesPerView: 7,
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
