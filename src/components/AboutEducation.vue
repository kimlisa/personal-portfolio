<template>
  <PageSection :addBg="true" title="education">
    <FlexContent slot="content">
      <div slot="left-content" class="school-info">
        <span class="grad-school">University of Washington</span>
        <span class="grad-date">SEP 2016 - JUN 2018</span>
        <span class="degree-name">B.S. Computer Science</span>
        <span class="honors">Cum Laude Honors - GPA 3.76</span>
      </div>
      <div slot="right-content">
        <FontAwesomeIcon icon="graduation-cap" class="section-icon"/>
      </div>
    </FlexContent>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import FlexContent from '@/components/BasePageSectionContentFlex.vue';

export default {
  name: 'AboutEducation',
  components: { PageSection, FlexContent },
};
</script>

<style scope>
  .school-info span {
    display: block;
  }

  .grad-school {
    color: #212121;
    font-size: 1.3em;
  }

  .grad-date {
    color: #666666;
    font-size: .84em;
    line-height: .98;
    margin-bottom: 25px;
  }

  .honors {
    font-size: .85em;
    color: #646464;
  }

  .degree-name, .honors {
    line-height: 1.4;
  }
  .section-icon {
    color: #D6D6D6;
    font-size: 8em;
  }
</style>
