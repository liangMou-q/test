<!-- 供应商卡片 -->
<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="item in 6" :key="item" :sm="12" :md="12" :lg="4">
        <Card
          :header="'北京三木堂商贸有限公司'"
          @click.native="dialogVisible = true"
        >
          <template #card_fun>
            <p>张国强（183****2345）</p>
            <p>订单数量：200</p>
            <p>待支付：<span style="color: tomato;">2000</span></p>
          </template>
        </Card>
      </el-col>
    </el-row>
    <el-dialog
      title="供应商信息"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      custom-class="dialog"
    >
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="供应商信息" name="first">
            <div class="head">
              <!-- <image src="@/assets/404_images/404.png" alt="" /> -->
              <img src="@/assets/test/test.png" alt="">
            </div>
            <div class="msg">
              <ul>
                <li><p> 联系人员 <span>刘某某</span> </p></li>
                <li><p>供应商类型 <span>零售</span></p></li>
                <li><p>累计销售 <span>40,605,60</span></p></li>
                <br>
                <li><p>订单应付 <span style="color: tomato;">32,000</span></p></li>
                <li><p>优惠折扣 <span>100%</span></p></li>
                <li><p>备注 <span /></p></li>
              </ul>
              <ul>
                <li><p>联系电话 <span>13333331333</span></p></li>
                <li><p>客户归属 <span>公司共享</span></p></li>
                <li><p>分销账号 <span>未开通</span></p></li>
                <br>
                <li><p>期初欠款 <span style="color: tomato;">0,00</span></p></li>
                <li><p>预付款 <span>1,234</span></p></li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="资料修改" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="历史记录" name="third">
            <supplier-table :columns="columns" :table-data="tableData" :width="100" />
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <el-divider />
        <span slot="footer" class="dialog-footer">
          <el-row :gutter="12">
            <template v-if="activeName === 'first'">
              <el-col :span="8"> <span><i class="el-icon-s-finance" />付款</span></el-col>
              <el-col :span="6"> <span><i class="el-icon-document-copy" />付款明细</span></el-col>
              <el-col :span="6"> <span><i class="el-icon-upload2" />发送账单</span></el-col>
            </template>
            <template v-if="activeName === 'third'">
              <el-col :span="3"> <span><i class="el-icon-search" />搜索</span></el-col>
              <el-col :span="4"> <span><i class="el-icon-plus" />创建订单</span></el-col>
              <el-col :span="16"> <span>订单明细</span></el-col>
            </template>
          </el-row>
        </span>
      </template>

    </el-dialog>
  </div>
</template>
<script>
import Card from '@/components/CardMenu'
import SupplierTable from '@/components/DialogTable'
export default {
  components: {
    Card,
    SupplierTable
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',

      columns: [
        { prop: 'index', lable: '序号' },
        { prop: 'name', lable: '品名' },
        { prop: 'date', lable: '最近购买' },
        { prop: 'color', lable: '颜色' },
        { prop: 'size', lable: '尺码' },
        { prop: 'number', lable: '累计购买数' },
        { prop: 'amount', lable: '累计金额' }
      ],
      tableData: [{
        index: 1,
        date: '2016-05-03',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 2,
        date: '2016-05-02',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 3,
        date: '2016-05-04',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 4,
        date: '2016-05-01',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 5,
        date: '2016-05-08',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 6,
        date: '2016-05-06',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }, {
        index: 7,
        date: '2016-05-07',
        name: '羽绒服',
        color: '红色',
        size: 'm',
        number: 200333,
        amount: 123123
      }]
    }
  },
  methods: {
    handleClose(done) {
      // this.$confirm('确认关闭？')
      // .then(_ => {
      done()
      // })
      // .catch(_ => {})
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }

}
</script>
<style lang="scss" >
.el-row{
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
.dialog{
  min-width: 500px;
  .el-dialog__body {
    padding:10px 20px 0 20px;
  }
  .el-dialog__footer{
    padding-top: 0;
    padding-bottom: 40px;
    span{
      cursor: pointer;
    }
  }
  .head{
    // background-color: tomato;
    height: 200px;
    float: left;
    width: 10%;
    // height: 100%;
    img{
      width: 110px;
      height: 110px;
      margin: 25px;
      border: rgb(202, 201, 201) solid 1px;
      border-radius: 50%;
    }
  }
  .msg{
    display: flex;
    justify-content: space-around;
    margin-left: 120px;
    li{
      list-style: none;
    }
  }
}
</style>
