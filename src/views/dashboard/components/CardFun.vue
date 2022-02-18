<!-- 功能 -->
<template>
  <div class="cardfun">
    <div class="cardfun_lg">
      <CardMenu :header="header" :button="button" :shadow="'always'">
        <template #card_fun>
          <FunList />
        </template>
      </CardMenu>
    </div>
    <div class="cardfun_md">
      <CardMenu>
        <template #card_fun>
          <el-collapse @change="handleChange">
            <el-collapse-item title="全部功能" name="1">
              <FunList />
            </el-collapse-item>
          </el-collapse>
        </template>
      </CardMenu>
    </div>
  </div>
</template>
<script>
import CardMenu from '@/components/CardMenu/index.vue'
import FunList from '@/components/FunList/index.vue'
// import { toRefs, reactive } from 'vue-demi'
export default {
  components: {
    CardMenu,
    FunList
  },
  data() {
    return {
      header: '常用功能',
      button: '全部功能',
      activeNames: ['1']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.cardfun {
  font-size: 0.1rem;
  // font-weight: bold;
  @media screen and (max-width: 992px) {
    .cardfun_lg{
      display: none;
    }
  }
   @media screen and (min-width: 992px) {
    .cardfun_md{
      display: none;
    }
  }
}
</style>
