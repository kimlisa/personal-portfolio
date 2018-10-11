<template>
  <div class="projects">
    <PageHeader title="projects"/>
  </div>
</template>

<script>
import PageHeader from '@/components/BasePageHeader.vue';

export default {
  name: 'Projects',
  components: {
    PageHeader,
  },
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
