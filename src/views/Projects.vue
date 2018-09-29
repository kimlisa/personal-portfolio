<template>
  <div class="projects">
    <h1>This is projects page</h1>
  </div>
</template>

<script>
export default {
  name: 'Projects',
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
    console.log('in projects: ', this.prevLink);

  },
  methods: {
  },
};
</script>
