<template>
    <!-- parallax banner -->
<section class="p-0">
    <div class="full-banner banner-layout-3 parallax text-center p-center" v-bind:style="{ 'background-image': `url(${imagepath})` }" >
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner-contain">
                        <h4 class="color pt-0">{{ subtitle }}</h4>
                        <h3>{{ title }}</h3>
                        <h4>{{ text }}</h4>
                        <a href="#" class="btn btn-solid">shop now</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- parallax banner end -->
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imagepath: require('@/assets/images/parallax/2.jpg'),
      title: 'leather bag',
      subtitle: 'special offer for you',
      text: 'extra 50% off'
    }
  }
}
</script>
