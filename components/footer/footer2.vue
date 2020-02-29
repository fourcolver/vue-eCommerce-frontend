<template>
<div>
  <!-- footer -->
  <footer>
    <div class="white-layout">
      <section class="p-0">
        <div class="container-fluid">
          <div class="row footer-theme2 section-light footer-border">
            <div class="col">
              <div class="footer-block">
                <div class="footer-container">
                  <div class="footer-title footer-mobile-title">
                    <h4>about</h4>
                  </div>
                  <div class="footer-contant">
                    <div class="footer-logo">
                      <img :src='"@/assets/images/icon/layout2/logo.png"' alt="logo">
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
                  </div>
                </div>
              </div>
            </div>
            <div class="col form-p p-0">
              <div class="footer-block">
                <div class="subscribe-white">
                  <h2>newsletter</h2>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput"
                        placeholder="Enter your email"
                      >
                      <button type="submit" class="btn btn-solid black-btn">subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="footer-block">
                <div class="footer-container">
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
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="white-layout box-layout">
      <div class="container">
        <section class="small-section">
          <div class="row footer-theme2">
            <div class="col">
              <div class="footer-link link-white">
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
                    <img :src='"@/assets/images/icon/visa.png"' alt>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src='"@/assets/images/icon/mastercard.png"' alt>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src='"@/assets/images/icon/paypal.png"' alt>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src='"@/assets/images/icon/american-express.png"' alt>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src='"@/assets/images/icon/discover.png"' alt>
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
