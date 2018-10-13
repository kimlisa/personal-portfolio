<template>
  <PageSection title="skills" :right-align="true" class="skills">
    <template slot="content">
      <FlexContent class="skill-section">
        <div class="left-bracket">{</div>
        <ul class="skills list-1">
          <li>Vue.js</li>
          <li>SPA</li>
          <li>Python3</li>
        </ul>
        <ul class="skills list-2">
          <li>Responsive</li>
          <li>CSS / HTML</li>
          <li>jQuery</li>
        </ul>
        <ul class="skills list-3">
          <li>MongoDB</li>
          <li>REST API</li>
          <li>Git / GitHub</li>
        </ul>
        <div class="right-bracket">}</div>
      </FlexContent>
    </template>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';
import FlexContent from '@/components/BasePageSectionContentFlex.vue';

export default {
  name: 'AboutSkills',
  components: { PageSection, FlexContent },
};
</script>

<style scope>
  .school-info span {
    display: block;
  }

  .left-bracket, .right-bracket {
    font-size: 12em;
    color: #e0e0e0;
    line-height: 1;
  }

  .skill-section ul {
    margin: 40px 0 0 0;
    padding: 0;
    list-style-type: none;
  }
  .skill-section li {
    margin-bottom: 5px;
  }

  .skills h2 {
    margin-bottom: 0px;
  }
</style>
