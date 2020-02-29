<template>
  <div>
    <!-- theme setting -->
    <a href="javascript:void(0)">
      <div class="setting-sidebar" id="setting-icon" @click="openlayoutSidebar()">
        <div>
          <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
      </div>
    </a>
    <div id="setting_box" class="setting-box" :class="{ opensetting:layoutsidebar }">
      <a href="javascript:void(0)" class="overlay" @click="closelayoutSidebar()"></a>
      <div class="setting_box_body">
        <div>
          <div class="sidebar-back text-left" @click="closelayoutSidebar()">
            <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
          </div>
        </div>
        <div class="setting-body">
          <div class="setting-title" @click="opensettingcontent('layout')">
            <h4>
              layout
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('layout') }">
            <div class="row demo-section">
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo1"></div>
                  <div class="demo-text">
                    <h4>Fashion</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/fashion' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo44">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>gym</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/gym' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo45">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>tools</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/tools' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo48">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>pets</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/pets' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo51">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>jewellery</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/jewellery' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo2"></div>
                  <div class="demo-text">
                    <h4>Fashion</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/fashion-2' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo3"></div>
                  <div class="demo-text">
                    <h4>Fashion</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/fashion-3' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo4"></div>
                  <div class="demo-text">
                    <h4>Shoes</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/shoes' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo5"></div>
                  <div class="demo-text">
                    <h4>Bags</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/bags' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo6"></div>
                  <div class="demo-text">
                    <h4>Watch</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/watch' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo7"></div>
                  <div class="demo-text">
                    <h4>Kids</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/kids' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo8"></div>
                  <div class="demo-text">
                    <h4>Flower</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/flower' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo10"></div>
                  <div class="demo-text">
                    <h4>Vegetables</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/vegetables' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo11"></div>
                  <div class="demo-text">
                    <h4>Beauty</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/beauty' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo16"></div>
                  <div class="demo-text">
                    <h4>Electronic</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/electronics-1' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects mb-0">
                <div class="set-position">
                  <div class="layout-container demo21"></div>
                  <div class="demo-text">
                    <h4>Furniture</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/shop/furniture' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="setting-title" @click="opensettingcontent('shop')">
            <h4>
              shop
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('shop') }">
            <div class="row demo-section">
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo22"></div>
                  <div class="demo-text">
                    <h4>left sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/leftsidebar/all' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo24"></div>
                  <div class="demo-text">
                    <h4>right sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/right-sidebar' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo23"></div>
                  <div class="demo-text">
                    <h4>no sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/no-sidebar' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo25"></div>
                  <div class="demo-text">
                    <h4>popup</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/sidebar-popup' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo52">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>metro</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/metro' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo53">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>full width</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/full-width' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo54"></div>
                  <div class="demo-text">
                    <h4>three grid</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/three-grid' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects mb-0">
                <div class="set-position">
                  <div class="layout-container demo55"></div>
                  <div class="demo-text">
                    <h4>six grid</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/six-grid' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects mb-0">
                <div class="set-position">
                  <div class="layout-container demo56"></div>
                  <div class="demo-text">
                    <h4>list view</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/collection/list-view' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="setting-title" @click="opensettingcontent('product')">
            <h4>
              product
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('product') }">
            <div class="row demo-section">
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo40">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>four image</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/four-image' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo33"></div>
                  <div class="demo-text">
                    <h4>left sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/sidebar/1' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo36"></div>
                  <div class="demo-text">
                    <h4>right sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/sidebar/right-sidebar' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo34"></div>
                  <div class="demo-text">
                    <h4>no sidebar</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/sidebar/no-sidebar' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo41">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>bundle</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/bundle-product' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo32"></div>
                  <div class="demo-text">
                    <h4>left image</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/thumbnail-image/left-image' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo35"></div>
                  <div class="demo-text">
                    <h4>right image</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/thumbnail-image/right-image' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo31">
                    <div class="ribbon-1">
                      <span>n</span>
                      <span>e</span>
                      <span>w</span>
                    </div>
                  </div>
                  <div class="demo-text">
                    <h4>image outside</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/thumbnail-image/image-outside' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo27"></div>
                  <div class="demo-text">
                    <h4>3-col left</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/three-column/thumbnail-left' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo28"></div>
                  <div class="demo-text">
                    <h4>3-col right</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/three-column/thumbnail-right' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-12 text-center demo-effects">
                <div class="set-position">
                  <div class="layout-container demo29"></div>
                  <div class="demo-text">
                    <h4>3-col bottom</h4>
                    <div class="btn-group demo-btn" role="group" aria-label="Basic example">
                      <nuxt-link :to="{ path: '/product/three-column/thumbnail-bottom' }" class="btn new-tab-btn" target="_blank">Preview</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="setting-title" @click="opensettingcontent('color option')">
            <h4>
              color option
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('color option') }">
            <ul class="color-box">
              <li class="active">
                <a href="javascript:void(0)" class="color1" @click="customizeThemeColor('color-1')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color2" @click="customizeThemeColor('color-2')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color3" @click="customizeThemeColor('color-3')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color4" @click="customizeThemeColor('color-4')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color5" @click="customizeThemeColor('color-5')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color6" @click="customizeThemeColor('color-6')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color7" @click="customizeThemeColor('color-7')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color8" @click="customizeThemeColor('color-8')"></a>
              </li>
              <li>
                <a href="javascript:void(0)" class="color9" @click="customizeThemeColor('color-9')"></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color10"
                  @click="customizeThemeColor('color-10')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color11"
                  @click="customizeThemeColor('color-11')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color12"
                  @click="customizeThemeColor('color-12')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color13"
                  @click="customizeThemeColor('color-13')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color14"
                  @click="customizeThemeColor('color-14')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color15"
                  @click="customizeThemeColor('color-15')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color16"
                  @click="customizeThemeColor('color-16')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color17"
                  @click="customizeThemeColor('color-17')"
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="color18"
                  @click="customizeThemeColor('color-18')"
                ></a>
              </li>
            </ul>
          </div>
          <div class="setting-title" @click="opensettingcontent('rtl')">
            <h4>
              RTL
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('rtl') }">
            <ul class="setting_buttons">
              <li class="active" id="ltr_btn">
                <a
                  href="javascript:void(0)"
                  @click="customizeLayoutType('')"
                  class="btn setting_btn"
                >LTR</a>
              </li>
              <li id="rtl_btn">
                <a
                  href="javascript:void(0)"
                  @click="customizeLayoutType('rtl')"
                  class="btn setting_btn"
                >RTL</a>
              </li>
            </ul>
          </div>
          <div class="buy_btn">
            <a
              href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967?s_rank=1"
              target="_blank"
              class="btn btn-block purchase_btn"
            >
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> purchase Multikart now!
            </a>
            <a
              href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
              target="_blank"
              class="btn btn-block purchase_btn"
            >
              <img src="../../assets/images/icon/angular.png" alt class="img-fluid" /> Multikart Angular
            </a>
            <a
              href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=2"
              target="_blank"
              class="btn btn-block purchase_btn"
            >
              <img src="../../assets/images/icon/react.png" alt class="img-fluid" /> Multikart React
            </a>
            <a
              href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
              target="_blank"
              class="btn btn-block purchase_btn"
            >
              <img src="../../assets/images/icon/shopify.png" alt class="img-fluid" /> Multikart Shopify
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- theme setting -->
    <div class="sidebar-btn dark-light-btn">
      <div class="dark-light">
        <div class="theme-layout-version" @click="customizeLayoutVersion()">Dark</div>
      </div>
    </div>

    <!-- Copy Config -->
    <div class="addcart_btm_popup" id="fixed_cart_icon">
      <a href="#" class="fixed_cart">
        <i
          class="fa fa-clone"
          aria-hidden="true"
          v-b-tooltip.hover
          title="Configuration"
          @click="$bvModal.show('bv-modal-example')"
        ></i>
      </a>
    </div>

    <!-- Config Popup -->
    <b-modal id="bv-modal-example" centered hide-footer hide-header>
      <button class="close" type="button" @click="$bvModal.hide('bv-modal-example')">
        <span>×</span>
      </button>
      <div class="modal-header modal-copy-header">
           <h5 class="headerTitle mb-0">Customizer configuration</h5>
      </div>
      <div class="d-block config-popup">
         <p>To replace our design with your desired theme. Please do configuration as mention in </p>
         <p> <b> Path : data > config.json </b> </p>
      <pre><code>{{ layout }}</code></pre>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      layoutsidebar: false,
      activeItem: 'home',
      layoutType: 'ltr',
      modalShow: false
    }
  },
  computed: {
    ...mapState({
      layout: state => state.layout.layout
    })
  },
  created() {
    this.$store.dispatch('layout/set')
  },
  methods: {
    openlayoutSidebar() {
      this.layoutsidebar = true
    },
    closelayoutSidebar() {
      this.layoutsidebar = false
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    opensettingcontent: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    customizeLayoutType(val) {
      this.$store.dispatch('layout/setLayoutType', val)
      this.layoutType = val
    },
    customizeThemeColor(val) {
      this.$store.dispatch('layout/setColorScheme', val)
    },
    customizeLayoutVersion() {
      this.$store.dispatch('layout/setLayoutVersion')
    }
  }
}
</script>
