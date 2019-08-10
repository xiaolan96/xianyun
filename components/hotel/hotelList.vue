<template>
  <div class="hotelList">
    <el-row
      type="flex"
      justify="space-between"
      v-for="(item,index) in data"
      :key="index"
      class="hotelitem"
    >
      <el-col :span="8" class="image">
        <a :href="$router.push('/hotel')">
          <img :src="item.photos" alt />
        </a>
      </el-col>
      <el-col :span="10" class="list">
        <h2>
          <a href>{{item.name}}</a>
        </h2>
        <el-row>
          <span></span>
          <span class="pingying">
            <i>{{item.alias}}</i>

            <i
              class="iconfont iconhuangguan"
              v-for="item2 in (item.hotellevel?item.hotellevel.level:0)"
              :key="item2"
            ></i>

            <i>{{item.hoteltype.name}}</i>
          </span>
        </el-row>
        <el-row class="pingfen">
          <el-col :span="10">
            <el-rate
              v-model="item.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </el-col>
          <el-col :span="7" class="pingjia">
            <i>72</i>条评价
          </el-col>
          <el-col :span="7">5篇游记</el-col>
        </el-row>
        <el-row>
          <span class="address">位于：{{item.address}}</span>
        </el-row>
      </el-col>
      <el-col :span="6" type="flex" justify="space-between" class="right">
        <a
          href="https://hotels.ctrip.com/hotel/694679.html"
          target="hotels.vue"
          class="ruanjian"
          v-for="(item1,index1) in item.products"
          :key="index1"
        >
          <el-col :span="12" class="pingtai">{{item1.name}}</el-col>
          <el-col :span="12" class="r-price">
            ￥{{item.price}}
            <i>起></i>
          </el-col>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"]
};
</script>

<style lang="less" scoped>
.hotelitem {
  box-sizing: border-box;
  padding: 25px 0;
  border-bottom: 1px solid #eee;
}
.hotelList .image {
  display: block;
  padding: 0px 10px;
  img {
    width: 320px;
    height: 210px;
  }
}
.list {
  padding: 0px 10px;
  a {
    font-weight: normal;
  }
}
.pingying {
  color: #999;
}
.iconfont {
  color: orange;
}
.pingfen {
  margin: 10px 0;
  .pingjia {
    padding-left: 15px;
    i {
      color: orange;
    }
  }
}
.address {
  font-size: 14px;
  color: #666;
}

.ruanjian {
  cursor: pointer;
  width: 235px;
  margin: 5px 0;
  padding: 12px 0;
  display: block;
  height: 16px;
  border-bottom: 1px solid #ccc;
  .pingtai {
    font-size: 14px;
    color: #666;
  }
  .r-price {
    padding: 0 5px;
    font-size: 16px;
    color: orange;
    i {
      color: #666;
      font-size: 15px;
    }
  }
}
</style>

