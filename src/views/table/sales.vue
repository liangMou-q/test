<!-- 销售信息表 -->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.goodsName" placeholder="商品名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in typeOptions" :key="item.key" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新增
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>
      <!-- <FormDrawer :drawer-data="listQuery" /> -->
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      max-height="515"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="售卖日期" width="160px" align="center">
        <template slot-scope="{row}">
          <!-- <span>{{ row.createdAt | parseTime('{y}-{m}-{d} {h}:{i}') }}</span> -->
          <span>{{ parseTime(row.createdAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="销售编号" width="160px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.saleCode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="职员编号" width="160px">
        <template slot-scope="{row}">
          <!-- <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag> -->
          <span>{{ row.staffCode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品编号" width="210px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.goodsCode }}</span>
          <br>
          <el-tag>{{ row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.goodsName }}</span>
          <!-- <el-tag>{{ row.type }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="销售数量" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.saleNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="销售价格" width="110px">
        <template slot-scope="{row}">
          <!-- <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" /> -->
          <span>{{ row.salePrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleDetail(row)">
            查看
          </el-button>
          <el-popconfirm title="确认删除" @onConfirm="handleDelete(row,$index)">
            <el-button v-if="row.status!='deleted'" slot="reference" size="mini" type="danger" style="margin-left: 5%;">
              删除
            </el-button>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getSaleslist" />

    <!-- 修改弹窗 -->
    <el-drawer size="40%" :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <FormDrawer ref="dataForm" :drawer-data="drawerData" :type-options="typeOptions" :search-form="searchForm" @submit="submit" />
    </el-drawer>
  </div>
</template>

<script>
import { salesList, insertsales } from '@/api/sales'
// import { getlatest, insertinventory } from '@/api/inventory'
import insertMixin from '@/mixins/insert'

// import { parseTime } from '@/utils'
import { getOnlycode } from '@/utils/only-code'
// import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
// import FormDrawer from './components/FormDrawer.vue'
// import _ from 'lodash'

// const typeOptions = [
//   { value: '衣服', label: '衣服' },
//   { value: '裤子', label: '裤子' },
//   { value: '鞋子', label: '鞋子' },
//   { value: '袜子', label: '袜子' }
// ]
export default {
  name: 'ComplexTable',
  // components: {
  //   Pagination,
  //   FormDrawer
  // },

  mixins: [insertMixin],

  data() {
    return {
      // 表单配置
      searchForm: [
        { type: 'input', label: 'ID:', prop: 'id', placeholder: '请输入ID' },
        // { type: 'input', label: '销售编号:', prop: 'saleCode', placeholder: '请编辑内容' },编号自动生成
        { type: 'input', label: '商品编号:', prop: 'goodsCode', placeholder: '请编辑内容' },
        { type: 'input', label: '销售数量:', prop: 'saleNum', placeholder: '请编辑内容' },
        { type: 'input', label: '销售价格', prop: 'salePrice', placeholder: '请输入日期' },
        { type: 'input', label: '职员编号:', prop: 'staffCode', placeholder: '请编辑内容' }
      ],
      tableKey: 1,
      // // 数据列表
      // list: null,
      // mylist: null,
      // total: 0,
      // 加载
      // listLoading: true,
      // // lsit参数
      // listQuery: {
      //   page: 1,
      //   limit: 20,
      //   goodsName: undefined,
      //   type: undefined,
      //   sort: '+id'
      // },

      // 类型
      // typeOptions,

      // 升序/降序
      // sortOptions: [{ label: '升序', key: '+id' }, { label: '降序', key: '-id' }],

      // 修改的信息
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      // drawerData: {},
      dialogFormVisible: false,
      dialogStatus: '',

      // textMap: {
      //   detail: '查看信息',
      //   create: '新增记录'
      // },
      // dialogPvVisible: false,
      // pvData: [],
      // rules: {
      //   type: [{ required: true, message: 'type is required', trigger: 'change' }],
      //   timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
      //   title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      // },
      downloadLoading: false
    }
  },
  created() {
    // this.getList()
    this.getSaleslist()
  },
  methods: {
    // /**
    //  * 时间处理
    //  */
    // parseTime,

    // /**
    //  * 获取数据列表
    //  */
    // async getSaleslist() {
    //   this.listLoading = true
    //   const { data } = await salesList(this.listQuery)

    //   console.log('api数据', data)
    //   // this.list = data.rows
    //   // this.total = data.count
    //   this.list = data.pageList
    //   this.total = data.total
    //   setTimeout(() => {
    //     this.listLoading = false
    //   }, 1000)
    // },
    getSaleslist() {
      this.getList(salesList)
    },

    /**
     * 搜索结果
     */
    handleFilter() {
      this.listQuery.page = 1
      // this.getList()
      this.getSaleslist()
    },

    // sortChange(data) {
    //   const { prop, order } = data
    //   if (prop === 'id') {
    //     this.sortByID(order)
    //   }
    // },
    // /**
    //  * 根据ID排序
    //  * @param {*} order
    //  */
    // sortByID(order) {
    //   if (order === 'ascending') {
    //     this.listQuery.sort = '+id'
    //   } else {
    //     this.listQuery.sort = '-id'
    //   }
    //   this.handleFilter()
    // },

    // /**
    //  * 清空表单数据
    //  */
    // resetTemp() {
    //   this.drawerData = {
    //     createdAt: new Date(),
    //     type: '衣服'
    //   }
    // },
    // /**
    //  * 新增记录
    //  */
    // handleCreate() {
    //   // console.log(this)
    //   this.resetTemp()
    //   this.dialogStatus = 'create'
    //   this.dialogFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
    // },
    // createData() {
    //   this.$refs['dataForm'].validate((valid) => {
    //     if (valid) {
    //       this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
    //       this.temp.author = 'vue-element-admin'
    //       createArticle(this.temp).then(() => {
    //         this.list.unshift(this.temp)
    //         this.dialogFormVisible = false
    //         this.$notify({
    //           title: 'Success',
    //           message: 'Created Successfully',
    //           type: 'success',
    //           duration: 2000
    //         })
    //       })
    //     }
    //   })
    // },

    // /**
    //  * 查看操作
    //  * @param {object} row-整行数据
    //  */
    // handleDetail: _.throttle(function(row) {
    //   this.dialogStatus = 'detail'
    //   this.dialogFormVisible = true
    //   this.drawerData = row
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
    // }, 1000),

    /**
     * 修改提交
     */
    // updateData() {
    //   this.$refs['dataForm'].validate((valid) => {
    //     if (valid) {
    //       const tempData = Object.assign({}, this.temp)
    //       tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
    //       updateArticle(tempData).then(() => {
    //         const index = this.list.findIndex(v => v.id === this.temp.id)
    //         this.list.splice(index, 1, this.temp)
    //         this.dialogFormVisible = false
    //         this.$notify({
    //           title: 'Success',
    //           message: 'Update Successfully',
    //           type: 'success',
    //           duration: 2000
    //         })
    //       })
    //     }
    //   })
    // },

    /**
     * 新增提交
     * @param {object} value
     */
    async submit(value) {
      // this.dialogStatus ? 'create' : 'detail '
      if (this.dialogStatus === 'create' && value) {
        // 新增
        const formData = Object.assign({ saleCode: getOnlycode('BILL') }, { ...value })
        console.log(formData.saleNum)
        const flag = await this.getLatestmsg(formData.saleCode, formData.goodsCode, Number(formData.saleNum))
        if (flag) {
          await this.add(insertsales, formData)
          this.getSaleslist()
        }
      } else if (this.dialogStatus === 'detail' && value) {
        // 修改
        alert(1)
      }
    },

    // /**
    //  * 新增记录
    //  * @param {object} formData
    //  */

    // async add(formData) {
    //   const res = await insertsales(formData)
    //   console.log(res)
    //   this.dialogFormVisible = false
    //   this.$notify({
    //     title: 'Success',
    //     message: '新增成功',
    //     type: 'success',
    //     duration: 2000
    //   })
    //   this.getSaleslist()
    // },

    /**
     * 删除数据
     * @param {object} row
     * @param {number} index
     */
    handleDelete: _.throttle(function(row, index) {
      this.$notify({
        title: 'Success',
        message: '删除成功！！',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    }, 5000),

    /**
     * 导出excel
     */
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['ID', '售卖日期', '销售编号', '职员编号', '商品编号', '商品名称', '销售数量', '销售价格']
        const filterVal = ['id', 'createdAt', 'saleCode', 'staffCode', 'goodsCode', 'goodsName', 'saleNum', 'salePrice']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    }

    // /**
    //  * 返回要导出的list的所需字段
    //  * @param {string[]} filterVal-字段名
    //  */
    // formatJson(filterVal) {
    //   return this.list.map(v => filterVal.map(j => {
    //     if (j === 'timestamp') {
    //       return parseTime(v[j])
    //     } else {
    //       return v[j]
    //     }
    //   }))
    // },
    // /**
    //  * 获取ID的class
    //  * @param {string} key
    //  */
    // getSortClass(key) {
    //   const sort = this.listQuery.sort
    //   return sort === `+${key}` ? 'ascending' : 'descending'
    // }
  }
}
</script>
