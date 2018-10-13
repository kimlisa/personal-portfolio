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
    bottom: {
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
      if (this.bottom) {
        return 'tool-tip__text--bottom';
      }
      return 'tool-tip__text--right';
    },
  },
};
</script>

<style scoped>


.tool-tip {
  display: inline-block;
  position: relative;
}


.tool-tip__text {
  position: absolute;
  background: #000;
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}


.tool-tip__text::after {
  content: '';
  position: absolute;
  background: #000;
  left: 50%;
  -webkit-transform: rotate(45deg) translateX(-50%);
  transform: rotate(45deg) translateX(-50%);
}


.tool-tip__text--top {
  top: -38px;
}


.tool-tip__text--top::after {
  height: 12px;
  width: 8px;
}


.tool-tip__text--right {
  left: 38px;
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


.tool-tip__text--bottom {
  bottom: -38px;
}

.tool-tip__text--bottom::after {
  bottom: 21px;
  height: 8px;
  width: 12px;
}
</style>
