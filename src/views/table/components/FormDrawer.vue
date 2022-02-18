<template>
  <div>
    <FormDrawer
      ref="validateForm"
      size="medium"
      label-width="90px"
      :rules="rules"
      :is-handle="isHandle"
      :is-inline="false"
      :search-data="searchData"
      :search-form="searchForm"
      :search-handle="searchHandle"
      :isdisabled="isdisabled"
    />
  </div>

</template>

<script>
import FormDrawer from '@/components/Form'
export default {
  components: { FormDrawer },
  props: {
    isdisabled: {
      type: Boolean,
      default: false
    },
    isHandle: {
      type: Boolean,
      default: true
    },
    drawerData: {
      type: Object,
      default: () => {}
    },
    // 类型选择
    typeOptions: {
      type: Array,
      default: () => {
        return []
      }
    },
    searchForm: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 表单数据绑定
      searchData: {},
      // 是否显示 form按钮
      // isHandle: true,
      searchHandle: [
        { label: '提交', type: 'primary', handle: () => this.searchHandleForm() },
        { label: '重置', type: 'primary', handle: () => this.reset() }
      ],
      rules: {
        id: [{ required: true, message: '请输入', trigger: 'blur' }],
        inventoryCode: [{ required: true, message: '请输入', trigger: 'blur' }],
        goodsCode: [{ required: true, message: '请输入', trigger: 'blur' }],
        inQuantity: [{ required: true, message: '请输入', trigger: 'blur' }],
        monthBegin: [{ required: true, message: '请输入', trigger: 'blur' }],
        sales: [{ required: true, message: '请输入', trigger: 'blur' }],
        back: [{ required: true, message: '请输入', trigger: 'blur' }],
        monthEnd: [{ required: true, message: '请输入', trigger: 'blur' }],
        saleCode: [{ required: true, message: '请输入', trigger: 'blur' }],
        saleNum: [{ required: true, message: '请输入', trigger: 'blur' }],
        salePrice: [{ required: true, message: '请输入', trigger: 'blur' }],
        staffCode: [{ required: true, message: '请输入', trigger: 'blur' }],

        goodsName: [{ required: true, message: '请输入', trigger: 'blur' }],
        inPrice: [{ required: true, message: '请输入', trigger: 'blur' }],
        purchaser: [{ required: true, message: '请输入', trigger: 'blur' }],
        supCode: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  watch: {
    // 更新所选数据
    drawerData: {
      immediate: true,
      handler() {
        this.searchData = Object.assign({}, { ...this.drawerData })
      }
    }
  },
  methods: {
    /**
     * 下拉事件
     */
    actionChange() {
      console.log('change事件')
    },

    /**
     * 提交按钮
     */
    async searchHandleForm() {
      const formValue = await this.$refs['validateForm'].submitForm()
      this.$emit('submit', formValue)
    },

    /**
     * 重置按钮
     */
    reset() {
      // this.searchData = {}
      Object.assign(this.searchData, { ...this.drawerData }, { createdAt: new Date() })
      // console.log(this.searchData)
      this.$refs['validateForm'].resetForm()
    },

    /**
     * 清除验证信息
     */
    clearValidate() {
      this.$refs['validateForm'].clear()
    }
  }
}
</script>

