<template>
  <el-table
    :data="tableData"
    :size="size"
    style="width: 100%"
    height="252"
  >
    <el-table-column
      v-for="({prop,lable}) in columns"
      :key="lable"
      :fixed="prop === 'index'"
      :prop="prop"
      :label="lable"
      :width="width"
    />
  </el-table>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small'
    },
    width: {
      type: Number,
      default: 120
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="sass" scoped>

</style>
