<template>
  <div>
    <footer class="footer-light pet-layout-footer">
      <div class="white-layout">
        <div class="container">
          <section class="small-section">
            <div class="row footer-theme2">
              <div class="col">
                <div class="footer-link link-white">
                  <div class="footer-brand-logo">
                    <a href="#">
                      <img
                        :src='"@/assets/images/icon/logo/14.png"'
                        class="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div class="social-white">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-rss" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="footer-title footer-mobile-title">
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
                      <li>
                        <a href="#">service</a>
                      </li>
                      <li>
                        <a href="#">cart</a>
                      </li>
                      <li>
                        <a href="#">my order</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">new product</a>
                      </li>
                      <li>
                        <a href="#">featured product</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="sub-footer black-subfooter">
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
                      <img :src='"@/assets/images/icon/visa.png"' alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/mastercard.png"' alt="mastercard" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/paypal.png"' alt="paypal" />
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

<script>
import TapTop from '../widgets/tap-to-top'
export default {
  components: {
    TapTop
  }
}
</script>
