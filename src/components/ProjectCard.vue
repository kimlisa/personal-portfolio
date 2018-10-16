<template>
  <div class="project-card" @mouseover="showAltText = true" @mouseleave="showAltText = false">
    <MacBar class="mac-bar"/>
    <div class="project-card__text-box" v-show="!showAltText" >
      <h3 class="project-card__title">
        <slot name="title"></slot>
      </h3>
      <p class="project-card__description">
        <slot name="description"></slot>
      </p>
      <p class="project-card__tools">
        <span class="project-card__tools__brackets">{</span>
        <slot name="tools"></slot>
        <span class="project-card__tools__brackets">}</span>
      </p>
    </div>
    <div class="project-card__more-details" v-show="showAltText">
      <p>Click for Details</p>
    </div>
  </div>
</template>

<script>
import MacBar from '@/components/BaseMacBar.vue';

export default {
  name: 'ProjectCard',
  components: {
    MacBar,
  },
  data: () => ({
    showAltText: false,
  }),
};
</script>

<style scoped>


.project-card {
  width: 310px;
  height: 204px;
  border-radius: 8px;
  margin: 0 12px;
  text-align: left;
  box-shadow: 0 0 0 1px rgba(132,132,132,0.11),
              0 1px 3px 0 rgba(215, 215, 215, 0.81),
              0 1px 2px rgba(245,245,245,0.64);
  color: #5A5A5A;
  transition: all .2s ease-out;
}

.project-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 23px rgba(0,0,0,0.2);
  cursor: pointer;
}


.project-card:hover .mac-bar {
  background: #282A36;
}


.project-card__text-box {
  padding: 15px;
  line-height: 1.25;
}


.project-card__title  {
  margin-top: 5px;
  letter-spacing: .06em;
  font-size: 1.1em;
}


.project-card__description,
.project-card__tools{
  font-weight: 100;
}


.project-card__tools {
  font-size: .88em;
}


.project-card__tools__brackets {
  font-size: 0.938em;
  font-weight: 600;
}

.project-card__more-details {
  text-align: center;
  padding: 28px;
  font-size: 1.8em;
  font-weight: 600;
  color: #b7b7b7;
  transition: all .15s ease-in;
}
</style>
