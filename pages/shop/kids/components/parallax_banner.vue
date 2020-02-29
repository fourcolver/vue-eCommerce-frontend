<template>
  <div>
    <section class="p-0">
      <div
        class="full-banner parallax text-center p-left"
        v-bind:style="{ 'background-image': `url(${imagepath})` }"
      >
        <img :src="imagepath" alt class="bg-img d-none" />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain">
                <h2>{{title}}</h2>
                <h3>{{subtitle}}</h3>
                <h4>{{text}}</h4>
              </div>
            </div>
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
      imagepath: require('@/assets/images/parallax/11.jpg'),
      title: '2019',
      subtitle: 'fashion trends',
      text: 'special offer'
    }
  }
}
</script>
