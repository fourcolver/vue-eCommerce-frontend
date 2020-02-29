<template>
  <div>
    <Header />
    <Breadcrumbs title="Blog" />
    <section class="section-b-space blog-page ratio2_3">
      <div class="container">
        <div class="row">
          <!--Blog List start-->
          <div class="col-12">
          <BlogList />
          </div>
          <!--Blog List start-->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import BlogList from './widgets/blog-list'

export default {
  components: {
    Header,
    Breadcrumbs,
    BlogList,
    Footer
  }
}
</script>
