<template>
  <header class="section-title" :class="rightAlign ? 'align-right' : ''">
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
    rightAlign: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scope>
  .section-title {
    color: #F7F7F7;
    font-size: 2.7em;
    letter-spacing: 3px;
  }


  .section-title h2 {
    margin-bottom: 25px;
    margin-top: 0px;
    line-height: 1;
  }


  .align-right {
    text-align: right;
  }
</style>
