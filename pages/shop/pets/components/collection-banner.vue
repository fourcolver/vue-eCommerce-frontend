<template>
  <div>
    <section class="pt-0 banner-6 pet-collection-banner ratio2_1">
      <div class="container">
        <div class="row partition3">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <a href="#">
              <div class="collection-banner" :class="item.alignclass">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt="banner" />
                </div>
                <div class="contain-banner banner-3">
                  <div>
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
          imagepath: require('@/assets/images/pets/banner/1.jpg'),
          title: 'cloths',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/pets/banner/2.jpg'),
          title: 'groom',
          alignclass: 'p-right'
        },
        {
          imagepath: require('@/assets/images/pets/banner/3.jpg'),
          title: 'food',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/pets/banner/4.jpg'),
          title: 'home',
          alignclass: 'p-right'
        },
        {
          imagepath: require('@/assets/images/pets/banner/5.jpg'),
          title: 'cats',
          alignclass: 'p-right'
        },
        {
          imagepath: require('@/assets/images/pets/banner/6.jpg'),
          title: 'bowls',
          alignclass: 'p-right'
        }
      ]
    }
  }
}
</script>
