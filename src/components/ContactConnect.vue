<template>
  <PageSection title="connect" :centerAlign="true" class="">
    <div slot="content" class="likes">
      <a href="https://github.com/kimlisa" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']" class="sm-icon"/>
      </a>
      <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'linkedin-in']" class="sm-icon"/>
      </a>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';

export default {
  name: 'ContactConnect',
  components: {
    PageSection,
  },
};
</script>

<style scoped>

</style>
