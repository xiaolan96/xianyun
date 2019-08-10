<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 左边旅游攻略导航-->
      <commterl />

      <!-- 右边文章 -->
      <commter />
    </el-row>
  </div>
</template>

<script>
import Commterl from "@/components/post/commterl.vue";
import Commter from "@/components/post/commter.vue";

export default {
  data() {
    return {};
  },

  components: {
    Commterl,
    Commter
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  width: 1000px;
  position: relative;
  padding-top: 20px;
}
</style>
