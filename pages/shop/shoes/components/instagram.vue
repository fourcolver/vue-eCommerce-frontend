<template>
  <!-- instagram section -->
  <section class="instagram ratio_square">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="title-borderless"># instagram</h2>
          <div class="slide-5 no-arrow slick-instagram">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(user, index) in instagram.slice(0,10)" :key="index">
                  <div>
                    <a :href="user.link" target="_blank">
                      <div class="instagram-box">
                        <img :src="user.images.standard_resolution.url" alt="Avatar">
                        <div class="overlay">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                      </div>
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
  <!-- instagram section end -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slideSpeed: 300,
        slidesPerView: 5,
        slidesToScroll: 5,
        breakpoints: {
          1367: {
            slidesPerView: 6
          },
          1024: {
            slidesPerView: 5
          },
          600: {
            slidesPerView: 4
          },
          480: {
            slidesPerView: 3
          }
        }
      },
      instagram: []
    }
  },
  mounted() {
    axios
      .get(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15'
      )
      .then((response) => {
        this.instagram = response.data.data
      })
  }
}
</script>
