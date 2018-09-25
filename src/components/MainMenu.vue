<template>
  <div id="menu-view" :class="isMobile ? 'mobile' : 'desktop'">
    <header>
      <nav class="top-links">
        <ul>
          <li class="top-link" @click="setIcon('home')"><router-link to="/">home</router-link></li>
          <li class="top-link" @click="setIcon('about')"><router-link to="/about">about</router-link></li>
          <li class="top-link" @click="setIcon('projects')"><router-link to="/projects">projects</router-link></li>
          <li class="top-link" @click="setIcon('contact')"><router-link to="/contact">contact</router-link></li>
        </ul>
      </nav>
    </header>
    <section>
      <my-component
          :is="currentIcon"
          class="main-icon">
      </my-component>
    </section>
    <footer>
      <nav class="bot-links">
        <ul>
          <li class="bot-link">
            <a href="https://github.com/kimlisa" target="_blank">
              <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="bot-link-icon">
              </font-awesome-icon>
              <span v-show="isMobile">GitHub</span>
            </a>
          </li>
          <li class="bot-link">
            <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
              <icon-linked-in class="layered-icon"></icon-linked-in>
              <span v-show="isMobile">LinkedIn</span>
            </a>
          </li>
          <li class="bot-link">
            <a href="#" target="_blank">
              <icon-resume class="layered-icon"></icon-resume>
              <span v-show="isMobile">Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <p>2018 &copy; by Lisa Kim</p>
    </footer>
  </div>
</template>

<script>
import IconHome from '@/components/BaseIconHome.vue';
import IconAbout from '@/components/BaseIconAbout.vue';
import IconProjects from '@/components/BaseIconProjects.vue';
import IconContact from '@/components/BaseIconContact.vue';
import IconLinkedIn from '@/components/BaseIconLayeredLinkedIn.vue';
import IconResume from '@/components/BaseIconLayeredResume.vue';

export default {
  name: 'MainMenu',
  components: {
    IconHome, IconAbout, IconProjects, IconContact, IconLinkedIn, IconResume,
  },
  mixins: [],
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
    isDesktop: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    currentIcon: IconHome,
  }),
  computed: {

  },
  created() {
    console.log('hello mainmenu');
  },
  methods: {
    setIcon(menu) {
      switch (menu) {
        case 'home':
          this.currentIcon = IconHome;
          break;
        case 'about':
          this.currentIcon = IconAbout;
          break;
        case 'projects':
          this.currentIcon = IconProjects;
          break;
        case 'contact':
          this.currentIcon = IconContact;
          break;
        default:
          console.error('In MainMenu.vue setIcon "', menu, '" not defined');
      }
    },
  },
};
</script>

<style>
#menu-view .router-link-exact-active {
  color: #fff;
  font-weight: 400;
  border-bottom: 3px solid #fff;
  padding-bottom: 4px;
}


#menu-view {
  background: #242526;
  color: #fff;
  text-align: center;
  width: 32%;
  position: relative;
  overflow:hidden;
}


#menu-view section {
  align-items: center;
  display: flex;
  height: calc(100% - 250px);
  justify-content: center;
}


#menu-view footer {
  color: #A5A5A5;
  letter-spacing: .08em;
  font-size: .75em;
  font-weight: 100;
}


.bot-link-icon-inner-1 {
  color: #242526;
  font-size: 32px;
}


.bot-link-icon {
  font-size: 48px;
}


.fa-layers {
  display:flex;
  margin-right: 30px;
  top: -12px;
}


.main-icon {
  font-size: 160px;
}


.main-icon svg * {
  fill: url(#icon-gradient);
}


.top-links a,
.bot-links a {
  color: #ababab;
  font-size: 14px;
  font-weight: 100;
  text-decoration: none;
}


.desktop nav {
  width: 100%;
}


.desktop ul {
  padding: 0;
}


.desktop nav li {
  display: inline-block;
}


.top-links {
  margin-top: 40px;
}


.bot-links {
  margin-bottom: 40px;
}


.bot-links li {
  margin: 0 20px;
}


.bot-links li:hover {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);

}


.top-links li {
  margin: 0 15px;
}
</style>
