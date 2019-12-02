<template>
  <div class="timeline-item is-warning">
    <div class="timeline-marker is-primary is-image is-32x32" v-if="imagePath">
      <img :src="imagePath">
    </div>
    <div class="timeline-marker is-primary" v-else>
    </div>
    <div class="timeline-content">
      <p class="heading">{{ time }}</p>
      <p><span v-html="content"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: String,
    time: String,
    content: String
  }
}
</script>
