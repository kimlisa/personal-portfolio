<template>
  <nav id="navigation" :class="isMobile ? 'mobile' : 'desktop'">
    <ul class="nav-link-container">
      <li class="nav-link">
        <router-link to="/">home</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/about">about</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/projects">projects</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/contact">contact</router-link>
      </li>
    </ul>
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
  },
  data: () => ({
    currentIcon: '',
  }),
  computed: {

  },
  created() {
    console.log('hello navigation');
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


  .nav-link-container {
    font-size: .88em;
    font-weight: 100;
    list-style-type: none;
    margin: 45px auto 0 auto;
    padding: 0;
    text-align: center;
  }


  .nav-link {
    display: inline-block;
    margin: 0 18px;
  }


  .nav-link a {
    color: #969696;
  }

</style>
