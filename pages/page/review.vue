<template>
  <div>
    <Header />
    <Breadcrumbs title="Review" />
    <section class="section-b-space blog-detail-page review-page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="comment-section">
              <li v-for="(item, index) in items" :key="index">
                <div class="media">
                  <img :src="item.imagepath" alt="item.name" />
                  <div class="media-body">
                    <h6>
                      {{item.name}}
                      <span>( {{item.datetime}} )</span>
                    </h6>
                    <p>{{item.desc}}</p>
                    <ul class="comnt-sec">
                      <li>
                        <a href="#">
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span>(14)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="unlike">
                            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>(2)
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
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
          imagepath: require('@/assets/images/avtar.jpg'),
          name: 'Mark jacno',
          datetime: ' 12 Jannuary 2020 At 1:30AM',
          desc: 'Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.'
        },
        {
          imagepath: require('@/assets/images/2.jpg'),
          name: 'john dio',
          datetime: ' 23 December 2019 At 5:10PM',
          desc: 'Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.'
        },
        {
          imagepath: require('@/assets/images/20.jpg'),
          name: 'poul carry',
          datetime: ' 31 March 2020 At 12:19PM',
          desc: 'Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.'
        }
      ]
    }
  }
}
</script>
