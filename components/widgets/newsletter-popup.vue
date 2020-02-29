<template>
  <div>
    <b-modal
    ref="my-modal"
    id="modal-newsletter"
    size="lg"
    centered
    :hide-footer="true">
        <div class="modal-body modal1">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-12">
                <div class="modal-bg">
                  <div class="offer-content">
                    <img :src="imagepath" class="img-fluid" alt="offer" />
                    <h2>newsletter</h2>
                    <form class="auth-form needs-validation" target="_blank">
                      <div class="form-group mx-sm-3">
                        <input
                          type="email"
                          class="form-control"
                          name="EMAIL"
                          placeholder="Enter your email"
                          required="required"
                        />
                        <button type="submit" class="btn btn-solid" id="mc-submit">subscribe</button>
                      </div>
                    </form>
                  </div>
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
  data() {
    return {
      imagepath: require('@/assets/images//Offer-banner.png')
    }
  },
  mounted() {
    this.showModal()
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
