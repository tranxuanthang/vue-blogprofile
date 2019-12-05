<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~buefy/dist/buefy.css';
  @import '~bulma-timeline/dist/css/bulma-timeline.min.css';

  .loading-overlay .loading-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background:
      rgba(255, 255, 255, 1);
  }

  .blog-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
</style>
