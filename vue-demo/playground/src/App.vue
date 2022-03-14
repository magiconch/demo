<template>
  <div id="app">
    <HelloWorld @sendfromchild="updateInfo" msg="父组件的值"/>
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
       info: "当前是父组件的原始数据"
    }
    
  },
  methods: {
    updateInfo(data) {
      console.log(data);
      this.info = data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
