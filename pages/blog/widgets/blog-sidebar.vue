<template>
      <div class="col-xl-3 col-lg-4 col-md-5">
      <div class="blog-sidebar">
        <div class="theme-card">
          <h4>Recent Blog</h4>
          <ul class="recent-blog">
            <li v-for="(blog,index) in bloglist.slice(0, 6)" :key="index">
              <div class="media">
                <img :src="getImgUrl(blog.images[0])" class="img-fluid" alt />
                <div class="media-body align-self-center">
                  <h6>{{ blog.date }}</h6>
                  <p>{{ blog.title }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="theme-card">
          <h4>Popular Tags</h4>
          <ul class="popular-tag">
            <li v-for="(tag,index) in getblogtags" :key="index">
              <span>{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      bloglist: state => state.blog.bloglist
    }),
    getblogtags() {
      return this.$store.getters['blog/getblogTag']
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/blog/' + path)
    }
  }
}
</script>
