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
      isLoading: true,
      myName: '',
      shortTitle: '',
      description: '',
      birthday: '',
      address: '',
      phoneNumber: '',
      email: '',
      avatarPath: require('../assets/avatar.jpg'),
      coverPath: require('../assets/cover-image.jpg'),

      skills: [],

      experiences: [
        {
          imagepath: null,
          time: 'Tháng 2 năm 1998',
          content: '<code>printf("Hello, World!");</code>'
        },
        {
          imagepath: null,
          time: 'Tháng 9 năm 2016',
          content: `Bắt đầu học tại trường học viện kỹ thuật quân sự, chuyên ngành kỹ thuật phần mềm.<br><img src="${require('../assets/hvktqs.jpg')}" alt="HVKTQS">`
        },
        {
          imagePath: require('../assets/sun-asterisk.jpg'),
          time: 'Tháng 2 năm 2019',
          content: 'Thực tập phát triển Web với Ruby on Rails tại Sun* Education.'
        }
      ],

      blogItems: [
        {
          title: 'Neque libero convallis eget',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/karl-magnuson.jpg'
        },
        {
          title: 'Tege sillavnoc orebil euqen',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/etienne-bosiger.jpg'
        },
        {
          title: 'Oirje osdk jggg lskdsdsd meee',
          time: '2019-12-05T10:57:05+07:00',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/saksham-gangwar.jpg'
        }
      ]
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
    }
  },

  mounted () {
    this.loadProfileData()
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
