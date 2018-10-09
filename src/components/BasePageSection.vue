<template>
  <div class="section-wrapper" :class="addBg ? 'bg-grey' : ''">
    <section class="section-content">
      <header
        v-if="title.length > 0"
        class="section-title"
        :class="[rightAlign ? 'align-right' : '', centerAlign ? 'align-center' : '']"
      >
        <h2>{{title}}</h2>
      </header>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BasePageSection',
  props: {
    addBg: {
      type: Boolean,
      default: false,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    rightAlign: {
      type: Boolean,
      default: false,
    },
    centerAlign: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scope>
  .section-wrapper {
    font-weight: 300;
    padding: 80px;
    text-align: left;
    width: 100%;
  }


  .section-content {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }


  .section-content p {
    margin-bottom: 40px;
  }


  .bg-grey {
    background: #F4F4F4;
  }


  .bg-grey h2 {
    color: #d0d0d0;
  }

  .section-title {
    color: #d8d8d8;
    font-size: 2.7em;
    letter-spacing: 3px;
  }


  .section-title h2 {
    margin-bottom: 25px;
    margin-top: 0px;
    line-height: 1;
  }


  .align-right {
    text-align: right;
  }
  .align-center {
    text-align: center;
  }
</style>
