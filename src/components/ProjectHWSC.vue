<template>
  <Modal @closeModal="$emit('closeModal')">
    <template slot="header">
      <component
        :is="loadSlider ? slider : ''"
        :images="$options.images"
      />
    </template>
    <template slot="body">body</template>
    <template slot="footer">footer? do i need</template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Slider from '@/components/ProjectImageSlider.vue';
import image1 from '@/assets/project_portfolio_imgs/home.png';
import image2 from '@/assets/project_portfolio_imgs/about.png';
import image3 from '@/assets/project_portfolio_imgs/projects.png';

export default {
  name: 'ProjectHWSC',
  components: {
    Modal, Slider,
  },
  images: [image1, image2, image3],
  props: {
    loadSlider: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    slider: Slider,
  }),
};
</script>

<style scoped>

</style>
