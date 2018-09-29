<template>
  <nav
      class="desktop-navigation"
      v-if="!isMobile"
      :class="atHome ? 'horizontal-nav' : 'vertical-sticky-nav'"
  >
    <div class="vertical-bar" v-if="!atHome">
      <ul class="heart-icon-container">
        <li class="heart-icon" ref="home">
          <font-awesome-icon icon="heart"></font-awesome-icon>
        </li>
        <li class="heart-icon" ref="about">
          <font-awesome-icon icon="heart"></font-awesome-icon>
        </li>
        <li class="heart-icon" ref="projects">
          <font-awesome-icon icon="heart"></font-awesome-icon>
        </li>
        <li class="heart-icon" ref="contact">
          <font-awesome-icon icon="heart"></font-awesome-icon>
        </li>
      </ul>
    </div>
    <ul class="nav-link-container">
      <li class="nav-link">
        <router-link to="/"
        >home</router-link>
      </li>
      <li class="nav-link">
        <router-link
            :to="{name: 'about', params: {prevLink: aboutEl}}"
        >about</router-link>
      </li>
      <li class="nav-link">
        <router-link
            :to="{name: 'projects', params: {prevLink: projectsEl}}"
        >projects</router-link>
      </li>
      <li class="nav-link">
        <router-link
            :to="{name: 'contact', params: {prevLink: contactEl}}"
        >contact</router-link>
      </li>
    </ul>
  </nav>
  <nav class="mobile-navigation" v-else>
    <p>mobile navigation bar</p>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  components: {
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
    atHome: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    prevRoute: '',
    aboutEl: '',
    projectsEl: '',
    contactEl: '',
  }),
  computed: {

  },
  mounted() {
    if (!this.atHome) {
      this.aboutEl = this.$refs.about;
      this.projectsEl = this.$refs.projects;
      this.contactEl = this.$refs.contact;
    }

  },
  methods: {
  },
};
</script>

<style scoped>
  .router-link-exact-active {
    color: #4e4e4e;
    font-weight: 600;
  }


  .horizontal-nav {
    text-align: center;
  }


  .vertical-sticky-nav {
    position: relative;
    width: 200px;
    text-align: left;
  }
  .nav-link-container {
    font-size: .88em;
    font-weight: 100;
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-top: 45px;
  }


  .vertical-sticky-nav .nav-link-container {
    margin-left: 88px;
  }

  .vertical-sticky-nav .nav-link {
    margin-bottom: 15px;
  }


  .vertical-bar {
    position: absolute;
    background: #D8D8D8;
    z-index: 2;
    width: 8px;
    height: 210px;
    border-radius: 5px;
    top: -10px;
    left: 40px;
  }


  .horizontal-nav .nav-link {
    display: inline-block;
    margin: 0 18px;
  }


  .nav-link a {
    color: #969696;
  }

  .heart-icon-container {
    list-style-type: none;
    position: absolute;
    left:-52px;
    font-size: 32px;
    top: 7px;
  }

  .heart-icon {
    height: 40px;
    opacity: 0;
  }

  .fa-heart {
  }

</style>
