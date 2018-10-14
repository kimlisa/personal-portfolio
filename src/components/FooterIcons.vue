<template>
  <p class="footer-icons">
    <ToolTip :tip="'GitHub'" class="footer-icons__a">
      <a href="https://github.com/kimlisa" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </ToolTip>
    <ToolTip :tip="'LinkedIn'" class="footer-icons__a">
      <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'linkedin-in']"/>
      </a>
    </ToolTip>
    <ToolTip :tip="'Resume'" class="footer-icons__a">
      <a href="./kimlisa_resume.pdf" target="_blank" class="footer-icons__a__resume">
        <FontAwesomeIcon icon="book-open"/>
      </a>
    </ToolTip>
  </p>
</template>

<script>
import ToolTip from '@/components/ToolTip.vue';

export default {
  name: 'FooterIcons',
  components: {
    ToolTip,
  },
};
</script>

<style scoped>


.footer-icons {
  margin-top: 0;
  margin-bottom: 25px;
}


.footer-icons__a a {
  font-size: 14px;
  color: #8a8a8a;
}


.footer-icons__a__resume {
  font-size: 13px;
  position: relative;
  top: 1px;
}


.footer-icons__a {
  margin: 0 4px;
}


</style>
