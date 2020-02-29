<template>
  <div>
    <section class="pb-0 ratio2_1">
      <div class="container">
        <div class="row partition2">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <nuxt-link :to="{ path: '/collection/leftsidebar/all'}">
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
            </nuxt-link>
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
          imagepath: require('@/assets/images/sub-banner1.jpg'),
          title: 'men',
          subtitle: 'save 30%'
        },
        {
          imagepath: require('@/assets/images/sub-banner2.jpg'),
          title: 'women',
          subtitle: 'save 60%'
        }
      ]
    }
  }
}
</script>
