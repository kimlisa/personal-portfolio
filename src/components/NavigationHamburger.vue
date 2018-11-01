<template>
  <nav class="mobile-menu" :class="openMenu ? 'mobile-menu--open' : ''">
    <div class="mobile-menu__links">
      <div class="mobile-menu__links__main">
        <ul class="mobile-menu__icons">
          <li class="mobile-menu__icons__icon">
            <font-awesome-icon icon="home"></font-awesome-icon>
          </li>
          <li class="mobile-menu__icons__icon">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </li>
          <li class="mobile-menu__icons__icon">
            <font-awesome-icon icon="wrench"></font-awesome-icon>
          </li>
          <li class="mobile-menu__icons__icon">
            <font-awesome-icon icon="envelope"></font-awesome-icon>
          </li>
        </ul>
        <NavLinks/>
      </div>
      <div>
        <SocialLinks class="mobile-menu__links__social"/>
      </div>
    </div>
    <div class="mobile-menu__hamburger-tab" @click="openTab">
      <div class="hamburger-text">menu</div>
      <div class="hamburger hamburger-line-1"></div>
      <div class="hamburger hamburger-line-2"></div>
    </div>
  </nav>
</template>

<script>
import NavLinks from '@/components/NavigationLinks.vue';
import SocialLinks from '@/components/FooterIcons.vue';

export default {
  name: 'NavMobile',
  components: {
    NavLinks, SocialLinks,
  },
  data: () => ({
    openMenu: false,
  }),
  methods: {
    openTab() {
      this.openMenu = !this.openMenu;
      // if (this.$refs.mobileMenu.style.left === '0px') {
      //   this.$refs.mobileMenu.style.left = '-210px';
      // } else {
      //   this.$refs.mobileMenu.style.left = '0';
      // }
    },
  },
};
</script>

<style scoped>


.mobile-menu {
  position: relative;
  left: -210px;
  z-index: 9999;
}


.mobile-menu--open {
  left: 0;
}


.mobile-menu {
  background: rgba(0,0,0,0.85)
}
.mobile-menu__hamburger-tab {
  background: rgba(0,0,0,0.6);
}


.mobile-menu{
  position: fixed;
  width: 210px;
  top: 0;
  bottom: 0;
}


.mobile-menu__hamburger-tab {
  top: 35px;
  right: -50px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 0 7px 7px 0;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 1px 0px rgba(132,132,132,0.11), 0 1px 0px 0 rgba(215, 215, 215, 0.81), 0 1px 0px rgba(130, 130, 130, 0.84);
}


.hamburger {
  width: 32px;
  height: 2px;
  background: #fff;
  margin: 5px auto 7px auto;
  border-radius: 5px;
}


.hamburger-text {
  color: #fff;
  font-size: 10px;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .12em;
}


.mobile-menu__links__main {
  display: flex;
}


.mobile-menu__links__social {
  padding-top: 40px;
  margin-left: 10px;
}


.mobile-menu__links__social >>> .footer-icons__a a {
  font-size: 33px;
  color: #fff;
}


.mobile-menu__links__social >>> a.footer-icons__a__resume {
  font-size: 31px;
  margin-left: 5px;
}


.mobile-menu__links__social >>> .footer-icons__a {
  margin: 0 14px;
}


.mobile-menu__icons,
.mobile-menu__texts {
  list-style-type: none;
  padding-left: 0;
  position: relative;
  top: 26px;
}


.mobile-menu__icons__icon {
  margin-bottom: 21px;
  margin-right: 10px;
  margin-left: 25px;
  font-size: 21px;
}


.mobile-menu__texts {
  top: -33px;
  left: 10px;
}


.mobile-menu__texts li {
  color: #b0b0b0;
  list-style-type: none;
  display: inline-block;
  font-size: 12px;
  font-weight: 100;
  text-transform: lowercase;
  margin: 0 10px;
  letter-spacing: .045em;
}


.mobile-menu__links__main >>> .nav-link-container {
  margin-left: 6px;
}


.mobile-menu__links__main >>> .nav-link {
  margin-bottom: 26px;
  font-size: 18px;
  text-transform: capitalize;
}


.mobile-menu__links__main >>> .nav-link a,
.mobile-menu__icons__icon {
  color: #c5c5c5;
}


.mobile-menu__links__main>>> .router-link-exact-active {
  color: #fff !important;
}


</style>
