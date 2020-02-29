<template>
  <div>
    <div class="category-bg ratio_square">
      <div class="container-fluid p-0">
        <div class="row order-section">
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block">
              <img alt :src="imagepath_1" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block even">
              <div>
                <h6>{{subtitle_1}}</h6>
                <a href="#">
                  <h2>{{title_1}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_1}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block">
              <img alt :src="imagepath_2" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block">
              <div>
                <h6>{{subtitle_2}}</h6>
                <a href="#">
                  <h2>{{title_2}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_2}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <a href="#" class="image-block even">
              <img alt :src="imagepath_3" class="img-fluid bg-img" />
            </a>
          </div>
          <div class="col-sm-4 p-0">
            <div class="contain-block">
              <div>
                <h6>{{subtitle_3}}</h6>
                <a href="#">
                  <h2>{{title_3}}</h2>
                </a>
                <a href="#" class="btn btn-solid category-btn">{{offer_3}}</a>
                <a href="#">
                  <h6>
                    <span>shop now</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagepath_1: require('@/assets/images/cat1.jpg'),
      title_1: 'Tacker bag',
      subtitle_1: 'on sale',
      offer_1: 'save 30% off',
      imagepath_2: require('@/assets/images/cat2.jpg'),
      title_2: 'Zipper storage bag',
      subtitle_2: 'new products',
      offer_2: '-80% off',
      imagepath_3: require('@/assets/images/cat3.jpg'),
      title_3: 'gate check bag',
      subtitle_3: 'summer sale',
      offer_3: 'minimum 50% off'
    }
  }
}
</script>
