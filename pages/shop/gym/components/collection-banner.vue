<template>
  <dvi>
    <section class="banner-padding banner-furniture gym-banner">
      <div class="container-fluid">
        <div class="row partition2">
          <div class="col-md-4">
            <a href="#">
              <div class="collection-banner p-left text-left">
                <div class="img-part">
                  <img :src="imagepath1" class="img-fluid" alt />
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{subtitle1}}</h4>
                    <h2>{{title1}}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-8">
            <a href="#">
              <div class="collection-banner p-left text-left">
                <div class="img-part">
                  <img :src="imagepath2" class="img-fluid" alt />
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{subtitle2}}</h4>
                    <h2>{{title2}}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </dvi>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imagepath1: require('@/assets/images/gym/banner/1.jpg'),
      title1: 'men',
      subtitle1: 'save 30%',
      imagepath2: require('@/assets/images/gym/banner/2.jpg'),
      title2: 'women',
      subtitle2: 'save 60%'
    }
  }
}
</script>
