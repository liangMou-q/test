<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item v-for="item in searchHandle" :key="item.label ">
      <el-button type="primary" @click="item.handle()">{{ item.label }}</el-button>
    </el-form-item>

  </el-form>
</template>
<script>
export default {
  props: {
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    },
    searchHandle: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      ruleForm: {
        name: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    }
  }
}
</script>
