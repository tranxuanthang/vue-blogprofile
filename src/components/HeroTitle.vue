<template>
  <section class="hero hero-heading is-bold is-medium"
    v-bind:style="{ backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${backgroundImage})` }"
    :class="{ 'fixed-background': isFixed }"
  >
    <div class="hero-head">
      <slot name="header">
      </slot>
    </div>
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
    backgroundImage: String,
    isFixed: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero-heading {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: brightness(30%);

    .hero-body {
      .title {
        color: #fff;
      }
    }

    &.fixed-background {
      background-attachment: fixed;
      background-position: center;
    }
  }
</style>
