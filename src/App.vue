<template>
  <div id="app">
    <div class="nav-wrapper">
      <transition name="fade-in-down">
        <navigation-bar
          :isMobile="false"
          :isDesktop="true"
          :atHome="atHome"
          v-if="showNav || !atHome"
        >
        </navigation-bar>
      </transition>
    </div>
    <div id="main-view">
      <router-view
          @homeTransitioned="finishHomeTransition"
          @navAwayHome="atHome = false"
          @atHome="atHome = true"
      ></router-view>
    </div>
    <transition name="fade-in-up">
      <footer class="main-footer" v-if="showFooter || !atHome">
        <p>2018 &copy; developed by Lisa Kim</p>
      </footer>
    </transition>
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
    atHome: false,
    showNav: false,
    showFooter: false,
  }),
  computed: {

  },
  created() {
    console.log('hello app');
    // check window size
    // event listener for resize window
  },
  methods: {
    finishHomeTransition(e) {
      this.showNav = true;
      this.showFooter = true;
    },
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

/*********************************
  transitions
*********************************/
.fade-in-down-enter-active,
.fade-in-left-enter-active,
.fade-in-right-enter-active,
.fade-in-enter-active,
.fade-in-up-enter-active{
  transition: 1s;
  opacity: 1;
}


.fade-in-left-enter {
  transform: translate(-150%, 0);
  opacity: 0;
}


.fade-in-right-enter {
  transform: translate(100%, 0);
  opacity: 0;
}


.fade-in-down-enter {
  opacity: 0;
  transform: translate(0, -100%)
}


.fade-in-up-enter {
  opacity: 0;
  transform: translate(0, 100%);
}


.fade-in-enter {
  opacity: 0;
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

  .nav-wrapper {
    height: 68px;
  }


  #main-view {
    text-align: center;
  }
</style>
