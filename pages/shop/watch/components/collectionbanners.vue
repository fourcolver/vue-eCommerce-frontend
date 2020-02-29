<template>
    <div>
<section class="ratio_45">
    <div class="container">
        <div class="row partition3">
            <div class="col-md-4" v-for="(item, index) in items" :key="index">
                <a href="#">
                    <div class="collection-banner p-left">
                        <div class="img-part">
                            <img :src="item.imagepath" class="img-fluid bg-img" alt="">
                        </div>
                        <div class="contain-banner banner-3" v-if="item.title && item.subtitle ">
                            <div>
                                <h4>{{item.title}}</h4>
                                <h2>{{item.subtitle}}</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/banner1.jpg'),
          title: 'Mininum 30% off',
          subtitle: 'New watch'
        },
        {
          imagepath: require('@/assets/images/banner2.jpg')
        },
        {
          imagepath: require('@/assets/images/banner1.jpg'),
          title: 'save 60% on',
          subtitle: 'Gold watch'
        }
      ]
    }
  }
}
</script>
