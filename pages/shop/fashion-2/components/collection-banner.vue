<template>
  <!-- collection banner -->
  <section class="banner-padding banner-furniture">
    <div class="container-fluid">
      <div class="row partition3">
        <div class="col-md-6" v-for="(item,index) in items" :key="index">
          <a href="#">
            <div class="collection-banner p-left text-left">
              <div class="img-part">
                <img :src="item.img" alt class="img-fluid">
              </div>
              <div class="contain-banner">
                <div>
                  <h4>{{item.sale}}</h4>
                  <h2>{{item.category}}</h2>
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

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require('@/assets/images/fashion/1.jpg'),
          sale: 'save 30%',
          category: 'Women'
        },
        {
          img: require('@/assets/images/fashion/2.jpg'),
          sale: 'save 60%',
          category: 'Watch'
        },
        {
          img: require('@/assets/images/fashion/3.jpg'),
          sale: 'save 30%',
          category: 'Sandle'
        },
        {
          img: require('@/assets/images/fashion/4.jpg'),
          sale: 'save 30%',
          category: 'Kids'
        }
      ]
    }
  }
}
</script>
