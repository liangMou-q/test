import { salesList, insertsales } from '@/api/sales'
import { getlatest, insertinventory } from '@/api/inventory'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { getOnlycode } from '@/utils/only-code'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import FormDrawer from '@/views/table/components/FormDrawer.vue'
import _ from 'lodash'
const typeOptions = [
  { value: '衣服', label: '衣服' },
  { value: '裤子', label: '裤子' },
  { value: '鞋子', label: '鞋子' },
  { value: '袜子', label: '袜子' }
]
export default {
  components: {
    Pagination,
    FormDrawer
  },
  // 自定义指令
  directives: { waves },
  data() {
    return {
      typeOptions,
      listQuery: {
        page: 1,
        limit: 20,
        goodsName: undefined,
        type: undefined,
        sort: '+id'
      },
      textMap: {
        detail: '查看信息',
        create: '新增记录'
      },
      // 升序/降序
      sortOptions: [{ label: '升序', key: '+id' }, { label: '降序', key: '-id' }],
      // 数据列表
      list: null,
      total: 0,
      listLoading: true,
      drawerData: {},
      dialogFormVisible: false
    }
  },
  methods: {
    /**
     * 时间处理
     */
    parseTime,
    /**
     * 获取数据列表
     */
    async getList(fn) {
      this.listLoading = true
      const { data } = await fn(this.listQuery)

      console.log('api数据', data)
      // this.list = data.rows
      // this.total = data.count
      this.list = data.pageList
      this.total = data.total
      setTimeout(() => {
        this.listLoading = false
      }, 500)
    },
    /**
     * 获取指定商品的最新盘点信息
     *  @param {string} goodsCode
     * @param {number} saleNum
     */
    async getLatestmsg(code, goodsCode, outNum = 0, inNum = 0) {
      let inQuantity = 0
      let monthBegin = 0
      let monthEnd = 0
      // console.log(goodsCode)
      const { data } = await getlatest(goodsCode)
      // 如果商品不存在
      if (inNum === 0 && data.monthEnd === null) {
        this.$notify({
          title: 'Errror',
          message: `商品不存在`,
          type: 'warning',
          duration: 5000
        })
        return false
      }
      if (outNum !== 0) {
        inQuantity = data.inQuantity
        monthBegin = data.monthEnd
        monthEnd = data.monthEnd - outNum
      } else if (inNum !== 0) {
        inQuantity = data.inQuantity + inNum
        monthBegin = data.monthEnd + inNum
        monthEnd = data.monthEnd + inNum
      }

      if (monthEnd < 0) {
        this.$notify({
          title: 'Errror',
          message: `库存不足!!当前库存为 ${data.monthEnd}`,
          type: 'warning',
          duration: 5000
        })
        return false
      }
      const obj = { inventoryCode: getOnlycode('INVEN'), goodsCode, inQuantity, monthBegin, monthEnd, sales: Number(outNum), back: 0, code }
      // console.log(obj)

      await insertinventory(obj)
      return true
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    /**
         * 根据ID排序
         * @param {*} order
         */
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },

    /**
         * 清空表单数据
         */
    resetTemp() {
      this.drawerData = {
        createdAt: new Date(),
        type: '衣服'
      }
    },

    /**
         * 新增记录
         */
    handleCreate() {
      // console.log(this)
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },

    /**
         * 查看操作
         * @param {object} row-整行数据
         */
    handleDetail: _.throttle(function(row) {
      this.dialogStatus = 'detail'
      this.dialogFormVisible = true
      this.drawerData = row
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    }, 1000),

    /**
         * 新增记录
         * @param {object} formData
         */
    async add(fn, formData) {
      const res = await fn(formData)
      console.log(res)
      this.dialogFormVisible = false
      this.$notify({
        title: 'Success',
        message: '新增成功',
        type: 'success',
        duration: 2000
      })
      // this.getSaleslist()
    },

    /**
         * 返回要导出的list的所需字段
         * @param {string[]} filterVal-字段名
         */
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    /**
         * 获取ID的class
         * @param {string} key
         */
    getSortClass(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
