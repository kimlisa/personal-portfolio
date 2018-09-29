<template>
  <div class="contact">
    <h1>This is contact page</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
    console.log('in conatct', this.prevLink);
  },
  methods: {
  },
};
</script>
