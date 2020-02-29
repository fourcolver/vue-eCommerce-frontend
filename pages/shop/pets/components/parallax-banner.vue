<template>
  <div>
    <section class="p-0 pet-parallax">
      <div
        class="full-banner parallax text-center p-center"
        v-bind:style="{ 'background-image': `url(${bgimagepath})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain">
                <h4>{{subtitle}}</h4>
                <h3>{{title}}</h3>
                <p>{{description}}</p>
                <a href="#" class="btn btn-solid black-btn" tabindex="0">shop now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="pet-decor">
          <img :src="imagepath" alt class="img-fluid" />
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      bgimagepath: require('@/assets/images/parallax/19.jpg'),
      imagepath: require('@/assets/images/dog.png'),
      title: 'get upto 70% off',
      subtitle: 'choose what you love',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  }
}
</script>
