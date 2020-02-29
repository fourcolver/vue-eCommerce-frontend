<template>
  <div>
    <footer>
      <div class="white-layout">
        <div class="container">
          <section class="small-section">
            <div class="row">
              <div class="col-xl-6 offset-xl-3">
                <div class="subscribe">
                  <h4>newsletter</h4>
                  <form class="form-inline subscribe-form classic-form">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button type="submit" class="btn btn-solid">subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="section-b-space darken-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img :src='"@/assets/images/icon/layout4/footerlogo.png"' alt="logo" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div class="footer-social">
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
              </div>
            </div>
            <div class="col offset-xl-1">
              <div class="sub-title">
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
            </div>
            <div class="col">
              <div class="sub-title">
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
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker"></i>Multikart Demo Store, Demo store India 345-659
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>Call Us: 123-456-7898
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>Email Us:
                      <a href="#">Support@Fiot.com</a>
                    </li>
                    <li>
                      <i class="fa fa-fax"></i>Fax: 123456
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer dark-subfooter">
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

<script>
import TapTop from '../widgets/tap-to-top'
export default {
  components: {
    TapTop
  }
}
</script>
