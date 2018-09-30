<template>
  <header class="page-title">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'BasePageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scope>
  .page-title {
    color: #F7F7F7;
    font-size: 3em;
  }


  .page-title h1 {
    margin-bottom: 0;
    margin-top: 15px;
  }
</style>
