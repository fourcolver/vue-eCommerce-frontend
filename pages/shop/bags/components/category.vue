<template>
  <!-- category  -->
  <div class="container category-button">
    <section class="section-b-space border-section border-bottom-0">
      <div class="row partition1">
        <div class="col" v-for="(cat,index) in category" :key="index">
          <a href="#" class="btn btn-outline btn-block">{{ cat.title }}</a>
        </div>
      </div>
    </section>
  </div>
  <!-- category end -->
</template>
<script>
export default {
  data() {
    return {
      category: [
        { title: 'airbag' },
        { title: 'burn bag' },
        { title: 'briefcase' },
        { title: 'carpet bag' },
        { title: 'money bag' },
        { title: 'tucker bag' }
      ]
    }
  }
}
</script>
