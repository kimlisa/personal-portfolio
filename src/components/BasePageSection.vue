<template>
  <div
      class="section-wrapper"
      :class="[firstSection ? 'first-section' : '', addBg ? 'bg-grey' : '']"
  >
    <section class="section-content">
      <slot name="header"></slot>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BasePageSection',
  props: {
    firstSection: {
      type: Boolean,
      default: false,
    },
    addBg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scope>
  .section-wrapper {
    font-weight: 300;
    padding: 80px;
    text-align: left;
    width: 100%;
  }


  .section-content {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }


  .section-content p {
    margin-bottom: 40px;
  }


  .first-section {
    padding-top: 10px;
  }


  .bg-grey {
    background: #F4F4F4;
  }


  .bg-grey h2 {
    color: #E8E8E8;
  }
</style>
