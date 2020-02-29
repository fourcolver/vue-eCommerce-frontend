<template>
  <div>
    <Header />
    <Breadcrumbs title="Mesonary Fullwidth Portfolio" />
    <section class="filter-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="title1">
              <h2 class="title-inner1">portfolio</h2>
            </div>
            <div class="filter-container isotopeFilters">
              <ul class="list-inline filter">
                <li :class="{ active: isActive('all') }">
                  <a href="javascript:void(0)"  @click="updateFilter('all')">All</a>
                </li>
                <li :class="{ active: isActive('fashion') }">
                  <a href="javascript:void(0)" @click="updateFilter('fashion')">Fashion</a>
                </li>
                <li :class="{ active: isActive('bags') }">
                  <a href="javascript:void(0)" @click="updateFilter('bags')">Bags</a>
                </li>
                <li :class="{ active: isActive('shoes') }">
                  <a href="javascript:void(0)" @click="updateFilter('shoes')">Shoes</a>
                </li>
                <li :class="{ active: isActive('watch') }">
                  <a href="javascript:void(0)" @click="updateFilter('watch')">Watch</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio-section portfolio-padding pt-0 port-col zoom-gallery">
      <div class="container-fluid">
        <no-ssr>
          <div
            v-masonry
            transition-duration="3s"
            item-selector=".item"
            class="masonry-container isotopeContainer row"
          >
            <div
              v-masonry-tile
              class="col-sm-2 isotopeSelector item"
              :key="index"
              v-for="(item, index) in filteredImages"
            >
              <div class="overlay">
                <div class="border-portfolio">
                  <a href="javascript:void(0)">
                    <div class="overlay-background">
                    </div>
                    <img :src="item.imagepath" class="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </no-ssr>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import NoSSR from 'vue-no-ssr'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    'no-ssr': NoSSR
  },
  data() {
    return {
      galleryFilter: 'all',
      imagearray: [
        {
          id: 1,
          title: 'Slim Fit Cotton Shirt',
          alt: 'established',
          filter: 'fashion',
          imagepath: require('@/assets/images/portfolio/metro/1.jpg')
        },
        {
          id: 2,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          imagepath: require('@/assets/images/portfolio/metro/2.jpg')
        },
        {
          id: 3,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          imagepath: require('@/assets/images/portfolio/metro/3.jpg')
        },
        {
          id: 4,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: require('@/assets/images/portfolio/metro/4.jpg')
        },
        {
          id: 5,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: require('@/assets/images/portfolio/metro/5.jpg')
        },
        {
          id: 6,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: require('@/assets/images/portfolio/metro/6.jpg')
        },
        {
          id: 7,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: require('@/assets/images/portfolio/metro/7.jpg')
        },
        {
          id: 8,
          title: 'trim dress',
          alt: 'readable',
          filter: 'watch',
          imagepath: require('@/assets/images/portfolio/metro/8.jpg')
        }
      ]
    }
  },
  computed: {
    filteredImages: function () {
      if (this.galleryFilter === 'all') {
        return this.imagearray
      } else {
        return this.imagearray.filter(
          data => data.filter === this.galleryFilter
        )
      }
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.galleryFilter === menuItem
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName
    }
  }
}
</script>
