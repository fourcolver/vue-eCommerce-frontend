<template>
  <div>
    <Header />
    <Breadcrumbs title="lookbook" />
    <section class="lookbook section-b-space ratio_square">
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <div class="lookbook-block">
              <div>
                <img
                  :src="item.imagepath"
                  class="img-fluid"
                  alt
                />
              </div>
              <div class="lookbook-dot">
                <span>1</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img :src="item.pro1image" class="img-fluid" alt />
                    <div class="dot-info">
                      <h5 class="title">{{item.pro1title}}</h5>
                      <h5>{{item.pro1price}}</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="lookbook-dot dot2">
                <span>2</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img :src="item.pro2image" class="img-fluid" alt />
                    <div class="dot-info">
                      <h5 class="title">{{item.pro2title}}</h5>
                      <h5>{{item.pro2price}}</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      items: [
        {
          imagepath: require('@/assets/images/lookbook.jpg'),
          pro1image: require('@/assets/images/pro3/39.jpg'),
          pro1title: 'Trim dress',
          pro1price: '$220.00',
          pro1link: '/home',
          pro2image: require('@/assets/images/pro3/12.jpg'),
          pro2title: 'crop top',
          pro2price: '$695.00',
          pro2link: '/home'
        },
        {
          imagepath: require('@/assets/images/lookbook2.jpg'),
          pro1image: require('@/assets/images/pro3/25.jpg'),
          pro1title: 'boho tops',
          pro1price: '$446.00',
          pro1link: '/home',
          pro2image: require('@/assets/images/pro3/2.jpg'),
          pro2title: 'fitted dress',
          pro2price: '$235.00',
          pro2link: '/home'
        }
      ]
    }
  }
}
</script>
