<template>
  <div class="slider">
    <div class="slider__browser">
      <MacBar/>
      <transition-group name="slide-in-left" class="slider__browser__images" tag="div">
        <div v-for="number in [currentIndex]" :key="number" class="hello">
          <img v-if="show"
            :src="images[getAndSetImage]"
            class="slider__browser__images__img"
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
import image1 from '@/assets/project_portfolio_imgs/home.png';
import image2 from '@/assets/project_portfolio_imgs/about.png';
import image3 from '@/assets/project_portfolio_imgs/projects.png';

export default {
  name: 'ProjectImageSlider',
  components: {
    MacBar,
  },
  activeClass: 'slider__indicator__ball--active',
  data: () => ({
    images: [image1, image2, image3],
    currentIndex: 0,
    timer: null,
    prevActive: null,
    show: false,
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
    this.show = true;
    this.setActive(this.$refs[`image${this.currentIndex}`][0]);
    this.startTimer();
  },
  beforeDestroy() {
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
      this.currentIndex += 1;
    },
    prevImage() {
      this.currentIndex -= 1;
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.timer = setInterval(this.nextImage, 3000);
    },
    resetTimer() {
      this.stopTimer();
      this.startTimer();
    },
    goToImage(index) {
      this.currentIndex = index;
      this.resetTimer();
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
  position: relative;
}

.slider__browser__images {
  line-height: 0;
  overflow: hidden;
  position: relative;
  top: 0
}


.slider__browser__images__img {
  width: 100%;
  border-radius: 0 0 8px 8px;
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

.hello {
  transition: 1s;
  overflow: hidden;
  visibility: visible;
  position: relative;
  top: 0;
}
  .slide-in-left-enter-active {
    transition: 1s;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    top: 0;
  }
/*.slide-in-left-enter-active, .slide-in-left-leave-active {*/
  /*transition: all 0.8s ease;*/
  /*overflow: hidden;*/
  /*visibility: visible;*/
  /*opacity: 1;*/
  /*position: absolute;*/
/*}*/

  .slide-in-left-enter {
    transform: translate(80%, 0);
    overflow: hidden;
    visibility: hidden;
  }

  .slide-in-left-leave-to {
    overflow: hidden;
    visibility: hidden;
  }

</style>
