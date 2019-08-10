<template>
  <div class="container">
    <!-- 面包屑 -->
    <el-row type="flex" class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京城市预订</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <!-- 顶部筛选 -->
    <div>
      <Screen />
    </div>
    <!-- 地图 -->
    <div class="map">
      <Map />
    </div>
    <!-- 酒店筛选 -->
    <div class="list-filter"></div>
    <!-- 酒店列表 -->
    <HotelList :data="dataList" />
    <!-- 分页 -->
  </div>
</template>

<script>
import Screen from "@/components/hotel/screen.vue";
import HotelList from "@/components/hotel/hotelList.vue";
import Map from "@/components/hotel/map.vue";
export default {
  data() {
    return {
      dataList: {},
      citydata: []
    };
  },
  components: {
    Screen,
    HotelList,
    Map
  },
  methods: {
    getData() {
      this.$axios({
        url: "/hotels"
      }).then(res => {
        console.log(res);
        this.dataList = res.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  .crumbs {
    margin-top: 25px;
  }
}
</style>

