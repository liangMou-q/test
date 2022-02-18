<template>
  <el-dropdown @command="handleCommand">
    <!-- <span class="el-dropdown-link">
      近七天
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span> -->
    <el-button type="primary" size="small">
      {{ text }}
      <i class="el-icon-arrow-down el-icon--right" />
      <!-- <el-icon class="el-icon--right"><arrow-down /></el-icon> -->
    </el-button>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="day">近七天</el-dropdown-item>
        <el-dropdown-item command="month">近一月</el-dropdown-item>
        <el-dropdown-item command="year">近半年</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
// import { defineComponent } from 'vue'
// import { ArrowDown } from '@element-plus/icons-vue'

export default {
  // components: {
  //   ArrowDown
  // },
  data() {
    return {
      text: '近七天'
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'day') {
        this.text = '近七天'

        this.$store.commit('dropdown/SET_DATE', 6)
      } else if (command === 'month') {
        this.text = '近一月'

        this.$store.commit('dropdown/SET_DATE', 30)
      } else if (command === 'year') {
        this.text = '近半年'
        this.$store.commit('dropdown/SET_DATE', 181)
      }

      this.$message(`${this.text}`)
    }
  }
}
</script>
