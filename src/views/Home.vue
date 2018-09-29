<template>
  <div class="home">
    <div class="icon-wrapper">
      <transition name="fade-in-left" appear>
        <div class="left-angle icon" >
          <font-awesome-icon icon="angle-left"></font-awesome-icon>
        </div>
      </transition>
      <transition name="fade-in-down" appear v-on:after-enter="afterEnterIcon">
        <div class="slash icon">/</div>
      </transition>
      <transition name="fade-in-right" appear>
        <div class="right-angle icon" >
          <font-awesome-icon icon="angle-right"></font-awesome-icon>
        </div>
      </transition>
    </div>
    <transition name="fade-in" v-on:enter="enterTitle">
      <header class="title" v-if="showTitle">
        <h1>LISA KIM</h1>
        <p>Front End Developer</p>
      </header>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {},
  mixins: [],
  props: {

  },
  data: () => ({
    showAngles: false,
    showSlash: false,
    showTitle: false,
  }),
  computed: {

  },
  beforeCreate() {
    document.body.style.overflow = 'hidden';
    this.$emit('atHome');
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
    this.$emit('navAwayHome');
  },
  methods: {
    afterEnterIcon() {
      this.showTitle = true;
    },
    enterTitle() {
      this.$emit('homeTransitioned');
    },
  },
};
</script>

<style scoped>
  .home {
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: calc(100vh - 135px);
  }

  .icon-wrapper,
  .title {
    position: absolute;
  }


  .icon-wrapper {
    z-index: -1;
    margin-top: -25px;
  }


  .icon-wrapper div{
    display: inline-block;
  }


  .icon {
    color: #f1f1f1;
    font-size: 380px;
  }


  .slash {
    font-weight: 900;
    font-size: 30em;
    position: relative;
    top: 35px;
    margin: 0 20px;
  }


  h1 {
    font-size: 88px;
    font-weight: 400;
    letter-spacing: .15em;
    margin:0;
    color: #000000;
    line-height: 1.4;
  }


  p {
    margin-top: 0px;
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: .03em;
    color: #868686;
  }
</style>
