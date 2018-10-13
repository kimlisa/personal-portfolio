<template>
  <ul class="nav-link-container">
    <transition v-bind:css="applyCSS" name="slide-left-1" appear>
      <li class="nav-link">
        <router-link :to="{name: 'home'}" @click.native="sendCurrRoute()">home</router-link>
      </li>
    </transition>
    <transition v-bind:css="applyCSS" name="slide-left-2" appear>
      <li class="nav-link">
        <router-link :to="{name: 'about'}" @click.native="sendCurrRoute()">about</router-link>
      </li>
    </transition>
    <transition v-bind:css="applyCSS" name="slide-left-3" appear>
      <li class="nav-link">
        <router-link :to="{name: 'projects'}" @click.native="sendCurrRoute()">projects</router-link>
      </li>
    </transition>
    <transition v-bind:css="applyCSS" name="slide-left-4" appear>
      <li class="nav-link">
        <router-link :to="{name: 'contact'}" @click.native="sendCurrRoute()">contact</router-link>
      </li>
    </transition>
  </ul>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    applyCSS: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    test: '',
  }),
  created() {
    // listen to current history entry changes
    window.addEventListener('popstate', () => {
      this.sendCurrRoute();
    }, false);
  },
  methods: {
    sendCurrRoute() {
      this.$emit('gotCurrRoute', this.$router.currentRoute.name);
    },
  },
};
</script>

<style scope>
  .router-link-exact-active {
    color: #4e4e4e;
    font-weight: 600;
  }


  .nav-link-container {
    font-size: .88em;
    font-weight: 100;
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-top: 45px;
  }


  .nav-link a {
    color: #393939;
  }

  /*********************************
    transitions
  *********************************/
  .slide-left-1-enter-active,
  .slide-left-2-enter-active,
  .slide-left-3-enter-active,
  .slide-left-4-enter-active{
    transition: .8s;
    opacity: 1;
  }

  .slide-left-1-enter{
    transform: translate(400px, -10px);
    opacity: 1;
  }
  .slide-left-2-enter {
    transform: translate(480px, -50px);
    opacity: 1;
  }
  .slide-left-3-enter {
    transform: translate(560px, -90px);
    opacity: 1;
  }
  .slide-left-4-enter {
    transform: translate(640px, -120px);
    opacity: 1;
  }

</style>
