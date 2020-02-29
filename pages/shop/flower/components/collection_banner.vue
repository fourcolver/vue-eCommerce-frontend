<template>
  <div>
    <section class="banner-padding pb-0">
      <div class="container">
        <div class="row partition2">
          <div class="col-md-4">
            <a href="#">
              <div class="collection-banner p-left text-center">
                <div class="img-part">
                  <img :src="imagepath_1" class="img-fluid" alt />
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-8">
            <a href="#">
              <div class="collection-banner p-right text-right">
                <div class="img-part">
                  <img :src="imagepath_2" class="img-fluid" alt />
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{subtitle}}</h4>
                    <h2>{{title}}</h2>
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
      imagepath_1: require('@/assets/images/flower/sub-banner2.jpg'),
      imagepath_2: require('@/assets/images/flower/sub-banner1.jpg'),
      title: 'Fresh flower',
      subtitle: 'save 60%'
    }
  }
}
</script>
