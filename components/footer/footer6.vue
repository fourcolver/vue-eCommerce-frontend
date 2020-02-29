<template>
  <div>
    <footer
    class="bg-img-gym"
    v-bind:style="{ 'background-image': `url(${bgimagepath})` }">
      <!-- <img :src='"@/assets/images/gym/bg.jpg"' alt class="bg-img blur-up lazyload" /> -->
      <div class="dark-layout">
        <div class="container">
          <section class="section-b-space border-b">
            <div class="row footer-theme2">
              <div class="col-lg-3">
                <div class="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div class="footer-contant">
                  <div class="footer-logo">
                    <img :src='"@/assets/images/gym/logo.png"' alt="logo" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </div>
              <div class="col-lg-6 subscribe-wrapper">
                <div class="subscribe-block">
                  <h2>newsletter</h2>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Enter your email"
                      />
                      <button type="submit" class="btn btn-solid btn-gradient">subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-details">
                    <li>Multikart Demo Store, Demo store India 345-659</li>
                    <li>Call Us: 123-456-7898</li>
                    <li>
                      Email Us:
                      <a href="#">Support@Fiot.com</a>
                    </li>
                    <li>Fax: 123456</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="dark-layout">
        <div class="container">
          <section class="small-section">
            <div class="row footer-theme2">
              <div class="col p-set">
                <div class="footer-link">
                  <div class="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div class="footer-contant">
                    <ul>
                      <li>
                        <a href="#">mens</a>
                      </li>
                      <li>
                        <a href="#">womens</a>
                      </li>
                      <li>
                        <a href="#">clothing</a>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-link-b">
                  <div class="footer-title">
                    <h4>why we choose</h4>
                  </div>
                  <div class="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping & return</a>
                      </li>
                      <li>
                        <a href="#">secure shopping</a>
                      </li>
                      <li>
                        <a href="#">gallary</a>
                      </li>
                      <li>
                        <a href="#">affiliates</a>
                      </li>
                      <li>
                        <a href="#">contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="sub-footer darker-subfooter">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2017-18 themeforest powered by pixelstrap
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/visa.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/mastercard.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/paypal.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/american-express.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/discover.png"' alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <TapTop/>
  </div>
</template>
<script type="text/javascript">
import TapTop from '../widgets/tap-to-top'
export default {
  data() {
    return {
      bgimagepath: require('@/assets/images/gym/bg.jpg')
    }
  },
  components: {
    TapTop
  }
}
</script>
