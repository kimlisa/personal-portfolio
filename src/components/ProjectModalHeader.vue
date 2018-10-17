<template>
  <div>
    <h2>Portfolio Website</h2>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardHeader',
  tools: ['Vue', 'CSS', 'HTML', 'Vue CLI 3', 'Git / Github', 'Adobe XD', 'FontAwesome'],
  created() {
    this.sectionTools();
  },
  methods: {
    sectionTools() {
      const tempArr = [];
      let block = [];
      let counter = 0;
      for (let i = 0, len = this.$options.tools.length; i < len; i += 1) {
        if (counter < 3) {
          block.push(this.$options.tools[i]);
          counter += 1;
        } else {
          tempArr.push(block);
          block = [];
          block.push(this.$options.tools[i]);
          counter = 1;
        }
      }
      tempArr.push(block);
      console.log('sectionedTool: ', tempArr);
    },
  },
};
</script>

<style scoped>

</style>
