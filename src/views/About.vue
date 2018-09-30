<template>
  <div class="about">
    <page-header title="about me"></page-header>
    <page-section :first-section="true">
      <template slot="content">
        <p>
          Hello! My name is Lisa and I am a developer who specializes in the front
          end of development and I love to make designs come alive, interactive,
          responsive and user friendly.
        </p>
        <p>
          I strive to be minimalistic and simple. And I apply this to my life,
          my code, and my design. My coding motto is all about Keeping it Stupid Simple,
          Don’t Repeat Yourself, modularization, and consistency. I like shiny new things
          and am constantly learning to keep up with the ever changing technologies.
        </p>
        <p>
          When I am not coding, learning, and breaking things, I like to play League
          of Legends and bake.
        </p>
      </template>
    </page-section>
    <page-section :add-bg="true">
      <section-header
          slot="header"
          title="education"
      ></section-header>
    </page-section>
  </div>
</template>
<script>
import PageHeader from '@/components/BasePageHeader.vue';
import PageSection from '@/components/BasePageSection.vue';
import SectionHeader from '@/components/BasePageSectionHeader.vue';

export default {
  name: 'About',
  components: {
    PageHeader, PageSection, SectionHeader,
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

  },
  methods: {
  },
};
</script>
<style scoped>

</style>
