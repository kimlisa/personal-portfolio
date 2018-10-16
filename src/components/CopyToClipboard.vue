<template>
  <div class="copy-to-clipboard">
    <ToolTip :tip="copied ? afterTip : beforeTip">
      <span @click="copy" @mouseleave="copied = false">{{text}}</span><br>
    </ToolTip>
    <input type="hidden" :value="text" ref="editableInput">
  </div>
</template>


<script>
import ToolTip from '@/components/ToolTip.vue';

export default {
  name: 'CopyToClipboard',
  components: {
    ToolTip,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    copyType: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    beforeTip: 'Click to Copy ',
    afterTip: 'Copied',
    copied: false,
  }),
  created() {
    this.beforeTip += this.copyType;
  },
  methods: {
    copy() {
      if (!this.copied) {
        this.$refs.editableInput.setAttribute('type', 'text');
        this.$refs.editableInput.select();
        try {
          document.execCommand('copy');
          this.copied = true;
        } catch (err) {
          console.warn(err);
        }
        this.$refs.editableInput.setAttribute('type', 'hidden');
        window.getSelection().removeAllRanges();
      } else {
        this.copied = false;
      }
    },
  },
};
</script>

<style scoped>
  .copy-to-clipboard {
    display: inline-block;
  }
.copy-to-clipboard:hover {
  cursor: pointer;
}
</style>
