<template>
  <div>
    <Header />
    <Breadcrumbs title="category" />
    <section class="collection section-b-space pt-0 ratio_square">
      <div class="container">
        <div class="row partition-collection">
          <div class="col-lg-3 col-md-6" v-for="(item, index) in items" :key="index">
            <div class="collection-block">
              <div>
                <img :src="item.imagepath" class="img-fluid" alt="item.title" />
              </div>
              <div class="collection-content">
                <h4>{{item.procount}}</h4>
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
                <a href="javascript:void(0)" class="btn btn-outline">shop now !</a>
              </div>
            </div>
          </div>
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
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/collection/1.jpg'),
          procount: '(30 Products)',
          title: 'Fashion',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/3.jpg'),
          procount: '(12 Products)',
          title: 'kids',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/5.jpg'),
          procount: '(18 Products)',
          title: 'Shoes',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/6.jpg'),
          procount: '(24 Products)',
          title: 'Bags',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/7.jpg'),
          procount: '(24 Products)',
          title: 'Watch',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/8.jpg'),
          procount: '(24 Products)',
          title: 'Flower',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/9.jpg'),
          procount: '(12 Products)',
          title: 'Beauty',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        },
        {
          imagepath: require('@/assets/images/collection/11.jpg'),
          procount: '(12 Products)',
          title: 'Jewellery',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
        }
      ]
    }
  }
}
</script>
