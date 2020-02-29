<template>
  <div>
    <section class="banner-furniture ratio_45">
      <div class="container-fluid">
        <div class="row partition3">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <a href="#">
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt />
                </div>
                <div class="contain-banner banner-3">
                  <div>
                    <h4>{{item.subtitle}}</h4>
                    <h2>{{item.title}}</h2>
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
          imagepath: require('@/assets/images/furniture/2banner1.jpg'),
          title: 'sofa',
          subtitle: 'save 30%'
        },
        {
          imagepath: require('@/assets/images/furniture/2banner2.jpg'),
          title: 'new arrival',
          subtitle: 'save 60%'
        },
        {
          imagepath: require('@/assets/images/furniture/2banner3.jpg'),
          title: 'chair',
          subtitle: 'save 55%'
        }
      ]
    }
  }
}
</script>
