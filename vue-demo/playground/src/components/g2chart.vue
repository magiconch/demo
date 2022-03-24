<template>
  <div class="chart-component">
    <h1>{{ chartinfo }}</h1>
    <div id="c1"></div>
  </div>
</template>
 
<script>
import * as G2 from "@antv/g2";
export default {
  name: "G2Chart",
  data() {
    return {
      title: "demo",
      defaultConfig: {
        data: [
          { type: "未知", value: 654, percent: 0.02 },
          { type: "17 岁以下", value: 654, percent: 0.02 },
          
        ],
        container: "c1", //图表所绑定的div id
        width: 600,
        height: 300,
      },
    };
  },
  props: {
    chartinfo: String,
    chartdata: Object,
    // gtwopiecolor:{
    //     type: Array
    // },
  },
  methods: {
    test: function () {
      const data = this.chartdata === null ? this.defaultConfig.data : this.chartdata;
      // Step 1: 创建 Chart 对象

      const chart = new G2.Chart({
        container: this.defaultConfig.container, // 指定图表容器 ID
        // autoFit: true,
        width: this.defaultConfig.width, // 指定图表宽度
        height: this.defaultConfig.height, // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(data);
      chart.tooltip(false);

      chart.scale("value", {
        alias: "销售额(万)",
      });

      // Step 3：创建图形语法
      this.changeChartType(chart);
      
      
      // Step 4: 渲染图表
      chart.render();
    },

    changeChartType: function(chart) {
      if (this.chartinfo == 'line') {
        chart.line().position('type*value').label('value');
      } else {
        chart.interval().position("type*value");
      }
    }
  },
  //在挂载时调用两个函数
  mounted() {
    this.test();
  },
};
</script>
 
<style scoped>
/* .chart-component {
  width: 600px;
  height: 400px;
} */

</style>
 