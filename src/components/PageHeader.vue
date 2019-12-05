<template>
    <section class="hero parallax-container">
      <Navbar :immersive="true"></Navbar>
      <div class="parallax-content">
        <div class="avatar">
          <img :src="avatarPath" class="my-avatar">
        </div>
        <div class="info">
          <div class="greet">
            Xin chào, em là <span class="my-name">{{ myName }}</span>!
          </div>
          <div class="short-title">
            {{ shortTitle }}
          </div>
          <p class="description">
            {{ description }}
          </p>
        </div>
      </div>
      <parallax :sectionHeight="50" :speedFactor="0.3">
        <img :src="coverPath" class="cover-image" alt="Cover top image">
      </parallax>
    </section>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Navbar from './Navbar'

export default {
  props: {
    coverPath: String,
    avatarPath: String,
    myName: String,
    shortTitle: String,
    description: String
  },
  components: {
    Parallax,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .parallax-container {
    position: relative;

    .navbar {
      position: absolute;
      width: 100%;
    }

    .cover-image {
      filter: brightness(30%);
    }
  }

  .parallax-content {
    padding: 3rem;
    display: grid;
    grid-template-areas:
      "avatar info";
    grid-gap: 0.8rem;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);

    .avatar {
      grid-area: avatar;

      .my-avatar {
        border-radius: 50%;
        width: 300px;
      }
    }

    .info {
      grid-area: info;

      .greet {
        font-size: 4rem;
        color: #eee;
      }

      .short-title {
        font-size: 1.6rem;
        color: #ddd;
      }

      .description {
        margin-top: 0.3rem;
        color: #ddd;
      }

      .my-name {
        font-weight: bold;
        opacity: 0.6;
      }
    }
  }
</style>
