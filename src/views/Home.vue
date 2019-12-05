<template>
  <div>
    <PageHeader :myName="myName"
      :shortTitle="shortTitle"
      :description="description"
      :address="address"
      :phoneNumber="phoneNumber"
      :birthday="birthday"
      :email="email"
      :avatarPath="avatarPath"
      :coverPath="coverPath"
    ></PageHeader>

    <HeroTitle :backgroundImage="require('../assets/skills-section.webp')">
      Kỹ Năng Cá Nhân
    </HeroTitle>

    <section class="section skills-section"
    >
      <div class="container">
        <div class="skills">
          <Skill :name="skill.name" :description="skill.description"
            :progress="skill.progress" v-for="(skill, index) in skills" :key="index"></Skill>
        </div>
      </div>
    </section>

    <HeroTitle :backgroundImage="require('../assets/experiences-section.jpg')">
      Quá Khứ & Kinh Nghiệm
    </HeroTitle>

    <section class="section">
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">Khởi đầu</span>
        </header>
        <Timeline v-for="(experience, index) in experiences" :key="index"
          :imagePath="experience.imagePath ? experience.imagePath : null"
          :time="experience.time"
          :companyName="experience.companyName"
          :yearOfExperience="experience.yearOfExperience"
          :content="experience.content"
        ></Timeline>
        <header class="timeline-header">
          <span class="tag is-medium is-info">Hiện tại</span>
        </header>
      </div>
    </section>

    <HeroTitle :backgroundImage="require('../assets/blog-section.jpg')">
      Bài Viết Của Tôi
    </HeroTitle>

    <section class="section">
      <div class="container">
        <div class="blog-items">
          <BlogItem v-for="(blogItem, index) in blogItems"
            :id="blogItem.id"
            :key="index"
            :title="blogItem.title"
            :time="blogItem.time"
            :image="blogItem.image"
          >
          </BlogItem>
        </div>

        <router-link to="/blogs" class="all-blogs">
          <b-icon
            icon="arrow-right-drop-circle"
            size="is-small"></b-icon>
            Tất cả bài viết
        </router-link>
      </div>
    </section>
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import HeroTitle from '../components/HeroTitle'
import Skill from '../components/Skill'
import Timeline from '../components/Timeline'
import BlogItem from '../components/BlogItem'
import axios from 'axios'
import dayjs from 'dayjs'

export default {
  name: 'home',
  components: {
    PageHeader,
    HeroTitle,
    Skill,
    Timeline,
    BlogItem
  },

  data () {
    return {
      isLoading: false,
      myName: '...',
      shortTitle: '...',
      description: '...',
      birthday: '...',
      address: '...',
      phoneNumber: '...',
      email: '...',
      avatarPath: require('../assets/avatar.jpg'),
      coverPath: require('../assets/cover-image.jpg'),
      skills: [],
      experiences: [],
      blogItems: []
    }
  },

  methods: {
    async loadProfileData () {
      try {
        const res = await axios.get('https://apiblogprofile20191205011822.azurewebsites.net/api/InfoProfile?Info_ID=1&PageSize=0&Size=1')
        const data = res.data.Data[0]
        this.myName = data.FullName
        this.shortTitle = data.Slogan
        this.description = data.Description
        this.phoneNumber = data.NumberPhone
        this.address = data.Adress
        this.email = data.Email
        this.birthday = dayjs(data.Dob).format('DD/MM/YYYY')
        this.skills = data.Skills.map(item => ({
          name: item.NameSkill,
          description: item.Description,
          progress: item.Percent
        }))
        this.experiences = data.WorkExps.map(item => ({
          companyName: item.CompanyName,
          content: item.Description,
          yearOfExperience: item.YearExp
        }))
      } finally {
        this.isLoading = false
      }
    },

    async loadFewBlogPosts () {
      const res = await axios.get(`https://apiblogprofile20191205011822.azurewebsites.net/api/BlogApi?PageSize=0&Size=3`)
      const data = res.data.Data
      this.blogItems = data.map(item => {
        let coverImageId = null
        if (item.ImageTypes) {
          coverImageId = item.ImageTypes.find(item => {
            const typeImage = parseInt(item.TypeImage.trim())
            return typeImage === 1
          })
          if (coverImageId) {
            coverImageId = coverImageId.ImageID
          }
        }

        if (coverImageId) {
          return {
            id: item.BlogID,
            title: item.TitleBlog,
            time: item.PublicationDate,
            image: `https://apiblogprofile20191205011822.azurewebsites.net/Images/GetBaseImage/${coverImageId}`
          }
        } else {
          return {
            id: item.BlogID,
            title: item.TitleBlog,
            time: item.PublicationDate,
            image: null
          }
        }
      })
    }
  },

  mounted () {
    this.loadProfileData()
    this.loadFewBlogPosts()
  }
}
</script>

<style lang="scss" scoped>
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .skills-section {
    background: rgba(255,255,255,1);
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 28%, rgba(246,246,246,1) 53%, rgba(244,244,244,1) 62%, rgba(237,237,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
  }

  .all-blogs {
    padding: 1.1rem;
    display: block;
    text-align: right;
  }
</style>
