<template>
  <div class="contact">
    <PageHeader title="contact"/>
    <MailForm/>
    <Location/>
    <Connect/>
  </div>
</template>

<script>
import PageHeader from '@/components/BasePageHeader.vue';
import MailForm from '@/components/ContactMailForm.vue';
import Location from '@/components/ContactLocation.vue';
import Connect from '@/components/ContactConnect.vue';

export default {
  name: 'Contact',
  components: {
    PageHeader, MailForm, Location, Connect,
  },
  mixins: [],
  props: {
    prevLink: {},
  },
  data: () => ({
    test: '',
  }),
  computed: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
