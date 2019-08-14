<template>
  <div class="aside">
    <div class="nav" @mouseleave="current=-1">
      <div
        :class="['nav-item',{active:current===index}]"
        v-for="(item,index) in cities"
        :key="index"
        @mouseenter="current=index"
      >
        <span class="type">{{item.type}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div :class="['card',{active:index===current}]" v-for="(item,index) in cities" :key="index+100">
        <el-row class="card-item" type="flex" v-for="(item1,index1) in item.children" :key="index1" @click.native="$emit('setCity',item1.city)">
          <el-col :span="2">
            <span class="number">{{index1+1}}</span>
          </el-col>
          <el-col :span="4">
            <span class="city">{{item1.city}}</span>
          </el-col>
          <el-col :span="18">
            <span class="desc">{{item1.desc}}</span>
          </el-col>
        </el-row>
      </div>
    </div>

    <div>
      <el-row class="recommond" type="flex" justify="space-between">推荐城市</el-row>
      <el-row class="image">
        <img src="http://157.122.54.189:9093//images/pic_sea.jpeg" width="260px" alt />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
      current: -1
    };
  },
  methods: {
    getCities() {
      this.$axios({
        url: `/posts/cities`,
        method: "GET"
      }).then(res => {
        this.cities = res.data.data;
      });
    },
  },
  mounted() {
    this.getCities();
  }
};
</script>

<style lang="less" scoped>
.aside {
  .nav {
    background: white;
    position: relative;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    .nav-item {
      position: relative;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      padding: 10px 20px;
      font-size: 14px;
      z-index: 2;
      i {
        float: right;
        font-size: 20px;
      }
    }
    .nav-item.active {
      color: orange;
      border-right-color: white;
    }
    .card {
      display: none;
      z-index: 9;
      position: absolute;
      top: -1px;
      left: 258px;
      width: 360px;
      z-index: 1;
      padding: 10px 20px;
      background-color: #fff;
      border:1px solid #ccc;
      cursor: pointer;
      .card-item{
        font-size: 14px;
        height: 35px;
        line-height: 35px;
        .number{
          color: orange;
          font-size: 20px;
        }
        .city{
          color: orange;
        }
        .city:hover{
          text-decoration: underline;
        }
        .desc{
          color:#aaa;
        }
        .desc:hover{
          text-decoration: underline;
        }
      }
    }
    .card.active {
      display: block;
    }
  }
  .recommond {
    padding: 20px 0 10px;
    border-bottom: 1px solid #ccc;
  }
  .image {
    margin-top: 10px;
  }
}
</style>

