<template>
  <div>
    <br>
    <FormDrawer
      ref="searchForm"
      size="medium"
      :rules="rules"
      :is-handle="true"
      :search-data="searchData"
      :search-form="searchForm"
      :search-handle="searchHandle"
    />

    <el-row :gutter="20">
      <el-col v-for="item in goodsData" :key="item.id" :sm="12" :md="8" :lg="4">
        <card-menu class="card_menu" style="height: 20rem;" @click.native="goodsDailog(item)">
          <template #card_fun>
            <div class="goods">
              <div class="title">
                <h3 style="margin-left:10px">{{ item.goodsName }}</h3>
                <p>{{ item.goodsCode }}</p>
                <p><span style="color: tomato;">{{ item.goodsPrice }}</span></p>
              </div>

              <div class="demo-image__lazy">
                <!-- <img class="img" :src="item.goodsImg" alt=""> -->

                <el-image :src="item.goodsImg" :fit="fit" lazy>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline" />
                  </div>
                </el-image>
              </div>
            </div>
          </template>
        </card-menu>
      </el-col>
    </el-row>
    <el-dialog
      title="商品信息"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      custom-class="goods_dialog"
    >
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-row :gutter="20">
              <el-col :sm="24" :md="16" :lg="15">
                <goods-form
                  ref="goodsDate"
                  :drawer-data="fromData"
                  :isdisabled="isdisabled"
                />
              </el-col>
              <el-col :sm="24" :md="7" :lg="8">
                <img-upload
                  :image-url="imgurl"
                />
              </el-col>
            </el-row>

          </el-tab-pane>
          <el-tab-pane label="库存与成本" name="second">
            <goods-table :columns="columns" :table-data="tableData" :width="140" />
          </el-tab-pane>
          <el-tab-pane label="历史销售" name="third">
            <goods-table :columns="saleColumns" :table-data="saleTableData" :width="140" />
          </el-tab-pane>
          <el-tab-pane label="历史采购" name="fourth">
            <goods-table :columns="instockColumns" :table-data="instockTableData" :width="140" />
          </el-tab-pane>
        </el-tabs>
        <el-divider />
        <span slot="footer" class="dialog-footer">
          <el-row :gutter="12">
            <template v-if="activeName === 'first'">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button v-show="isdisabled" type="primary" @click="edit()">修改</el-button>
              <el-button v-show="!isdisabled" type="primary" @click="editSubmit()">提交</el-button>
            </template>
          </el-row>
        </span>
      </template>

    </el-dialog>
  </div>
