<template>
  <b-navbar wrapper-class="container" spaced class="immersive">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>BlogProfile</strong>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Trang chủ
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/blogs' }">
        Blog
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: {
    immersive: Boolean
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: #fff;
  }

  .navbar-brand a:hover {
    color: #fff;
  }

  .immersive {
    background: rgba(0,0,0,.2);
  }
</style>
