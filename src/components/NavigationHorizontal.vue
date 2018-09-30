<template>
  <nav class="horizontal-nav">
    <transition name="fade-in-down">
      <nav-links v-if="showNav"></nav-links>
    </transition>
  </nav>
</template>

<script>
import NavLinks from '@/components/NavigationLinks.vue';

export default {
  name: 'NavigationalHorizontal',
  components: {
    NavLinks,
  },
  mixins: [],
  props: {
    showNav: {
      type: Boolean,
    },
  },
  data: () => ({
    test: '',
  }),
  computed: {

  },
  created() {
    console.log('horizontal nav created');
  },
  methods: {
  },
};
</script>

<style scope>
  .horizontal-nav {
    text-align: center;
  }


  .horizontal-nav .nav-link {
    display: inline-block;
    margin: 0 18px;
  }
</style>
