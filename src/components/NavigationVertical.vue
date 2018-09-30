<template>
  <nav class="vertical-sticky-nav">
    <vertical-bar
        :currRoute="currRoute"
    ></vertical-bar>
    <nav-links
        :applyCSS="true"
        @gotCurrRoute="currRoute = $event"
    ></nav-links>
  </nav>
</template>

<script>
import NavLinks from '@/components/NavigationLinks.vue';
import VerticalBar from '@/components/NavigationVerticalBar.vue';

export default {
  name: 'NavigationVertical',
  components: {
    NavLinks, VerticalBar,
  },
  mixins: [],
  props: {

  },
  data: () => ({
    currRoute: null,
  }),
  computed: {

  },
  created() {
    this.currRoute = this.$router.currentRoute.name
    console.log('vertical nav created: ', this.$router.currentRoute.name);
  },
  methods: {
  },
};
</script>

<style scope>
  .vertical-sticky-nav {
    position: relative;
    width: 200px;
    text-align: left;
  }


  .vertical-sticky-nav .nav-link-container {
    margin-left: 88px;
  }


  .vertical-sticky-nav .nav-link {
    margin-bottom: 15px;
  }
</style>
