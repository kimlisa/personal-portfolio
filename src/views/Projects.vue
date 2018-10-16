<template>
  <div class="projects">
    <PageHeader title="projects"/>
    <div class="projects__cards">
      <ProjectCard >
        <template slot="title">HWSC Database</template>
        <template slot="description">
          Tool for biologists to add and track data about humpback whales.
        </template>
        <template slot="tools">Vue.js, Microservice, gRPC API, ...</template>
      </ProjectCard>

      <ProjectCard>
        <template slot="title">Portfolio Website</template>
        <template slot="description">
          Who I am and showcasing of my skills and projects.
        </template>
        <template slot="tools">Vue.js, CSS/HTML, ...</template>
      </ProjectCard>
    </div>
  </div>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import PageHeader from '@/components/BasePageHeader.vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  name: 'Projects',
  components: {
    PageHeader, ProjectCard, PageSection,
  },
  mixins: [],
  props: {
    prevLink: {},
  },
  data: () => ({
    modalView: '',
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

<style scoped>
  .projects__cards {
    padding: 45px 0 80px 0;
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 710px;
    justify-content: space-between;
  }
</style>
