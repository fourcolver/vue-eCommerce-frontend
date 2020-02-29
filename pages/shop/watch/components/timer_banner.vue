<template>
  <div>
    <section>
      <div class="container">
        <div class="row banner-timer" v-bind:style="{ 'background-image': 'url(' + imagepath + ')' }">
          <div class="col-md-6">
            <div class="banner-text">
              <h2 v-html="offer_text"></h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="timer-box">
              <countdown date="December 20, 2020"></countdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Countdown from '../../../../components/widgets/timer.vue'
export default {
  data() {
    return {
      imagepath: require('@/assets/images/offer-banner.jpg'),
      offer_text: 'Save <span>30% off</span> Digital Watch'
    }
  },
  components: {
    Countdown
  }
}
</script>
