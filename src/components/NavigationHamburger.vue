<template>
  <nav class="hamburger-menu">
    <ul class="hamburger-menu__icons">
      <li class="hamburger-menu__icons__icon">
        <font-awesome-icon icon="home"></font-awesome-icon>
      </li>
      <li class="hamburger-menu__icons__icon">
        <font-awesome-icon icon="user"></font-awesome-icon>
      </li>
      <li class="hamburger-menu__icons__icon">
        <font-awesome-icon icon="wrench"></font-awesome-icon>
      </li>
      <li class="hamburger-menu__icons__icon">
        <font-awesome-icon icon="envelope"></font-awesome-icon>
      </li>
    </ul>
    <NavLinks/>
  </nav>
</template>

<script>
import NavLinks from '@/components/NavigationLinks.vue';

export default {
  name: 'NavMobile',
  components: {
    NavLinks,
  },
};
</script>

<style scoped>
  .hamburger-menu {
    display: flex;
    position: fixed;
    width: 200px;
    height: 300px;
    background: lightgrey;
  }
.hamburger-menu__icons {
  list-style-type: none;
  padding-left: 0;
  position: relative;
  top: 20px;
}

  .hamburger-menu__icons__icon {
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 24px;
  }

  .hamburger-menu >>> .nav-link {
    margin-bottom: 27px;
  }

</style>
