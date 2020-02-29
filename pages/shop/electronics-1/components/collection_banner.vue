<template>
  <div>
    <section class="banner-goggles ratio2_3">
      <div class="container-fluid">
        <div class="row partition3">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <a href="#">
              <div class="collection-banner p-left text-center">
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
          imagepath: require('@/assets/images/electronics/sub1.jpg'),
          title: 'speaker',
          subtitle: '30% off'
        },
        {
          imagepath: require('@/assets/images/electronics/sub2.jpg'),
          title: 'earplug',
          subtitle: 'save 60%'
        },
        {
          imagepath: require('@/assets/images/electronics/sub3.jpg'),
          title: 'best deal',
          subtitle: 'save 55%'
        }
      ]
    }
  }
}
</script>
