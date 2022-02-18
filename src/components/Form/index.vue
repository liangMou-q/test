<template>
  <el-form ref="ruleForm" :model="searchData" :rules="rules" :size="size" :inline="isInline" :label-width="labelWidth" class="form">
    <el-form-item v-for="item in searchForm" :key="item.prop" :label="item.label" :prop="item.prop">
      <!-- 输入框 -->
      <el-input v-if="item.type==='input'" v-model="searchData[item.prop]" :disabled="isdisabled" clearable :placeholder="item.placeholder" />
      <!-- 文本域 -->
      <el-input v-if="item.type==='textarea'" v-model="searchData[item.prop]" :type="item.type" :autosize="{ minRows: 2, maxRows: 4}" clearable :placeholder="item.placeholder" />
      <!-- 下拉框 -->
      <el-select v-if="item.type==='select'" v-model="searchData[item.prop]" :disabled="isdisabled" clearable :placeholder="item.placeholder" @change="item.change(searchData[item.prop])">
        <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value" />
      </el-select>
      <!-- 单选 -->
      <el-radio-group v-if="item.type==='radio'" v-model="searchData[item.prop]">
        <el-radio v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio>
      </el-radio-group>
      <!-- 单选按钮 -->
      <el-radio-group v-if="item.type==='radioButton'" v-model="searchData[item.prop]" @change="item.change && item.change(searchData[item.prop])">
        <el-radio-button v-for="ra in item.radios" :key="ra.value" :label="ra.value">{{ ra.label }}</el-radio-button>
      </el-radio-group>
      <!-- 复选框 -->
      <el-checkbox-group v-if="item.type==='checkbox'" v-model="searchData[item.prop]">
        <el-checkbox v-for="ch in item.checkboxs" :key="ch.value" :label="ch.value">{{ ch.label }}</el-checkbox>
      </el-checkbox-group>
      <!-- 日期 -->
      <el-date-picker v-if="item.type==='date'" v-model="searchData[item.prop]" disabled :placeholder="item.placeholder" />
      <!-- 时间 -->
      <el-time-select v-if="item.type==='time'" v-model="searchData[item.prop]" type="" />
      <!-- 日期时间 -->
      <el-date-picker v-if="item.type==='dateTime'" v-model="searchData[item.prop]" type="datetime" disabled />
      <!-- 开关 -->
      <el-switch v-if="item.type==='switch'" v-model="searchData[item.prop]" />
    </el-form-item>
    <!-- footer-button -->
    <div v-if="isHandle" style="display: inline-block">
      <el-form-item>
        <el-button v-for="item in searchHandle" :key="item.label" :type="item.type" :size="item.size || size" @click="item.handle()">{{ item.label }}</el-button>
      </el-form-item>
    </div>

  </el-form>
</template>
<script>
export default {
  props: {
    // 是否禁用
    isdisabled: {
      type: Boolean,
      default: false
    },
    // 是否有按钮
    isHandle: {
      type: Boolean,
      default: true
    },
    // 表单域标签的宽度
    labelWidth: {
      type: String,
      default: '60px'
    },
    // 表单内组件的尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // 行内表单模式
    isInline: {
      type: Boolean,
      default: true
    },
    // 表单配置
    searchForm: {
      type: Array,
      default: () => []
    },
    // 查询/修改/重置按钮
    searchHandle: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 查找数据
    searchData: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    /**
     * 提交验证
     */
    submitForm() {
      return new Promise((resolve, reject) => {
        this.$refs['ruleForm'].validate(valid => {
          if (valid) {
            resolve(this.searchData)
          } else {
            console.log('error submit!!')
            resolve(false)
          }
        })
      })
    },

    /**
     * 重置按钮
     */
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    },

    /**
     * 清除验证信息
     */
    clear() {
      this.$refs['ruleForm'].clearValidate()
    }
  }

}

</script>
<style>
.form{
  margin:0px 10px;
  /* margin-right: 10px; */
}
</style>
