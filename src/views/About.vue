<template>
  <div class="about">
    <PageHeader title="about me"/>
    <Biography/>
    <Education/>
    <Skills/>
    <More/>
    <Loves/>
  </div>
</template>
<script>
import PageHeader from '@/components/BasePageHeader.vue';
import Biography from '@/components/AboutBiography.vue';
import Education from '@/components/AboutEducation.vue';
import Skills from '@/components/AboutSkills.vue';
import More from '@/components/AboutMore.vue';
import Loves from '@/components/AboutLoves.vue';

export default {
  name: 'About',
  components: {
    PageHeader, Biography, Education, Skills, More, Loves,
  },
};
</script>
<style scoped>
.about {
  margin-bottom: 40px;
}
</style>
