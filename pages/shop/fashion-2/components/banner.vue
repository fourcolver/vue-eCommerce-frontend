<template>
    <!-- Parallax banner -->
<section class="p-0">
    <div class="full-banner parallax text-center p-left" v-bind:style="{ 'background-image': `url(${imagepath})` }">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner-contain">
                        <h2>2018</h2>
                        <h3>fashion trends</h3>
                        <h4>special offer</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Parallax banner end -->
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      imagepath: require('@/assets/images/parallax/13.jpg'),
      title: '2019',
      subtitle: 'fashion trends',
      text: 'special offer'
    }
  }
}
</script>
