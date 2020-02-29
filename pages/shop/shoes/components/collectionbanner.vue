<template>
  <!-- collection banner -->
  <section class="section-b-space p-t-0 ratio_40">
    <div class="container">
      <div class="row partition2">
        <div class="col-md-6" v-for="(item, index) in items" :key="index">
          <a href="#">
            <div class="collection-banner p-right text-center">
              <div class="img-part">
                <img
                  :src="item.imagepath"
                  class="img-fluid bg-img"
                  alt
                >
              </div>
              <div class="contain-banner">
                <div>
                  <h4 class="text-white">{{item.subtitle}}</h4>
                  <h2>{{item.title}}</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- collection banner end -->
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/sub-banner.png'),
          title: 'men',
          subtitle: '50% off'
        },
        {
          imagepath: require('@/assets/images/sub-banner1.png'),
          title: 'women',
          subtitle: '20% save'
        }
      ]
    }
  }
}
</script>
