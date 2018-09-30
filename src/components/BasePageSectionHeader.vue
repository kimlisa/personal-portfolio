<template>
  <header class="section-title">
    <h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  name: 'BasePageSectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    leftAlign: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scope>
  .section-title {
    color: #F7F7F7;
    font-size: 3em;
  }


  .section-title h2 {
    margin-bottom: 0;
    margin-top: 0px;
  }
</style>
