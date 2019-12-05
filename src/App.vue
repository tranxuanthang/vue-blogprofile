<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~buefy/dist/buefy.css';
  @import '~bulma-timeline/dist/css/bulma-timeline.min.css';

  .blog-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
</style>
