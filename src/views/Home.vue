<template>
  <div class="home">
    <div class="flex-container">
      <section>
        <font-awesome-icon icon="code"></font-awesome-icon>
      </section>
      <header>
        <h1>LISA KIM</h1>
        <p>Front End Developer</p>
      </header>
    </div>
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
  flex-wrap:wrap;
  height: 100vh;
  overflow: hidden;
}

  h1 {
    font-size: 88px;
    font-weight: 400;
    letter-spacing: .2em;
    margin:0 0 20px 0;
    color: #000000;
  }
  p {
    margin-top: 0px;
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: .03em;
    color: #868686;
  }

  .main-icon {
    font-size: 200px;
  }
.main-icon svg * {
  fill: url(#lgrad);
}
.symbol {
  font-size: 200px;
  font-weight: 100;
  background: rgb(34,193,195);
  background: radial-gradient(circle, #e8e259, #ffa532, #ff5158, #ff009d, #a512eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex-container {
  position: relative;
}
.first-letter{
  font-weight: 900;
  font-size: 1.4em;

}
section {
  position: absolute;
  font-size: 500px;
  z-index: -1;
  color: #f6f6f6;
  height: 100vh;
  top: -100%;
  bottom: 0;
  right: 0;
  left: -10%;
}
</style>
