<template>
  <div class="kids-collection-banner">
    <section class="banner-padding absolute-banner pb-0 ratio2_1">
      <div class="container absolute-bg">
        <div class="row partition2">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <a href="#">
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt />
                </div>
                <div class="contain-banner">
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
          imagepath: require('@/assets/images/kids/1.jpg'),
          title: 'men',
          subtitle: 'save 30%'
        },
        {
          imagepath: require('@/assets/images/kids/2.jpg'),
          title: 'women',
          subtitle: 'save 60%'
        }
      ]
    }
  }
}
</script>
