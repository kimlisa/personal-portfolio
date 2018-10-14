<template>
  <div
    class="tool-tip"
    @mouseover="showToolTip = true"
    @mouseleave="showToolTip = false"
  >
    <div
      class="tool-tip__text"
      :class="toolTipPosition"
      v-show="showToolTip"
    >
      {{ tip }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: {
    top: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    tip: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showToolTip: false,
  }),
  computed: {
    toolTipPosition() {
      if (this.right) {
        return 'tool-tip__text--right';
      }
      return 'tool-tip__text--top';
    },
  },
};
</script>

<style scoped>


.tool-tip {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  line-height: 1;
}


.tool-tip__text {
  position: absolute;
  background: #000;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
}


.tool-tip__text::after {
  content: '';
  position: absolute;
  background: #000;
  z-index: -1;
}


.tool-tip__text--top {
  top: -38px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}


.tool-tip__text--top::after {
  height: 14px;
  width: 10px;
  top: 23px;
  left: 50%;
  -webkit-transform: rotate(45deg) translateX(-50%);
  transform: rotate(45deg) translateX(-50%);
}


.tool-tip__text--right {
  left: 25px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}


.tool-tip__text--right::after {
  height: 11px;
  width: 11px;
  left: -9px;
  top: 50%;
  -webkit-transform: rotate(45deg) translateY(-50%);
  transform: rotate(45deg) translateY(-50%)
}


</style>
