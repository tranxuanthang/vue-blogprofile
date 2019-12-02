<template>
  <section class="hero hero-heading is-bold is-medium"
    v-bind:style="{ backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${backgroundImage})` }"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <slot></slot>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    backgroundImage: String
  }
}
</script>

<style lang="scss" scoped>
  .hero-heading {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: brightness(30%);

    .hero-body {
      .title {
        color: #fff;
      }
    }
  }
</style>
