<template>
  <section class="hero header-container"
    :style="{ backgroundImage:
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${coverPath})` }"
  >
    <Navbar :immersive="true"></Navbar>
    <div class="header-content">
      <div class="avatar">
        <img :src="avatarPath" class="my-avatar">
      </div>
      <div class="info">
        <div class="greet">
          Xin chào, tôi là <span class="my-name">{{ myName }}</span>!
        </div>
        <div class="short-title">
          {{ shortTitle }}
        </div>
        <p class="description">
          {{ description }}
        </p>
        <b-collapse :open="false" position="is-bottom">
          <a class="more-info-trigger" slot="trigger" slot-scope="props">
            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
            {{ !props.open ? 'Xem thêm' : 'Xem ít hơn' }}
          </a>
          <div class="more-info">
            <ul>
              <li>Ngày sinh: {{ birthday }}</li>
              <li>Địa chỉ: {{ address }}</li>
              <li>Số điện thoại: {{ phoneNumber }}</li>
              <li>Email: {{ email }}</li>
            </ul>
          </div>
        </b-collapse>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  props: {
    coverPath: String,
    avatarPath: String,
    myName: String,
    shortTitle: String,
    address: String,
    phoneNumber: String,
    birthday: String,
    email: String,
    description: String
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .header-container {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    .navbar {
      position: absolute;
      width: 100%;
    }

    .cover-image {
      filter: brightness(30%);
    }
  }

  .header-content {
    padding: 9rem 3rem;
    display: grid;
    grid-template-areas:
      "avatar info";
    grid-gap: 0.8rem;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%,-50%);

    .avatar {
      grid-area: avatar;
      width: 300px;

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

  .more-info-trigger {
    display: block;
    color: #fff;
    margin-top: 1.1rem;
  }

  .more-info {
    color: #ddd;
    margin-top: 1.1rem;

    li {
      margin-top: 0.4rem;
    }
  }
</style>