</template>
<script>
import { goodsList } from '@/api/goods'
import FormDrawer from '@/components/Form'
import GoodsTable from '@/components/DialogTable'
import CardMenu from '@/components/CardMenu'
import GoodsForm from './components/goodsForm.vue'
import ImgUpload from './components/imgUpload.vue'
export default {
  components: {
    CardMenu,
    GoodsTable,
    GoodsForm,
    ImgUpload,
    FormDrawer
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      // 基本信息
      fromData: {},
      // 图片地址
      imgurl: '',
      // 搜索条件数据绑定
      searchData: {
        name: '',
        age: '',
        date: ''
      },
      searchForm: [
        { type: 'input', label: '姓名：', prop: 'name', placeholder: '请输入姓名' },
        { type: 'input', label: '年龄:', prop: 'age', placeholder: '请输入年龄' },
        { type: 'date', label: '日期:', prop: 'date', placeholder: '请选择日期' }
      ],
      searchHandle: [
        { label: '查询', type: 'primary', handle: () => this.searchHandleForm() },
        { label: '重置', type: 'primary', handle: () => this.reset() },
        { label: '新增', type: 'primary', handle: () => this.add() }
      ],
      rules: {
        name: [
          { message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
        ]
      },
      // 输入框禁用
      isdisabled: true,
      // goodsData: [
      //   {
      //     id: 1,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2021-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 2,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2022-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 3,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2023-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 4,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2024-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 5,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2025-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 6,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2026-01-24 10:53:48'
      //   // goodsImg: '@/assets/test/test.png'
      //   },
      //   {
      //     id: 7,
      //     goodsCode: 'Goods-cxq',
      //     goodsName: '长袖群',
      //     goodsPrice: 100.00,
      //     goodsImg: 'https://api.blogbig.cn/random/api.php',
      //     createdAt: '2027-01-24 10:53:48'
      //   }
      // ],

      goodsData: [],
      columns: [
        { prop: 'index', lable: '序号' },
        { prop: 'color', lable: '颜色' },
        { prop: 'size', lable: '尺码' },
        { prop: 'inventory', lable: '库存数' },
        { prop: 'price', lable: '库存成本价' },
        { prop: 'turnover', lable: '库存流水' }
      ],
      tableData: [
        {
          index: 1,
          color: '黄黑色',
          inventory: '310',
          price: '100.1',
          turnover: '查看',
          size: 'm'
        }, {
          index: 2,
          color: '黄色',
          inventory: '310',
          price: '100.1',
          turnover: '查看',
          size: 'm'
        }
      ],
      saleColumns: [
        { prop: 'index', lable: '序号' },
        { prop: 'goodsCode', lable: '商品编号' },
        { prop: 'saleNum', lable: '销售数量' },
        { prop: 'salePrice', lable: '价格' },
        { prop: 'date', lable: '日期' }
      ],
      saleTableData: [
        {
          index: 1,
          goodsCode: 'GOOODS2016_011',
          saleNum: '10',
          salePrice: '499',
          date: '2021-11-26 02:55:50'
        }, {
          index: 2,
          goodsCode: 'GOOODS2016_011',
          saleNum: '10',
          salePrice: '499',
          date: '2021-11-26 02:55:50'
        }
      ],
      instockColumns: [
        { prop: 'index', lable: '序号' },
        { prop: 'goodsCode', lable: '商品编号' },
        { prop: 'intockNum', lable: '采购数量' },
        { prop: 'salePrice', lable: '价格' },
        { prop: 'date', lable: '日期' }
      ],
      instockTableData: [
        {
          index: 1,
          goodsCode: 'GOOODS2016_011',
          intockNum: '10',
          salePrice: '499',
          date: '2021-11-26 02:55:50'
        }, {
          index: 2,
          goodsCode: 'GOOODS2016_011',
          intockNum: '10',
          salePrice: '499',
          date: '2021-11-26 02:55:50'
        }
      ]
    }
  },
  watch: {
    // 动态修改isdisabled的值
    dialogVisible: {
      immediate: true,
      handler() {
        this.isdisabled = this.dialogVisible
      }
    }
  },
  created() {
    this.getGoodslist()
  },
  methods: {
    /**
     * 获取商品列表
     */
    async getGoodslist() {
      const res = await goodsList()
      console.log('%%%', res)
      this.goodsData = res.data
    },

    /**
     * 搜索
     */
    async searchHandleForm() {
      console.log('查询')
      //  this.$refs['searchForm'].submitForm()
      const res = await this.$refs['searchForm'].submitForm()
      console.log(res)
    },
    reset() {
      console.log('重置')
    },
    handleClose(done) {
      // this.$confirm('确认关闭？')
      // .then(_ => {
      done()
      // })
      // .catch(_ => {})
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },

    /**
   *商品详情对话框
   * @param {object} item
   */
    goodsDailog(item) {
      this.dialogVisible = true
      console.log('item数据', item)
      this.fromData = item
      this.imgurl = item.goodsImg
    },
    /**
     * 修改商品
     * @param {object} item
     */
    edit(item) {
      this.isdisabled = !this.isdisabled
      this.fromData = { ...this.fromData, createdAt: new Date() }

      // this.dialogVisible = false
    },
    /**
     * 修改后提交
     */
    async editSubmit() {
      // 表单验证
      const res = await this.$refs['goodsDate'].searchHandleForm()
      console.log(res)
      if (res) {
        this.$nextTick(() => {
          this.$refs['goodsDate'].clearValidate()
        })
        this.dialogVisible = false
      }
    },
    /**
     * 新增信息
     */
    add() {
      console.log('新增')
    }
  }
}
</script>
<style lang="scss" scoped>
// .card_menu{
//   height: 3rem;
// }
.el-row{
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
.goods_dialog{
  min-width: 500px;
}
.title{
  // background-color: aliceblue;
  p{
    margin:10px;
  }
}
.goods {
  overflow: hidden;
  .demo-image__lazy{
    // overflow: hidden;
    // position: relative;
    // // width: 400px;  //图片固定宽度
    //     width: 100%;
    // height: 300px;   //图片固定高度度
    // // height: auto;
    // background: black;
  .img{
    // max-width: 100px;
    width: 100%;
    height: auto;
    // max-height: ;
    overflow: hidden;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // // transform: translate(-80%, -80%);

  }
  }

}
</style>
