<template>
  <div>
    <Header />
    <Breadcrumbs title="Portfolio gallery" />
    <section class="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
      <div class="container">
        <div align="center" id="form1">
          <button
            class="filter-button project_button"
            :class="{ active: isActive('all') }"
            data-filter="all"
            @click="updateFilter('all')"
          >All</button>
          <button
            class="filter-button project_button"
            :class="{ active: isActive('fashion') }"
            data-filter="fashion"
            @click="updateFilter('fashion')"
          >Fashion</button>
          <button
            class="filter-button project_button"
            :class="{ active: isActive('bags') }"
            data-filter="bags"
            @click="updateFilter('bags')"
          >Bags</button>
          <button
            class="filter-button project_button"
            :class="{ active: isActive('shoes') }"
            data-filter="shoes"
            @click="updateFilter('shoes')"
          >Shoes</button>
          <button
            class="filter-button project_button"
            :class="{ active: isActive('watch') }"
            data-filter="watch"
            @click="updateFilter('watch')"
          >Watch</button>
        </div>
        <div class="row zoom-gallery">
          <div
            class="isotopeSelector filter fashion col-sm-3"
            v-for="(item, index) in filteredImages"
            :key="index"
          >
            <div class="overlay">
              <div class="border-portfolio">
                <a href="javascript:void(0)" @click="openGallery(index)">
                  <div class="overlay-background">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                  <img v-lazy="item.src" class="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <LightBox
        :images="filteredImages"
        ref="lightbox"
        :show-caption="false"
        :show-light-box="false"
      >
      </LightBox>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import LightBox from 'vue-image-lightbox'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    LightBox
  },
  data() {
    return {
      galleryFilter: 'all',
      images: [
        {
          id: 1,
          title: 'Slim Fit Cotton Shirt',
          alt: 'established',
          filter: 'fashion',
          thumb: require('@/assets/images/portfolio/grid/1.jpg'),
          src: require('@/assets/images/portfolio/grid/1.jpg')
        },
        {
          id: 2,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          thumb: require('@/assets/images/portfolio/grid/2.jpg'),
          src: require('@/assets/images/portfolio/grid/2.jpg')
        },
        {
          id: 3,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          thumb: require('@/assets/images/portfolio/grid/3.jpg'),
          src: require('@/assets/images/portfolio/grid/3.jpg')
        },
        {
          id: 4,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: require('@/assets/images/portfolio/grid/4.jpg'),
          src: require('@/assets/images/portfolio/grid/4.jpg')
        },
        {
          id: 5,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: require('@/assets/images/portfolio/grid/5.jpg'),
          src: require('@/assets/images/portfolio/grid/5.jpg')
        },
        {
          id: 6,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: require('@/assets/images/portfolio/grid/6.jpg'),
          src: require('@/assets/images/portfolio/grid/6.jpg')
        },
        {
          id: 7,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: require('@/assets/images/portfolio/grid/7.jpg'),
          src: require('@/assets/images/portfolio/grid/7.jpg')
        },
        {
          id: 8,
          title: 'trim dress',
          alt: 'readable',
          filter: 'watch',
          thumb: require('@/assets/images/portfolio/grid/8.jpg'),
          src: require('@/assets/images/portfolio/grid/8.jpg')
        }
      ]
    }
  },
  computed: {
    filteredImages: function () {
      if (this.galleryFilter === 'all') {
        return this.images
      } else {
        return this.images.filter(data => data.filter === this.galleryFilter)
      }
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.galleryFilter === menuItem
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>
