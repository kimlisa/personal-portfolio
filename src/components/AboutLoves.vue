<template>
  <PageSection title="loves" :centerAlign="true" class="love-section">
    <div slot="content" class="likes">
      <div class="music">
        <FontAwesomeIcon icon="music" class="music-icon"/>
      </div>
      <p>coffee, tea, soup, sparkles</p>
      <FontAwesomeIcon icon="coffee" class="coffee-icon"/>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '@/components/BasePageSection.vue';


export default {
  name: 'AboutLoves',
  components: { PageSection, },
};
</script>

<style scope>
  .love-section {
    padding: 140px 0;
  }
  .likes {
    text-align: center;
  }
  .coffee-icon {
    font-size: 70px;
    color: #C4C4C4;
  }
  .music {
    position: relative;
    background: red;
    margin: 0 auto;
  }
  .music-icon {
    position: absolute;
    z-index: -1;
    font-size: 20em;
    left: -10px;
    right: 0;
    top: -130px;
    color: #f8f8f8;
    margin: 0 auto;
  }
  .likes p {
    margin-bottom: 10px;
  }
</style>
