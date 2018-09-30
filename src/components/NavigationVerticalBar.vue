<template>
  <transition name="rotate-in-down-left" v-on:after-enter="afterEnter" appear>
    <div class="vertical-bar">
        <ul class="heart-icon-container">
          <li class="heart-icon">
              <font-awesome-icon icon="heart" class="hide-icon"></font-awesome-icon>
          </li>
          <li class="heart-icon">
            <transition v-bind:name="aboutTransition">
              <font-awesome-icon
                  icon="heart"
                  v-if="activateIcon.about && showIcon"
              ></font-awesome-icon>
            </transition>
          </li>
          <li class="heart-icon">
            <transition v-bind:name="projectsTransition">
              <font-awesome-icon
                  icon="heart"
                  v-if="activateIcon.projects && showIcon"
              ></font-awesome-icon>
            </transition>
          </li>
          <li class="heart-icon">
            <transition v-bind:name="contactTransition">
              <font-awesome-icon
                  icon="heart"
                  v-if="activateIcon.contact && showIcon"
              ></font-awesome-icon>
            </transition>
          </li>
        </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NavigationVerticalBar',
  components: {},
  mixins: [],
  props: {
    currRoute: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showIcon: false,
    aboutTransition: '',
    projectsTransition: '',
    contactTransition: '',
    prevActiveIcon: '',
    activateIcon: { about: false, projects: false, contact: false },
  }),
  watch: {
    currRoute(newRoute, prevRoute) {
      switch (newRoute) {
        case 'about':
          if (this.prevActiveIcon === 'projects') {
            this.aboutTransition = 'slide-up-from-projects-about';
          } else { // contact
            this.aboutTransition = 'slide-up-from-contact-about';
          }
          break;
        case 'projects':
          if (this.prevActiveIcon === 'about') {
            this.projectsTransition = 'slide-down-from-about-projects';
          } else { // contact
            this.projectsTransition = 'slide-up-from-contact-projects';
          }
          break;
        case 'contact':
          if (this.prevActiveIcon === 'about') {
            this.contactTransition = 'slide-down-from-about-contact';
          } else { // projects
            this.contactTransition = 'slide-down-from-projects-contact';
          }
          break;
        default:
          console.error('idk what happened hereererererer', newRoute);
      }
      this.activateIcon[this.prevActiveIcon] = false;
      this.activateIcon[newRoute] = true;
      this.prevActiveIcon = newRoute;
    },
  },
  mounted() {
    const currRoute = this.$router.currentRoute.name;
    switch (currRoute) {
      case 'about':
        this.aboutTransition = 'slide-down-about-home';
        break;
      case 'projects':
        this.projectsTransition = 'slide-down-projects-home';
        break;
      case 'contact':
        this.contactTransition = 'slide-down-contact-home';
        break;
      default:
        console.error('NavigationVerticalBar.vue in mounted, "', currRoute, '" route undefined');
    }
    this.activateIcon[currRoute] = true;
    this.prevActiveIcon = currRoute;
  },
  methods: {
    afterEnter() {
      this.showIcon = true;
    },
  },
};
</script>

<style scope>
  .vertical-bar {
    position: absolute;
    background: #D8D8D8;
    z-index: 2;
    width: 8px;
    height: 210px;
    border-radius: 5px;
    top: -10px;
    left: 40px;
  }


  .heart-icon-container {
    list-style-type: none;
    position: absolute;
    left:-53px;
    font-size: 32px;
    top: 7px;
  }


  .heart-icon {
    height: 39px;
    font-size: 1.1em;
  }


  .hide-icon {
    display: none;
  }


  /*********************************
    transitions - vertical bar
  *********************************/
  .rotate-in-down-left-enter-active{
    transition: .8s;
  }


  .rotate-in-down-left-enter {
    transform: translate(150px, -100px) rotate(-90deg);
  }


  /*********************************
    transitions - heart icon
  *********************************/
  .slide-up-from-projects-about-enter-active,
  .slide-up-from-contact-about-enter-active,
  .slide-down-from-about-projects-enter-active,
  .slide-up-from-contact-projects-enter-active,
  .slide-down-from-about-contact-enter-active,
  .slide-down-from-projects-contact-enter-active,
  .slide-down-about-home-enter-active,
  .slide-down-projects-home-enter-active,
  .slide-down-contact-home-enter-active{
    transition: .4s;
  }


  /* slide from home */
  .slide-down-about-home-enter{
    transform: translate(0px, -110px);
  }


  .slide-down-projects-home-enter{
    transform: translate(0px, -145px);
  }


  .slide-down-contact-home-enter{
    transform: translate(0px, -185px);
  }


  /* slide to about */
  .slide-up-from-projects-about-enter{
    transform: translate(0px, 38px);
  }


  .slide-up-from-contact-about-enter{
    transform: translate(0px, 76px);
  }


  /* slide to projects */
  .slide-down-from-about-projects-enter{
    transform: translate(0px, -38px);
  }


  .slide-up-from-contact-projects-enter{
    transform: translate(0px, 38px);
  }


  /* slide to contact */
  .slide-down-from-about-contact-enter{
    transform: translate(0px, -76px);
  }


  .slide-down-from-projects-contact-enter{
    transform: translate(0px, -38px);
  }
</style>
