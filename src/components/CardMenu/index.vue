<!-- 卡片 -->
<template>
  <el-card :shadow="shadow" style="height: 100%; margin:.1rem .2rem" :body-style="{padding:'1% 10px',cursor: 'pointer'}">
    <template v-if="header !== ''" #header>
      <div class="clearfix">
        <span>{{ header }}</span>
        <el-button class="button" type="text">{{ button }}</el-button>
      </div>
    </template>
    <!-- 内容 -->
    <slot name="card_fun" />
  </el-card>
</template>

<script>
export default {
  props: {
    shadow: {
      type: String,
      default: 'hover'
    },
    header: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

.button {
  float: right;
  padding: 0;
  min-height: 20px;
}
</style>
