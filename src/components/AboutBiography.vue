<template>
  <PageSection class="biography">
    <template slot="content">
      <p>
        Hi, my name is Lisa, and I am a developer who specializes in the front
        end of development. I love to make designs come alive, interactive,
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
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';

export default {
  name: 'AboutBiography',
  components: { PageSection },
};
</script>

<style scope>
  .biography {
    padding-top: 10px;
  }
</style>
