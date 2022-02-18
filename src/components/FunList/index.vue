<!-- 功能列表 -->
<template>
  <el-row :gutter="12">
    <el-col v-for="item in list" :key="item.iconClass" :sm="12" :md="6" :lg="3">
      <el-card shadow="hover" :body-style="{ padding: '20px', textAlign: 'center',}">
        <div><i class="iconfont" :class="item.iconClass" /></div>
        <div><span style="padding-left:5px">{{ item.name }}</span></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  // props: {
  //   funList: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {
      list: [
        {
          iconClass: 'icon-caigouruku-',
          name: '采购入库'
        },
        {
          iconClass: 'icon-caigoudingdanliebiao',
          name: '采购订单'
        },
        {
          iconClass: 'icon-xiaoshouyewu',
          name: '销售业务'
        },
        {
          iconClass: 'icon-xiaoshouchuku',
          name: '销售出库'
        },
        {
          iconClass: 'icon-shoukuan',
          name: '收款记录'
        },
        {
          iconClass: 'icon-fukuan',
          name: '付款记录'
        },
        {
          iconClass: 'icon-_chakanpandiandan',
          name: '查看盘点单'
        },
        {
          iconClass: 'icon-xiaoshoulirunbiao',
          name: '销售利润表'
        }
      ]
    }
  }
}
</script>
