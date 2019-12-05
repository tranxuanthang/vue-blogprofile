<template>
  <a class="blog-item"
    v-bind:style="{ backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${image})` }"
    >
    <div class="blog-title">
      {{ title }}
    </div>
    <div class="blog-meta">
      {{ time | relativeTime }}
    </div>
  </a>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default {
  props: {
    title: String,
    time: String,
    image: String
  },
  filters: {
    relativeTime: (timeStr) => {
      return dayjs(timeStr).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-item {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background-size: cover;
    padding: 1.2rem;

    .blog-title {
      font-weight: bold;
      color: #eee;
      font-size: 2rem;
    }

    .blog-meta {
      color: #ccc;
      font-weight: x-small;
      font-size: 1rem;
      text-align: right;
    }
  }
</style>
