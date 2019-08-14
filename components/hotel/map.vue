<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="14">
        <div class="options-row">
          <el-row type="flex" justify="space-beween">
            区域
            <el-row>
              <a href>全部</a>
              <a href></a>
            </el-row>
          </el-row>
        </div>
      </el-col>
      <el-col :span="10">
        <div id="container"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    getdataList() {
      this.$axios({
        url: "/hotels"
      }).then(res => {
        console.log(res, "---------------------------------------+");

        this.dataList = res.data.data;
      });
    }
  },
  mounted() {
    this.getdataList();
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [118.8718107, 31.32846821], //中心点坐标
        viewMode: "3D" //使用3D视图);
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=be907f2e5f5111e21667af83e4e4ea26&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="less" scoped>
#container {
  width: 420px;
  height: 260px;
}
.options-row {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

