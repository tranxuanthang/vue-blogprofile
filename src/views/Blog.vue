<template>
  <div class="blog-page">
    <HeroTitle :isFixed="false" :backgroundImage="require('../assets/blog-section.jpg')">
      <Navbar slot="header" :immersive="false"></Navbar>
      Bài viết của tôi
    </HeroTitle>

    <section class="section">
      <div class="container">
        <div class="blog-items">
          <BlogItem v-for="(blogItem, index) in blogItems"
            :key="index"
            :title="blogItem.title"
            :time="blogItem.time"
            :image="blogItem.image"
          >
          </BlogItem>
        </div>

        <b-pagination
          :total="totalItems"
          :current.sync="currentPage"
          :per-page="perPage"
          icon-prev="chevron-left"
          icon-next="chevron-right"
        >
        </b-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import HeroTitle from '../components/HeroTitle'
import BlogItem from '../components/BlogItem'

export default {
  name: 'blog',

  data () {
    return {
      totalItems: 35,
      currentPage: 1,
      perPage: 10,

      blogItems: [
        {
          title: 'Neque libero convallis eget',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/karl-magnuson.jpg'
        },
        {
          title: 'Tege sillavnoc orebil euqen',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/etienne-bosiger.jpg'
        },
        {
          title: 'Oirje osdk jggg lskdsdsd meee',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/saksham-gangwar.jpg'
        }
      ]
    }
  },

  components: {
    Navbar,
    HeroTitle,
    BlogItem
  }
}
</script>

<style lang="scss">
  .pagination-list {
    margin: 1.3rem 0;
  }
</style>
