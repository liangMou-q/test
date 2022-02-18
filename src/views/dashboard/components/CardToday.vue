<!-- 今日信息 -->
<template>
  <CardMenu>
    <!-- <slot name="card_today"></slot> -->
    <template #card_fun>
      <el-row :gutter="20" type="flex">
        <el-col :span="10">
          <div class="today">
            <p id="date">今日{{ title }}笔数</p>
            <p id="count">{{ count }}</p>
            <p id="num">近7天{{ title }}笔数变化</p>
          </div>
        </el-col>

        <el-col :span="14">
          <ELine
            :s-data="sData"
            :is-show="isShow"
            :trigger="trigger"
            :position="position"
            :x-data="xData"
            :s-type="sType"
            :color="color"
          />
        </el-col>
      </el-row>
    </template>
  </CardMenu>
</template>
<script>
// import CardMenu from '@/components/CardMenu/index.vue'
import CardMenu from '@/components/CardMenu/index.vue'
import ELine from '@/components/Echarts/ELine.vue'

export default {
  components: {
    CardMenu,
    ELine
  },
  props: {
    title: {
      type: String,
      default: '购贷'
    },
    count: {
      type: Number,
      default: 0
    },
    // test:所有配置
    sData: {
      type: Array,
      default() {
        return []
      }
    },
    // x轴
    xData: {
      type: Array,
      default() {
        return []
      }
    },
    color: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShow: false,
      trigger: 'item',
      position: 'left',
      sType: 'line'
    }
  }
}
</script>
<style lang="scss" scoped>
#data {
  font-size: 0.8rem;
}
#count {
  font-size: 2rem;
}
#num {
  font-size: 0.5rem;
}
</style>
