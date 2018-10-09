<template>
  <section class="flex-content">
    <slot name="left-content"></slot>
    <slot name="right-content"></slot>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BasePageSectionContentFlex',
};
</script>

<style scoped>
  .flex-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
