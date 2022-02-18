<template>
  <div>
    <FormDrawer
      ref="validateForm"
      size="medium"
      label-width="90px"
      :rules="rules"
      :is-handle="isHandle"
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
      default: true
    },
    // 商品的基本信息
    drawerData: {
      type: Object,
      default: () => {}
    },
    typeOptions: {
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
      isHandle: false,
      searchForm: [
        { type: 'input', label: 'ID:', prop: 'id', placeholder: '请输入ID' },
        { type: 'input', label: '商品编号:', prop: 'goodsCode', placeholder: '请编辑内容' },
        { type: 'input', label: '商品名称:', prop: 'goodsName', placeholder: '请编辑内容' },
        { type: 'input', label: '基础定价:', prop: 'goodsPrice', placeholder: '请编辑内容' },
        { type: 'dateTime', label: '创建日期', prop: 'createdAt', placeholder: '请输入日期' }
      ],
      searchHandle: [
        { label: '提交', type: 'primary', handle: () => this.searchHandleForm() },
        { label: '重置', type: 'primary', handle: () => this.reset() }
      ],
      rules: {
        id: [{ required: true, message: '请输入ID', trigger: 'blur' }],
        goodsCode: [{ required: true, message: '请输入商品编号', trigger: 'blur' }],
        goodsName: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        goodsPrice: [{ required: true, message: '请输入基础定价', trigger: 'blur' }],
        createdAt: [{ required: true, message: '请输入创建日期', trigger: 'blur' }]
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
    searchHandleForm() {
      return this.$refs['validateForm'].submitForm()
    },

    /**
     * 重置按钮
     */
    reset() {
      this.searchData = {}
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

