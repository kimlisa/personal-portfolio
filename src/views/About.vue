<template>
  <div class="about">
    this is about page
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {},
  mixins: [],
  props: {
    prevLink: {},
  },
  data: () => ({
    test: '',
  }),
  computed: {

  },
  created() {

  },
  mounted() {
    console.log('in about: ', this.prevLink);
    console.log('currentlink: ', this.$router.currentRoute.name);
    // const currentLink = this.$router.currentRoute.name
    // if (this.prevLink !== null && this.prevLink !== undefined && this.prevLink.length > 0) {
    //   console.log('removed el: ', document.getElementById(this.prevLink).style.opacity = '0');
    // }
    // console.log('element: ', document.getElementById(currentLink).style.opacity = '1');
  },
  methods: {
  },
};
</script>
<style scoped>

</style>
