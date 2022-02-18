// 折线图
<template>
  <div
    id="myChart"
    ref="chart"
    :style="{ width: '100%', height: '100%' }"
  />
</template>

<script>
// import { PropType } from 'vue'
// import { ref, defineProps, nextTick, watchEffect } from 'vue'
import * as echarts from 'echarts'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use(GridComponent, LineChart, UniversalTransition, CanvasRenderer)

// const props = defineProps({
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    xData: {
      type: Array,
      default() {
        return []
      }
    },
    sData: {
      type: Array,
      default() {
        return [0, 0, 0, 0, 0, 0, 0]
      }
    },
    sType: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  // data() {
  //   return {
  //     s_Data: undefined
  //   }
  // },
  // watch: {
  //   sData: {
  //     immediate: true,
  //     handler(newValue) {
  //       console.log('销售', newValue)
  //     }
  //   }
  // },
  mounted() {
    // setTimeout(() => {
    this.line()
    // }, 1000)
  },
  methods: {
    line() {
      const myChart = echarts.init(this.$refs.chart)
      const option = {
        tooltip: {
          trigger: this.trigger,
          position: this.position,
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          show: this.isShow,
          // type: 'time',
          data: this.xData
        },
        yAxis: {
          show: this.isShow,
          // max: 1000,
          // min: 1,
          // show: true,
          type: 'value'
          // position: 'right',
        },
        series: [
          {
            data: this.sData,
            // data: data,
            type: this.sType,
            areaStyle: {
              color: this.color,
              opactiy: 0.3,
              origin: 'start'
            },
            itemStyle: {
              color: this.color
            }
          }
        ],
        legend: {
          lineStyle: {
            color: '#fff'
          }
        }
      }
      option && myChart.setOption(option, true)
      window.onresize = function() {
        // 自适应大小, 不用的话不会自适应大小。
        myChart.resize()
      }
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
#myChart {
  margin: 0;
  /* min-width: 100px; */
  min-height: 100px;
}
</style>
