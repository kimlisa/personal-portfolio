<template>
  <!--<div id="app">-->
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->

    <!---->
  <!--</div>-->

  <div id="app">
    <main-menu></main-menu>
    <div id="main-view">

      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p><p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>
      <p>Hello Views</p>


    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: { MainMenu },
  mixins: [],
  props: {

  },
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
  padding: 0;
  margin: 0;
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
  background:lightblue;
  overflow: scroll;
  width: 60%;
}
/*#nav {*/
  /*padding: 30px;*/
/*}*/

/*#nav a {*/
  /*font-weight: bold;*/
  /*color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
  /*color: #42b983;*/
/*}*/
</style>
