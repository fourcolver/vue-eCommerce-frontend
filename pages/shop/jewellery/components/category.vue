<template>
  <div>
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
                      <h6>{{item.itemcount}}</h6>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          img: require('@/assets/images/jewellery/icon/cat-1.svg'),
          title: 'rings',
          itemcount: '21 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-2.svg'),
          title: 'diamonds',
          itemcount: '53 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-3.svg'),
          title: 'necklace',
          itemcount: '18 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-4.svg'),
          title: 'watches',
          itemcount: '34 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-5.svg'),
          title: 'piercing',
          itemcount: '47 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-6.svg'),
          title: 'tiara',
          itemcount: '62 items'
        },
        {
          img: require('@/assets/images/jewellery/icon/cat-7.svg'),
          title: 'bracelates',
          itemcount: '70 items'
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
