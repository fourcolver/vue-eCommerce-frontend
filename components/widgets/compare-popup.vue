<template>
  <div>
    <b-modal
      id="modal-compare"
      size="lg"
      centered
      title="Compare"
      :hide-footer="true"
      :hide-header="true"
      v-if="openCompare"
    >
      <div class="row compare-modal">
        <div class="col-lg-12">
          <button class="close" type="button" @click="closeCompare(openCompare)">
            <span>×</span>
          </button>
          <div class="media">
            <img
              :src="getImgUrl(productData.images[0].src)"
              class="img-fluid"
              :alt="productData.images[0].alt"
            />
            <div class="media-body align-self-center text-center">
              <h5>
                <i class="fa fa-check"></i>Item
                <span>{{productData.title}}</span>
                <span>successfully added to your Compare list</span>
              </h5>
              <div class="buttons d-flex justify-content-center">
                <nuxt-link
                  :to="{ path: '/page/compare/compare-1'}"
                  class="btn-sm btn-solid"
                >View Compare list</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ['openCompare', 'productData'],
  methods: {
    // Get Image Url
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    closeCompare(val) {
      val = false
      this.$emit('closeCompare', val)
    }
  }
}
</script>
