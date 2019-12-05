<template>
  <div>
    <PageHeader :myName="myName"
      :shortTitle="shortTitle"
      :description="description"
      :avatarPath="avatarPath"
      :coverPath="coverPath"
    ></PageHeader>

    <HeroTitle :backgroundImage="require('../assets/skills-section.webp')">
      Kỹ Năng Cá Nhân
    </HeroTitle>

    <section class="section">
      <div class="container">
        <div class="skills">
          <Skill :name="skill.name" :description="skill.description" :evaluations="skill.evaluations" v-for="(skill, index) in skills" :key="index"></Skill>
        </div>
      </div>
    </section>

    <HeroTitle :backgroundImage="require('../assets/experiences-section.jpg')">
      Qúa Khứ & Kinh Nghiệm
    </HeroTitle>

    <section class="section">
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">Khởi đầu</span>
        </header>
        <Timeline v-for="(experience, index) in experiences" :key="index"
          :imagePath="experience.imagePath ? experience.imagePath : null"
          :time="experience.time"
          :content="experience.content"
        ></Timeline>
        <header class="timeline-header">
          <span class="tag is-medium is-info">Hiện tại</span>
        </header>
      </div>
    </section>

    <HeroTitle :backgroundImage="require('../assets/blog-section.jpg')">
      Bài viết của tôi
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
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import HeroTitle from '../components/HeroTitle'
import Skill from '../components/Skill'
import Timeline from '../components/Timeline'
import BlogItem from '../components/BlogItem'

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
      myName: 'Phương Anh',
      shortTitle: 'Nhà phát triển & thiết kế Web',
      description: 'Tên em là Trần Thị Phương Anh. Em sinh ra và lớn lên tại một tỉnh thành nhỏ miền núi Tây Bắc - tỉnh Yên Bái thân thương - nơi có những ngọn núi xa xăm quanh năm phủ trắng sương mù, nơi có những thửa ruộng bậc thang xanh ngắt bao la. Bước chân vào ngành Công nghệ thông tin, em mong muốn một ngày sẽ đủ khả năng để xây dựng quê hương mình thành một vùng đất giàu sang, tươi đẹp hơn.',
      avatarPath: require('../assets/avatar.jpg'),
      coverPath: require('../assets/cover-image.jpg'),
      skills: [
        {
          name: 'Web Backend',
          description: 'Với nhiều năm làm việc trong lĩnh vực thiết kế Web, em có khả năng làm việc với nhiều ngôn ngữ backend khác nhau như: .NET Core, Ruby on Rails, Node.js,...',
          evaluations: [
            {
              name: '.NET Core',
              progress: 90
            },
            {
              name: 'Ruby & Rails',
              progress: 85
            },
            {
              name: 'Javascript & Node.js',
              progress: 75
            }
          ]
        },
        {
          name: 'Web Frontend',
          description: 'Em có khả năng sử dụng thành thạo HTML5, CSS3 cùng các kỹ thuật mới nhất của Frontend như: Flexbox, Grid CSS,... Thông hiểu nhiều loại framework như: ReactJS, VueJS,...',
          evaluations: [
            {
              name: 'HTML, CSS & Javascript',
              progress: 95
            },
            {
              name: 'ReactJS',
              progress: 55
            },
            {
              name: 'VueJS',
              progress: 70
            }
          ]
        },
        {
          name: 'Ngoại ngữ Tiếng Anh',
          description: 'Em có thể đọc và viết Tiếng Anh một cách thành thạo, có khả năng đọc tốt mọi tài liệu chuyên ngành bằng Tiếng Anh. Kỹ năng nghe & nói còn khiêm tốn, tuy nhiên em đang nỗ lực hết mình để cải thiện điều đó.',
          evaluations: [
            {
              name: 'Đọc',
              progress: 95
            },
            {
              name: 'Viết',
              progress: 85
            },
            {
              name: 'Nói',
              progress: 40
            },
            {
              name: 'Nghe',
              progress: 55
            }
          ]
        }
      ],
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
  }
}
</script>

<style lang="scss" scoped>
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .all-blogs {
    padding: 1.1rem;
    display: block;
    text-align: right;
  }
</style>
