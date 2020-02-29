<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="title3">
              <h2 class="title-inner3">{{title}}</h2>
              <div class="line"></div>
            </div>
            <div class="about-text">
              <p>{{text}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'welcome to tool store',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    }
  }
}
</script>
