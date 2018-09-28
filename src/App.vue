<template>
  <div id="app">
    <navigation-bar
      :isMobile="false"
      :isDesktop="true"
    >
    </navigation-bar>
    <div id="main-view">
      <router-view></router-view>
    </div>
    <footer class="main-footer">
      <p>2018 &copy; developed by Lisa Kim</p>
    </footer>
  </div>
</template>

<script>
import NavigationBar from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: { NavigationBar },
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
  padding: 0;
  overflow: hidden;
}


a {
  text-decoration: none;
}


#app {
  font: 16px/1.7 normal normal;
  font-family: Helvetica, Arial, sans-serif;
  letter-spacing: .03em;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/

}
</style>

<style scoped>
  .main-footer {
    color: #B9B9B9;
    font-size: .8em;
    font-weight: 100;
    text-align: center;
  }


  .main-footer p {
    margin: 0;
  }
</style>
