<template>
  <PageSection :add-bg="true" title="more">
    <FlexContent slot="content" class="more-section">
      <div slot="left-content">
        <font-awesome-icon icon="book-open" class="more-icon"></font-awesome-icon>
        <a href="./kimlisa_resume.pdf" target="_blank">
          view resume
        </a><br>
        <font-awesome-icon icon="envelope" class="more-icon email"></font-awesome-icon> kimlisa@uw.edu<br>
        <div class="social-media">
          <font-awesome-icon :icon="['fab', 'github']" class="sm-icon"></font-awesome-icon>
          <font-awesome-icon :icon="['fab', 'linkedin-in']" class="sm-icon"></font-awesome-icon>
        </div>
      </div>
      <div slot="right-content">
        <img src="@/assets/me1.jpg" class="my-photo">
      </div>
    </FlexContent>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import FlexContent from '@/components/BasePageSectionContentFlex.vue';
export default {
  name: 'AboutMore',
  components: { PageSection, FlexContent },
  created() {
  },
};
</script>

<style scoped>
  .my-photo {
    width: 200px;
    border-radius: 50%;
    margin-top: -60px;
  }


  .more-icon {
    font-size: 1.3em;
    margin-right: 5px;
  }

  .more-icon.email {
    font-size: 1.42em;
  }

  .social-media {
    font-size: 2.5em;
    margin-top: 5px;
  }

  .sm-icon {
    margin-right: 16px;
  }
</style>
