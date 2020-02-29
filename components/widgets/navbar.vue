<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }" >
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>
          <li v-for="(menuItem, index) in menulist" :key="index" :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'">
            <a href="#" class="nav-link" @click="setActive(menuItem.title)">
              {{menuItem.title}}
              <span class="sub-arrow" v-if="menuItem.children || menuItem.megamenu"></span>
            </a>
            <ul class="nav-submenu" :class="{ opensubmenu: isActive(menuItem.title) }" v-if="menuItem.children">
              <li v-for="(childrenItem, index) in menuItem.children" :key="index">
                <a href="javascript:void(0)" @click="setActiveChild(childrenItem.title)" v-if="childrenItem.children">
                  {{childrenItem.title}}
                  <span class="sub-arrow" v-if="childrenItem.children"></span>
                </a>
                <nuxt-link v-else :to="{ path: childrenItem.path}"  @click="setActiveChild(childrenItem.title)">
                  {{childrenItem.title}}
                </nuxt-link>
                <ul class="nav-sub-childmenu" :class="{ opensubchild: isActiveChild(childrenItem.title) }" v-if="childrenItem.children">
                  <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                    <nuxt-link :to="{ path: childrenSubItem.path}">
                      {{childrenSubItem.title}}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="mega-menu-container" :class="{ opensubmenu: isActive('portfolio') }" v-if="menuItem.megamenu">
              <div class="container">
                <div class="row">
                  <div class="col mega-box"  v-for="(childrenItem, index) in menuItem.children" :key="index">
                    <div class="link-section">
                      <div class="menu-title" @click="setActivesubmega('portfolio')">
                        <h5>{{childrenItem.title}}
                          <span class="sub-arrow"></span>
                        </h5>
                      </div>
                      <div class="menu-content" :class="{ opensubmegamenu: isActivesubmega('portfolio') }">
                        <ul>
                          <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                            <nuxt-link :to="{ path: childrenSubItem.path}">
                              {{childrenSubItem.title}}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      openmobilenav: false,
      subnav: false,
      activeItem: 'home',
      activeChildItem: 'fashion 1',
      activemegaChild: 'portfolio'
    }
  },
  computed: {
    ...mapState({
      menulist: state => state.menu.data
    })
  },
  methods: {
    mobilenav: function () {
      this.openmobilenav = !this.openmobilenav
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    isActiveChild: function (menuChildItem) {
      return this.activeChildItem === menuChildItem
    },
    setActiveChild: function (menuChildItem) {
      console.log(menuChildItem)
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = ''
      } else {
        this.activeChildItem = menuChildItem
      }
    },
    isActivesubmega: function (megaChildItem) {
      return this.activemegaChild === megaChildItem
    },
    setActivesubmega: function (megaChildItem) {
      if (this.activemegaChild === megaChildItem) {
        this.activemegaChild = ''
      } else {
        this.activemegaChild = megaChildItem
      }
    }
  }
}
</script>
