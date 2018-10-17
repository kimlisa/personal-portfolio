<template>
  <div id="app">
    <div :class="navType === 'horizontal' ? 'app__nav-wrapper' : ''">
        <navigation-bar
          :isMobile="false"
          :isDesktop="true"
          :navType="navType"
          :showNav="showNav"
        >
        </navigation-bar>
    </div>
    <div id="app__main-view">
      <router-view
          @homeTransitioned="finishHomeTransition"
          @navAwayHome="useHorizontalMenu ? navType = 'horizontal' : navType = 'vertical'"
          @atHome="navType = 'horizontal'"
      ></router-view>
    </div>
    <transition name="fade-in-up">
      <footer class="app__main-footer" v-if="showFooter">
        <p class="app__main-footer__text">2018 &copy; developed by Lisa Kim</p>
        <FooterIcons v-show="navType !== 'horizontal'"/>
      </footer>
    </transition>
  </div>
</template>

<script>
import NavigationBar from '@/components/Navigation.vue';
import FooterIcons from '@/components/FooterIcons.vue';

export default {
  name: 'App',
  components: {
    NavigationBar, FooterIcons,
  },
  data: () => ({
    isMobile: null,
    isDesktop: null,
    atHome: null,
    navType: '',
    showNav: false,
    showFooter: false,
    useHorizontalMenu: false,
  }),
  computed: {

  },
  created() {
    console.log('FIRST: setting app');
    // check window size
    this.determineSizeType(window.innerWidth);

    this.resizeListener = () => {
      console.log('resizing: ', window.innerWidth);
      this.determineSizeType(window.innerWidth);
    };
    window.addEventListener('resize', this.resizeListener);

    if (this.$router.currentRoute.name === 'home' || this.useHorizontalMenu) {
      this.navType = 'horizontal';
    } else {
      this.navType = 'vertical';
      this.showFooter = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  },
  methods: {
    finishHomeTransition() {
      this.showNav = true;
      this.showFooter = true;
    },
    determineSizeType(width) {
      console.log('window size: ', width);
      if (width > 1119) {
        this.isDesktop = true;
        this.isMobile = false;
        this.useHorizontalMenu = false;
      } else if (width >= 800 && width <= 1119) {
        this.isDesktop = true;
        this.isMobile = false;
        this.useHorizontalMenu = true;
      } else if (width < 800) {
        this.isDesktop = false;
        this.isMobile = true;
        this.useHorizontalMenu = false;
      }
      console.log("use horizontal menu: ", this.useHorizontalMenu)
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
  .app__main-footer {
    color: #B9B9B9;
    font-size: .8em;
    font-weight: 100;
    text-align: center;
  }


  .app__main-footer__text {
    margin: 0;
  }

  .app__nav-wrapper {
    height: 68px;
  }


  #app__main-view {
    text-align: center;
  }
</style>
