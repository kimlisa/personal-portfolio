<template>
  <PageSection :add-bg="true" title="more">
    <FlexContent slot="content" class="more-section">
      <div slot="left-content">
        <FontAwesomeIcon icon="book-open" class="more-icon"/>
        <a href="./kimlisa_resume.pdf" target="_blank">
          view resume
        </a><br>
        <FontAwesomeIcon icon="envelope" class="more-icon email"/>
        <CopyToClipboard
          :text="'kimlisa@uw.edu'"
          :copyType="'email'"
        />
        <div class="social-media">
          <a href="https://github.com/kimlisa" target="_blank">
            <FontAwesomeIcon :icon="['fab', 'github']" class="sm-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
            <FontAwesomeIcon :icon="['fab', 'linkedin-in']" class="sm-icon"/>
          </a>
        </div>
      </div>
      <div slot="right-content">
        <img src="@/assets/me3.jpg" class="my-photo">
      </div>
    </FlexContent>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import FlexContent from '@/components/BasePageSectionContentFlex.vue';
import CopyToClipboard from '@/components/CopyToClipboard.vue';

export default {
  name: 'AboutMore',
  components: {
    PageSection, FlexContent, CopyToClipboard,
  },
  data: () => ({
    email: 'kimlisa@uw.edu',
  }),
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
    color: #595758;
  }
  .more-icon {
    color: #B1B1B1;
  }
</style>
