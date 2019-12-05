<template>
  <div class="blog-page">
  <section class="hero hero-heading is-bold is-medium is-primary">
    <div class="hero-head">
      <Navbar :immersive="false"></Navbar>
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>

    <section class="section">
      <div class="container blog-content">
        {{ content }}
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },

  components: {
    Navbar
  },

  methods: {
    async getBlogPost () {
      const res = await axios.get(`https://apiblogprofile20191205011822.azurewebsites.net/api/BlogApi/${this.$route.params.id}`)
      const blogItem = res.data
      this.title = blogItem.TitleBlog
      this.content = blogItem.Content.replace(/\\n\\n/g, '\n\n')
    }
  },

  mounted () {
    this.getBlogPost()
  }
}
</script>

<style lang="scss" scoped>
  .blog-content {
    white-space: pre-line;
  }
</style>
