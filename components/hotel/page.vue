<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="sizes, prev, pager, next, jumper"
    :total="400"
  ></el-pagination>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>
