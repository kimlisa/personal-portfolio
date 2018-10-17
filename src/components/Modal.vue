<template>
  <div class="modal">
    <div class="modal__backdrop" ref="modalBackdrop"></div>
    <div class="modal__wrapper">
      <div class="modal__wrapper__header">
        <slot name="header"></slot>
      </div>
      <div class="modal__wrapper__body">
        <slot name="body"></slot>
      </div>
      <div class="modal__wrapper__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
    this.clickListener = (e) => {
      console.log("click")
      if (this.$refs.modalBackdrop === e.target) {
        this.$emit('closeModal');
      }
    };

    this.$refs.modalBackdrop.addEventListener('click', this.clickListener);
  },
  beforeDestroy() {
    this.$refs.modalBackdrop.removeEventListener('click', this.clickListener);
  },
};
</script>

<style scoped>


.modal__backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal__wrapper {
  max-width: 800px;
  position: absolute;
  height: auto;
  background: white;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  margin: 50px auto;
  padding: 25px;
  text-align: left;
  border-radius: 10px;
}


</style>
