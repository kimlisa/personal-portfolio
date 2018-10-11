<template>
  <PageSection :addBg="true" title="location">
    <FlexContent slot="content">
      <div slot="left-content" class="">
        <span class="grad-school">Greater Seattle Area, WA</span><br>
        <FontAwesomeIcon icon="envelope" class="more-icon email"/> kimlisa@uw.edu
      </div>
      <div slot="right-content">
        <FontAwesomeIcon icon="location-arrow" class="section-icon"/>
      </div>
    </FlexContent>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import FlexContent from '@/components/BasePageSectionContentFlex.vue';

export default {
  name: 'ContactLocation',
  components: {
    PageSection, FlexContent,
  },
};
</script>

<style scoped>

</style>
