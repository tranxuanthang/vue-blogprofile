<template>
  <div class="timeline-item is-warning">
    <div class="timeline-marker is-primary is-image is-32x32" v-if="imagePath">
      <img :src="imagePath">
    </div>
    <div class="timeline-marker is-primary" v-else>
    </div>
    <div class="timeline-content">
      <p v-if="time" class="heading time">{{ time }}</p>
      <p class="heading company-name">{{ companyName }}</p>
      <p class="year-of-experience">{{ yearOfExperience }} năm</p>
      <p class="content"><span v-html="content"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: String,
    time: {
      default: '',
      type: String
    },
    companyName: String,
    yearOfExperience: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
  .time {

  }

  .company-name {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .year-of-experience {
    font-size: small;
    color: #333;
    margin-top: 0.4rem;
  }

  .content {
    margin-top: 0.4rem;
  }
</style>
