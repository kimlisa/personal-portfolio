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
      <section slot="content" class="section-content-flex">
        <div class="left-content school-info">
          <span class="grad-school">University of Washington</span>
          <span class="grad-date">SEP 2016 - JUN 2018</span>
          <span class="degree-name">B.S. Computer Science</span>
          <span class="honors">Cum Laude Honors</span>
          <span class="gpa">GPA 3.76</span>
        </div>
        <div class="right-content">
          <font-awesome-icon icon="graduation-cap" class="section-icon"></font-awesome-icon>
        </div>
      </section>
    </page-section>
    <page-section>
      <section-header
        slot="header"
        title="skills"
        :right-align="true"
      ></section-header>
      <section slot="content" class="section-content-flex skill-section">
        <div class="left-bracket">{</div>
        <ul class="skill-list-1">
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Python3</li>
        </ul>
        <ul class="skill-list-2">
          <li>Responsive</li>
          <li>CSS / HTML</li>
          <li>jQuery</li>
        </ul>
        <ul class="skill-list-3">
          <li>MongoDB</li>
          <li>REST API</li>
          <li>Git / GitHub</li>
        </ul>
        <div class="right-bracket">}</div>
      </section>
    </page-section>
    <page-section :add-bg="true">
      <section-header
          slot="header"
          title="more"
      ></section-header>
      <section slot="content" class="section-content-flex more-section">
        <div class="left-content">
          view resume<br>
          kimlisa@uw.edu
        </div>
        <div class="right-content">
          <img src="@/assets/me1.jpg" class="my-photo">
        </div>
      </section>
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
.section-content-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  .section-icon {
    color: #D6D6D6;
    font-size: 7em;
  }

  .school-info span {
    display: block;
  }

  .grad-school {
    color: #656565;
    font-size: 1.2em;
    font-weight: 400;
  }

  .grad-date {
    color: #989898;
    font-size: .84em;
    line-height: .98;
    margin-bottom: 25px;
  }

  .honors, .gpa {
    font-size: .85em;
    color: #646464;
  }

  .degree-name, .honors, .gpa {
    line-height: 1.4;
  }

  .left-bracket, .right-bracket {
    font-size: 12em;
    color: #E8E8E8;
    line-height: 1;
  }

  .skill-section ul {
    list-style-type: none;
    margin: 40px 0 0 0;
    padding: 0;
  }
  .skill-section li {
    margin-bottom: 10px;
  }

  .my-photo {
    width: 200px;
    border-radius: 50%;
  }
</style>
