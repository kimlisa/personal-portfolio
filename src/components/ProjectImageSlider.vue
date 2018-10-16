<template>
  <div class="slider">
    <div class="slider__browser">
      <MacBar/>
      <div class="slider__browser__images">
        <img src="@/assets/project_portfolio_imgs/home.png" class="slider__browser__images__img">
      </div>
    </div>
  </div>
</template>

<script>
import MacBar from '@/components/BaseMacBar.vue';

export default {
  name: 'ProjectImageSlider',
  components: {
    MacBar,
  },
};
</script>

<style scoped>
.slider {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.slider__browser {
  border-radius: 8px;
  margin: 0 12px;
  text-align: left;
  box-shadow: 0 0 0 1px rgba(132,132,132,0.11),
  0 1px 3px 0 rgba(215, 215, 215, 0.81),
  0 1px 2px rgba(245,245,245,0.64);
  color: #5A5A5A;
  transition: all .2s ease-out;
}

.slider__browser__images {
  line-height: 0;
}
.slider__browser__images__img {
  width: 100%;
  border-radius: 0 0 8px 8px;
}
</style>
