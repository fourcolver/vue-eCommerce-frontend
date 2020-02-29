<template>
<!-- header start -->
<header>
    <div class="mobile-fix-option"></div>
    <TopBar />
    <div class="container layout3-menu">
        <div class="row">
            <div class="col-sm-12">
                <div class="main-menu">
                        <div class="menu-left around-border">
                            <div class="navbar">
                                <a @click="left_sidebar" >
                                    <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                                </a>
                               <LeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
                            </div>
                            <div class="main-menu-right">
                              <Nav />
                            </div>
                        </div>
                    <div class="absolute-logo">
                        <div class="brand-logo">
                            <a href="#"><img alt="" :src='"@/assets/images/icon/logo/12.png"'></a>
                        </div></div>
                    <div class="">
                        <div class="menu-right pull-right">
                           <HeaderWidgets />
                        </div>
                    </div>
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
