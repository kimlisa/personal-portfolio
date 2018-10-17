<template>
  <component
      :is="getNavComponent"
      :showNav="showNav"
  ></component>
</template>

<script>
import NavHorizontal from '@/components/NavigationHorizontal.vue';
import NavVertical from '@/components/NavigationVertical.vue';

export default {
  name: 'Navigation',
  components: {
    NavHorizontal, NavVertical,
  },
  mixins: [],
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
    isDesktop: {
      type: Boolean,
      required: true,
    },
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
      if (this.navType === 'horizontal') {
        return 'NavHorizontal';
      } else if (this.navType === 'vertical') {
        return 'NavVertical';
      }
      return '';
    },
  },
  created() {
    console.log('creating navigation');
  },
  mounted() {

  },
  methods: {
  },
};
</script>

<style scoped>


</style>
