<template>
  <div class="slider">
    <div class="slider__browser">
      <MacBar/>
      <transition-group :name="slideDirection" class="slider__browser__images" tag="div">
        <div
          v-for="number in [currentIndex]"
          :key="number"
          class="slider__browser__images__transition"
        >
          <img
            :src="images[getAndSetImage]"
            class="slider__browser__images__transition__img"
          >
        </div>
      </transition-group>
    </div>
    <div class="slider__indicator">
      <span
        v-for="index in images.length"
        :key="index"
        class="slider__indicator__ball"
        :ref="'image'+ (index - 1)"
        @click="goToImage(index - 1)"
      ></span>
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
  activeClass: 'slider__indicator__ball--active',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    currentIndex: 0,
    timer: null,
    prevActive: null,
    slideDirection: 'slide-in-left',
  }),
  computed: {
    getAndSetImage() {
      console.log('timer is started');
      const index = Math.abs(this.currentIndex) % this.images.length;
      const currRef = `image${index}`;
      if (this.$refs[currRef]) {
        this.setActive(this.$refs[currRef][0]);
      }
      return index;
    },
  },
  mounted() {
    this.setActive(this.$refs[`image${this.currentIndex}`][0]);
    this.startTimer();
  },
  beforeDestroy() {
    console.log('stopping timer');
    this.stopTimer();
  },
  methods: {
    setActive(active) {
      if (this.prevActive) {
        this.prevActive.classList.remove(this.$options.activeClass);
      }
      active.classList.add(this.$options.activeClass);
      this.prevActive = active;
    },
    nextImage() {
      this.slideDirection = 'slide-in-left';
      this.currentIndex += 1;
    },
    prevImage() {
      this.slideDirection = 'slide-in-right';
      this.currentIndex -= 1;
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (document.hasFocus()) { // prevents browser from catching up rotations
          this.nextImage();
        }
      }, 3000);
    },
    resetTimer() {
      this.stopTimer();
      this.startTimer();
    },
    goToImage(index) {
      this.resetTimer();
      if (index < this.currentIndex) {
        this.slideDirection = 'slide-in-right';
      } else {
        this.slideDirection = 'slide-in-left';
      }
      this.currentIndex = index;
    },
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


.slider__indicator {
  text-align: center;
}


.slider__indicator__ball {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #cacaca;
  margin: 15px 3px 0 3px;
  border-radius: 50%;
  cursor: pointer;
}


.slider__indicator__ball--active {
  background: #727272;
}


.slider__browser__images {
  line-height: 0;
  overflow: hidden;
  position: relative;
}


.slider__browser__images__transition__img {
  width: 100%;
  border-radius: 0 0 8px 8px;
}


.slider__browser__images__transition {
  transition: .5s;
}


.slide-in-left-enter-active,
.slide-in-right-enter-active {
  position: absolute;
  top: 0;
}


.slide-in-left-enter,
.slide-in-right-leave-to {
  transform: translate(100%, 0);
}


.slide-in-left-leave-to,
.slide-in-right-enter {
  transform: translate(-100%, 0);
}


</style>
