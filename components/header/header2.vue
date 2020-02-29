<template>
  <!-- header start -->
  <header class="header-2">
    <div class="mobile-fix-option"></div>
    <TopBar/>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main-menu border-section border-top-0">
            <div class="menu-left">
              <div class="navbar">
                <a @click="left_sidebar" >
                  <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                </a>
                <LeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
              </div>
            </div>
            <div class="brand-logo layout2-logo">
              <a href="#">
                <img :src='"../../assets/images/icon/layout2/logo.png"' class="img-fluid" alt>
              </a>
            </div>
            <div class="menu-right pull-right">
              <HeaderWidgets/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-nav-center">
            <Nav/>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->
</template>

<script>
import TopBar from '../widgets/topbar'
import LeftSidebar from '../widgets/left-sidebar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
export default {
  data() {
    return {
      leftSidebarVal: false
    }
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
