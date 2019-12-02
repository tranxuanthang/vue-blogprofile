<template>
  <b-navbar wrapper-class="container" spaced transparent>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Giới thiệu bản thân
      </b-navbar-item>
      <b-navbar-item href="#">
        Kỹ năng
      </b-navbar-item>
      <b-navbar-item href="#">
        Kinh nghiệm
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>
