<template>
  <!-- <div style="float: right">
    <Dropdown></Dropdown>
  </div> -->
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-for="{ label, name } in tabPane"
      :key="name"
      :label="label"
      :name="name"
      lazy
    >
      <div :key="new Date().getTime()" class="bar">
        <ELine
          :s-data="chartsData"
          :is-show="isShow"
          :trigger="trigger"
          :position="position"
          :x-data="xData"
          :s-type="sType"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="仓库" name="third">
      <div class="bar">
        <EPie v-if="activeName === 'third'" />
      </div>
    </el-tab-pane>
    <el-tab-pane disabled>
      <template v-slot:label>
        <Dropdown />
      </template>
    </el-tab-pane>

  </el-tabs>

</template>
<script>
import ELine from '@/components/Echarts/ELine.vue'
import EPie from '@/components/Echarts/EPie.vue'
import Dropdown from '@/components/Dropdown/index.vue'

export default {
  components: {
    ELine,
    EPie,
    Dropdown
  },
  props: {
    myData: {
      type: Array,
      default() {
        return []
      }
    },
    chartsXdata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

      activeName: 'first',
      tabPane: [
        {
          label: '销售',
          name: 'first'
        },
        {
          label: '采购',
          name: 'second'
        }

      ],
      chartsData: [],
      isShow: true,
      trigger: 'axis',
      position: 'left',
      // xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      xData: [],
      sType: 'bar'
    }
  },
  watch: {
    myData: {
      immediate: true,
      handler() {
        this.chartsData = this.myData
        this.xData = this.chartsXdata
      }
    }
  },
  methods: {
    handleClick({ name }, event) {
      this.$emit('table-click', name)
    }
  }
}

</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 250px;
  min-height: 250px;
  // background-color: tomato;
}
</style>
