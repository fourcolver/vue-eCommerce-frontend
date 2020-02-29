<template>
  <div>
    <header class="header-gym">
      <div class="mobile-fix-option"></div>
      <TopBar />

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/shop/fashion'}">
                    <img :src='"@/assets/images/gym/logo.png"' class="img-fluid" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <Nav />
                <HeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import TopBar from '../widgets/topbar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
export default {
  components: {
    TopBar,
    Nav,
    HeaderWidgets
  }
}
</script>
