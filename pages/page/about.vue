<template>
  <div>
    <Header />
    <Breadcrumbs title="About" />
    <!-- about section start -->
    <section class="about-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section">
              <img :src="aboutbanner" class="img-fluid" alt />
            </div>
          </div>
          <div class="col-sm-12">
            <h4>{{aboutTitle}}</h4>
            <p>{{aboutText}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- about section end -->
    <!--Testimonial start-->
    <section class="testimonial small-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper testimonial-slider">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div class="media">
                    <div class="text-center">
                      <img :src="item.imagepath" alt="#" />
                      <h5>{{item.name}}</h5>
                      <h6>{{item.role}}</h6>
                    </div>
                    <div class="media-body">
                      <p>{{item.decs}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Testimonial ends-->
    <!--Team start-->
    <section id="team" class="team section-b-space ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Our Team</h2>
            <div v-swiper:mySwiper2="swiperOption2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(team, index) in teams" :key="index">
                  <div>
                    <div>
                      <img :src="team.imagepath" class="img-fluid" alt />
                    </div>
                    <h4>{{team.name}}</h4>
                    <h6>{{team.post}}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Team ends-->
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          991: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 20,
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
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/2.jpg'),
          name: 'Mark Jecno',
          role: 'designer',
          decs:
            'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
        },
        {
          imagepath: require('@/assets/images/20.jpg'),
          name: 'Amy Molive',
          role: 'tester',
          decs:
            'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
        }
      ],
      teams: [
        {
          imagepath: require('@/assets/images/team/1.jpg'),
          name: 'Hileri Keol',
          post: 'chairman'
        },
        {
          imagepath: require('@/assets/images/team/2.jpg'),
          name: 'Peter Pants',
          post: 'business executive'
        },
        {
          imagepath: require('@/assets/images/team/3.jpg'),
          name: 'john dio',
          post: 'project manager'
        },
        {
          imagepath: require('@/assets/images/team/4.jpg'),
          name: 'Petey Cruiser',
          post: 'web developer'
        }
      ],
      aboutbanner: require('@/assets/images/about/about-us.jpg'),
      aboutTitle:
        'Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium',
      aboutText:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium On the other hand.We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour. when our power of choice is untrammelled and when nothing prevents our being able to do what we like best. every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection he rejects pleasures to secure other greater pleasures or else he endures pains to avoid worse pains.'
    }
  }
}
</script>
