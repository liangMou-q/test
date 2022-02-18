<template>
  <el-table
    :data="tableData"
    size="small"
    style="width: 100%"
    height="252"
  >
    <el-table-column
      fixed
      prop="index"
      label="序号"
      width="100"
    />
    <el-table-column
      prop="name"
      label="品名"
      width="120"
    />
    <el-table-column
      prop="date"
      label="最近购买"
      width="120"
    />
    <el-table-column
      prop="city"
      label="颜色"
      width="120"
    />
    <el-table-column
      prop="size"
      label="尺码"
      width="80"
    />
    <el-table-column
      prop="zip"
      label="售价"
      width="110"
    />
    <el-table-column
      prop="zip"
      label="累计购买数"
      width="110"
    />
    <el-table-column
      prop="zip"
      label="累计金额"
      width="120"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>
<style lang="sass" scoped>

</style>
