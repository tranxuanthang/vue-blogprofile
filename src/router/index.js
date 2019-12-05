import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogContent from '../views/BlogContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blogs/:page?',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog-content/:id',
    name: 'blog-content',
    component: BlogContent
  }
]

const router = new VueRouter({
  routes
})

export default router
