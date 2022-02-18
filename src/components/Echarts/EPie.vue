// 折线图
<template>
  <div
    id="myChart"
    ref="chart"
    :style="{ width: '100%', height: '100%' }"
  />
</template>

<script>
import * as echarts from 'echarts/core'
import { ToolboxComponent, LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  ToolboxComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
])
export default {
  props: {
    left: {
      type: String,
      default: '15%'
    }
  },
  mounted() {
    this.pie()
  },
  methods: {
    pie() {
      const myChart = echarts.init(this.$refs.chart)
      const option = {
        legend: {
          // top: 'bottom',
          left: this.left,
          orient: 'vertical',
          y: 'center'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: false },
            // dataView: { show: true, readOnly: false },
            // restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, '75%'],
            center: ['55%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              normal: {
                show: true,
                formatter: '{b}: {c}({d}%)'
                // formatter: '{b}: {c}'
              }
            },
            data: [
              { value: 40, name: '羽绒服' },
              { value: 38, name: 'ad鞋子' },
              { value: 32, name: '牛仔裤' },
              { value: 30, name: '长袖裙' },
              { value: 28, name: '连衣裙' },
              { value: 26, name: '皮裤' },
              { value: 22, name: '短裤' },
              { value: 18, name: '风衣' }
            ]
          }
        ]
      }

      // const option = props.chars
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
