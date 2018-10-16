<template>
  <Modal @closeModal="$emit('closeModal')">
    <template slot="header">
      <Slider/>
    </template>
    <template slot="body">body</template>
    <template slot="footer">footer? do i need</template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Slider from '@/components/ProjectImageSlider.vue';

export default {
  name: 'ProjectHWSC',
  components: {
    Modal, Slider,
  },
};
</script>

<style scoped>

</style>
