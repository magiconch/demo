<template>
  <div id="app">
    <!-- <HelloWorld @sendfromchild="updateInfo" msg="父组件的值"/> -->
    <G2Chart :chartinfo=this.chartinfo :chartdata=this.chartdata />
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import G2Chart from './components/g2chart.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    G2Chart
  },
  data() {
    return {
       info: "VUE DEMO",
       chartinfo: "bar",
       chartdata: [
          { type: "未知", value: 654, percent: 0.02 },
          { type: "17 岁以下", value: 654, percent: 0.02 },
          { type: "18-24 岁", value: 4400, percent: 0.2 },
          { type: "25-29 岁", value: 5300, percent: 0.24 },
          { type: "30-39 岁", value: 6200, percent: 0.28 },
          { type: "40-49 岁", value: 3300, percent: 0.14 },
          { type: "50 岁以上", value: 1500, percent: 0.06 },
        ]

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
