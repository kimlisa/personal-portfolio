<template>
  <component
      :is="getNavComponent"
      :showNav="showNav"
  ></component>
</template>

<script>
import NavHorizontal from '@/components/NavigationHorizontal.vue';
import NavVertical from '@/components/NavigationVertical.vue';
import NavHamburger from '@/components/NavigationHamburger.vue';

export default {
  name: 'Navigation',
  components: {
    NavHorizontal, NavVertical, NavHamburger,
  },
  mixins: [],
  props: {
    navType: {
      type: String,
      required: true,
    },
    showNav: {
      type: Boolean,
    },
  },
  data: () => ({
    navComponent: '',
  }),
  computed: {
    getNavComponent() {
      console.log('in navigation computing current menu: ', this.navType);
      if (this.navType === 'horizontal') {
        return 'NavHorizontal';
      } else if (this.navType === 'vertical') {
        return 'NavVertical';
      } else if (this.navType === 'hamburger') {
        return 'NavHamburger';
      }
      return '';
    },
  },
  created() {
    //console.log('creating navigation');
  },
  mounted() {

  },
  methods: {
  },
};
</script>

<style scoped>


</style>
