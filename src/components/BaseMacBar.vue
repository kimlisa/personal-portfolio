<template>
  <div class="mac-bar">
    <div class="mac-bar__circles">
      <div class="mac-bar__circles__ball mac-bar__circles__ball--red"></div>
      <div class="mac-bar__circles__ball mac-bar__circles__ball--yellow"></div>
      <div class="mac-bar__circles__ball mac-bar__circles__ball--green"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMacBar',
};
</script>

<style scoped>


.mac-bar {
  height: 42px;
  background: #f7f7f7;
  /*background: #282A36;*/
  border-radius: 8px 8px 0 0;
  transition: all .15s ease-in;
}


.mac-bar__circles {
  margin-left: 10px;
}


.mac-bar__circles__ball {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin: 15px 4px;
  border-radius: 50%;
}


.mac-bar__circles__ball--red {
  background: #ff5f5c;
  border: 1px solid #e74445;
}


.mac-bar__circles__ball--yellow {
  background: #ffbb4e;
  border: 1px solid #e4a044;
}


.mac-bar__circles__ball--green {
  background: #00c857;
  border: 1px solid #14ad48;
}


</style>
