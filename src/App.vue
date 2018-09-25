<template>
  <div id="app">
    <main-menu
        :isMobile="false"
        :isDesktop="true">
    </main-menu>
    <div id="main-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: { MainMenu },
  data: () => ({
    isMobile: null,
    isDesktop: null,
  }),
  computed: {

  },
  created() {
    console.log('hello app');
    // check window size
    // event listener for resize window
  },
  methods: {
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}


html,
body {
  margin: 0;
  overflow: hidden;
  padding: 0;
}


#app {
  color: #2c3e50;
  display:flex;
  font-family: Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  height: 100vh;
  overflow:hidden;
  position: relative;
  width: 100%;
}


#main-view {
  overflow: scroll;
  width: 68%;
}
</style>
