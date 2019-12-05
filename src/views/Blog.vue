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
            :id="blogItem.id"
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
          @change="onPageChange"
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
import axios from 'axios'

export default {
  name: 'blog',

  data () {
    return {
      totalItems: -1,
      currentPage: 1,
      perPage: 10,
      blogItems: []
    }
  },

  components: {
    Navbar,
    HeroTitle,
    BlogItem
  },

  methods: {
    async getBlogPosts (currentPage, perPage) {
      const res = await axios.get(`https://apiblogprofile20191205011822.azurewebsites.net/api/BlogApi?PageSize=${currentPage - 1}&Size=${perPage}`)
      const data = res.data.Data
      this.blogItems = data.map(item => {
        let coverImageId = null
        if (item.ImageTypes) {
          coverImageId = item.ImageTypes.find(item => {
            const typeImage = parseInt(item.TypeImage.trim())
            return typeImage === 1
          })
          if (coverImageId) {
            coverImageId = coverImageId.ImageID
          }
        }

        if (coverImageId) {
          return {
            id: item.BlogID,
            title: item.TitleBlog,
            time: item.PublicationDate,
            image: `https://apiblogprofile20191205011822.azurewebsites.net/Images/GetBaseImage/${coverImageId}`
          }
        } else {
          return {
            id: item.BlogID,
            title: item.TitleBlog,
            time: item.PublicationDate,
            image: null
          }
        }
      })
      this.totalItems = res.data.SizePage
    },

    onPageChange (value) {
      this.getBlogPosts(value, this.perPage)
      this.$router.push({ name: 'blog', params: { page: value } })
    }
  },

  mounted () {
    if (this.$route.params.page) {
      this.currentPage = this.$route.params.page
    }
    this.getBlogPosts(this.currentPage, this.perPage)
  }
}
</script>

<style lang="scss">
  .pagination-list {
    margin: 1.3rem 0;
  }
</style>
