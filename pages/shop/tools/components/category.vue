<template>
  <div>
    <section class="pt-0 category-tools ratio3_2">
      <div class="container">
        <div class="row">
          <div class="col">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper category-m">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div class="category-wrapper pt-0">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
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
      items: [
        {
          imagepath: require('@/assets/images/tools/category/1.jpg'),
          title: 'brakes & steering',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/tools/category/2.jpg'),
          title: 'engine & drivetrain',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/tools/category/3.jpg'),
          title: 'exterior accesories',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/tools/category/4.jpg'),
          title: 'other parts',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: require('@/assets/images/tools/category/5.jpg'),
          title: 'engine & drivetrain',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        }
      ]
    }
  }
}
</script>
