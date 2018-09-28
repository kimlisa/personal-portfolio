<template>
  <div class="home">
    <div class="icon-wrapper">
      <div class="left-angle icon">
        <font-awesome-icon icon="angle-left"></font-awesome-icon>
      </div>
      <div class="slash icon">/</div>
      <div class="right-angle icon">
        <font-awesome-icon icon="angle-right"></font-awesome-icon>
      </div>
    </div>
    <header class="title">
      <h1>LISA KIM</h1>
      <p>Front End Developer</p>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {},
};
</script>

<style scoped>
  .home {
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: calc(100vh - 135px);
  }

  .icon-wrapper,
  .title {
    position: absolute;
  }


  .icon-wrapper {
    z-index: -1;
    margin-top: -25px;
  }


  .icon-wrapper div{
    display: inline-block;
  }


  .icon {
    color: #f7f7f7;
    font-size: 380px;
  }


  .slash {
    font-weight: 900;
    font-size: 30em;
    position: relative;
    top: 35px;
    margin: 0 20px;
  }


  h1 {
    font-size: 88px;
    font-weight: 300;
    letter-spacing: .2em;
    margin:0;
    color: #000000;
    line-height: 1.4;
  }


  p {
    margin-top: 0px;
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: .03em;
    color: #868686;
  }
</style>
