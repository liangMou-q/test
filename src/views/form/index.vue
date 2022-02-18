
<!-- 供应商管理 -->
<template>
  <div>
    <br>
    <FormDrawer
      ref="validateForm"
      size="medium"
      :rules="rules"
      :is-handle="true"
      :search-data="searchData"
      :search-form="searchForm"
      :search-handle="searchHandle"
    />
    <SupCard />
  </div>

</template>

<script>
import FormDrawer from '@/components/Form'
import SupCard from './components/supplierCard.vue'
export default {
  components: { FormDrawer, SupCard },
  props: {
    // sexs: {
    //   type: Array,
    //   default: () => {
    //     return [{ label: '男', value: 'M' }, { label: '女', value: 'F' }]
    //   }
    // }
  },
  data() {
    return {
      // 表单数据绑定
      searchData: {
        name: '',
        age: '',
        date: ''
      },
      // sexs: [{ label: '男', value: 'M' }, { label: '女', value: 'F' }],
      searchForm: [
        { type: 'input', label: '姓名：', prop: 'name', placeholder: '请输入姓名' },
        { type: 'input', label: '年龄:', prop: 'age', placeholder: '请输入年龄' },
        { type: 'date', label: '日期:', prop: 'date', placeholder: '请选择日期' }
        // { type: 'select', label: '性别', prop: 'sex', options: this.sexs, change: row => '', placeholder: '请选择性别' }
        // { type: 'Checkbox', label: '爱好', prop: 'interst', checkboxs: intersts, props: interstProps }
      ],
      searchHandle: [
        { label: '查询', type: 'primary', handle: () => this.searchHandleForm() },
        { label: '重置', type: 'primary', handle: () => this.reset() }
      ],
      rules: {
        name: [
          { message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    searchHandleForm() {
      this.$refs['validateForm'].submitForm()
    },
    reset() {
      this.$refs['validateForm'].resetForm()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

