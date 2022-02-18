<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <CardFun />
      </el-col>

      <el-col v-for="item in list" :key="item.title" :sm="12" :md="12" :lg="6">
        <CardToday
          :title="item.title"
          :count="item.count"
          :s-data="item.sData"
          :x-data="item.xData"
          :color="item.color"
        />
      </el-col>

      <el-col :span="24">
        <CardMenu>
          <template v-slot:card_fun>
            <Tabs :my-data="chartsData" :charts-xdata="chartsXdata" @table-click="tableClick" />
          </template>
        </CardMenu>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { parseTime } from '@/utils'
import { saleNum } from '@/api/sales'
import { getStocknum } from '@/api/stock'
import CardFun from './components/CardFun.vue'
import CardToday from './components/CardToday.vue'

import CardMenu from '@/components/CardMenu/index.vue'
import Tabs from '@/components/Tabs/index.vue'

export default {
  components: {
    CardFun,
    CardToday,
    CardMenu,
    Tabs
  },
  data() {
    return {
      todayList: [
        {
          title: '付款',
          count: 20,
          sData: [150, 230, 224, 218, 135, 147, 260],
          xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          color: '#d1b100'
        },
        {
          title: '收款',
          count: 50,
          sData: [150, 200, 100, 100, 135, 300, 400],
          xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          color: 'tomato'
        }
      ],
      list: [],
      salesNum: undefined,
      stockNum: undefined,
      salesxData: undefined,
      stockxData: undefined,
      // stockNum: Array(7).fill(0),
      chartsData: [],
      chartsXdata: []
    }
  },
  watch: {
    '$store.state.dropdown.date': {
      handler(newVal) {
        console.log('天数', newVal)
        this.getSaleNum(newVal, 'second')
        this.getStock(newVal, 'second')
      }
    }
  },
  created() {
    this.getSaleNum(undefined, 'first')
    this.getStock(undefined, 'first')

    this.list = this.todayList
  },
  methods: {
    // 格式化时间
    parseTime,
    /**
     * 查询销售记录
     * @param {number} days
     */
    async getSaleNum(days = 6, flag = 'first') {
      const { data } = await saleNum(days)

      const sumSale = []
      const datax = []
      data.forEach((item) => {
        sumSale.push(Number(item.sum))
        datax.push(item.RepDate)
        // this.xData.splice(0, this.xData.length, item.createdAt)
      })
      // const datax = array.map((item) => {
      //   return parseTime(item, 'YYYY-MM-DD')
      // })
      console.log('@@销售', data)
      if (flag === 'first') {
        if (data.length > 7) {
          sumSale.splice(0, 1)
        }
        this.todayList.push(
          {
            title: '销货',
            count: sumSale[sumSale.length - 1],
            sData: sumSale,
            xData: datax,
            color: '#67cc00'
          }
        )
      }
      this.salesNum = sumSale
      this.salesxData = datax

      // this.$nextTick(() => {
      this.tableClick()
      // })
    },

    /**
     * 查询采购记录
     * @param {number} days
     */
    async getStock(days = 6, flag = 'first') {
      const { data } = await getStocknum(days)
      console.log('采购', data)
      const sumStock = []
      // const datax = []
      const datax = []
      data.forEach((item) => {
        sumStock.push(Number(item.sum))
        datax.push(item.RepDate)
      })

      if (flag === 'first') {
        if (data.length > 7) {
          sumStock.splice(0, 1)
        }
        this.todayList.push(
          {
            title: '入库',
            count: sumStock[sumStock.length - 1],
            sData: sumStock,
            xData: datax,
            color: '#4a43ff'
          }
        )
      }
      this.stockNum = sumStock
      this.stockxData = datax
      this.tableClick()
    },
    /**
     * 点击的那一个lable
     */
    tableClick(labelName = this.$store.state.dropdown.labelName) {
      console.log(labelName)
      this.$store.commit('dropdown/SET_LABELNAME', labelName)
      if (labelName === 'first') {
        this.chartsData = this.salesNum
        this.chartsXdata = this.salesxData
      } else if (labelName === 'second') {
        // console.log('ooo', this.stockNum, this.stockxData)
        this.chartsData = this.stockNum
        this.chartsXdata = this.stockxData
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  padding-bottom: 10px;
  // sytle="padding-button:10px"
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.user-info-list span {
  margin-left: 70px;
}
.mgb20 {
  margin-bottom: 20px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
