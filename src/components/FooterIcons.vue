<template>
  <p class="footer-icons">
    <ToolTip :tip="'GitHub'">
      <a class="footer-icons__a" href="https://github.com/kimlisa" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </ToolTip>
    <a class="footer-icons__a" href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
      <FontAwesomeIcon :icon="['fab', 'linkedin-in']"/>
    </a>
    <a class="footer-icons__a" href="./kimlisa_resume.pdf" target="_blank">
      <FontAwesomeIcon icon="book-open"/>
    </a>
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
  margin-bottom: 65px;
}
.footer-icons__a {
  font-size: 14px;
  color: #8a8a8a;
}
.footer-icons__a:last-child {
  font-size: 13px;
}
.footer-icons__a:not(:last-child) {
  margin-right: 7px;
}
</style>
