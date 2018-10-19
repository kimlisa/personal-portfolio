<template>
  <nav class="vertical-sticky-nav">
    <VerticalBar
        :currRoute="currRoute"
    />
    <NavLinks
        :applyCSS="true"
        @gotCurrRoute="currRoute = $event"
    />
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
  destroyed() {
    window.scrollTo(0, 0);
  },
  methods: {
  },
};
</script>

<style scoped>
  .vertical-sticky-nav {
    position: fixed;
    width: 200px;
    text-align: left;
    top: -12px;
  }


  .vertical-sticky-nav >>> .nav-link-container {
    margin-left: 88px;
  }


  .vertical-sticky-nav >>> .nav-link {
    margin-bottom: 15px;
  }
</style>
