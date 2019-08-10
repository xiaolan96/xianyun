<template>
  <div class="dahe">
    <div class=".right-container">
      <!-- 搜索框 -->
      <div class="search-box">
        <el-input placeholder="请输入想去的地方，比如：云南!" class="input-with-select" v-model="value"></el-input>
        <button class="el-icon-search"></button>
      </div>
      <!-- 推荐 -->
      <div class="tuijian">
        <span>推荐:</span>
        <a href="javascript:;" class="tuijianer">
          <span>内蒙</span>
        </a>
      </div>
      <!-- 写游记 -->
      <el-row class="strategy" type="flex" justify="space-between">
        <span>推荐攻略</span>
        <el-button type="primary" @click="handleClick" class="strategy-button">
          <i class="el-icon-edit"></i>
          <nuxt-link to="./post/create">写游记</nuxt-link>
        </el-button>
      </el-row>
      <!-- 推荐文章 -->
      <el-row class="article" v-for="(item,index) in tuijian" :key="index">
        <div>
          <h4>
            <a href="#">{{item.title}}</a>
          </h4>

          <div class="content-box">
            <div class="content">
              <a href="#">
                <p v-html="item.summary"></p>
              </a>
            </div>
            <div class="publicity">
              <el-col v-for="(item2,index2) in item.images" :key="index2" :span="8">
                <a href="#">
                  <img :src="item2" />
                </a>
              </el-col>
            </div>

            <el-row class="userinfo" type="flex" align="middle">
              <div class="location">
                <i class="el-icon-location-outline"></i>
                <span>{{item.cityName}}</span>
              </div>
              <em class="el-icon-star-on"></em>
              <a href="#">
                <img src="../img/touxiang.jpg" alt />
                <span class="user-id">吉山春代</span>
              </a>
              <i class="el-icon-view">{{item.account.nickname}}</i>
              <span></span>
              <span class="like">{{item.watch}}</span>
            </el-row>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      tuijian: []
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/post/create");
    },
    post() {
      this.$axios({
        url: "/posts"
      }).then(res => {
        console.log(res);
        this.tuijian = res.data.data;
      });
    }
  },
  mounted() {
    this.post();
  }
};
</script>

<style lang="less" scoped>
.dahe {
  margin-right: 20;
}
.right-container {
  width: 700px;
  margin: 20px;
}
.search-box {
  position: relative;
  width: 100%;
  margin-top: 20px;

  .input-with-select {
    // border: none;
    box-sizing: border-box;
    width: 700px;
    // border: 3px solid violet;
    height: 40px;
    /deep/.el-input__inner {
      border: 3px solid orange;
    }
  }

  .el-icon-search {
    font-size: 30px;
    color: violet;
    position: absolute;
    top: 3px;
    right: 42px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border-color: #fff;
  }
}
// 推荐
.tuijian {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
  margin-bottom: 6px;

  .tuijianer {
    span {
      padding-left: 10px;
      &:hover {
        color: violet;
        border-right-color: #fff;
      }
    }
  }
}
// 写游记
.strategy {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;

  span {
    border-bottom: 3px solid orange;
    font-size: 18px;
    color: orange;
  }
  .strategy-button {
    height: 40px;
    width: 106px;
  }
}
// 11
.strategy {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;

  span {
    border-bottom: 3px solid orange;
    font-size: 18px;
    color: orange;
  }
  .strategy-button {
    height: 40px;
    width: 106px;
  }
}

.article {
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  h4 {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 10px;
    color: orange;
    &:hover {
      color: violet;
    }
  }

  .content-box {
    width: 100%;
    height: 290px;
    margin-top: 10px;
  }

  .content {
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #666;
    padding-top: 5px;
    margin-bottom: 16px;
  }
}

.publicity {
  height: 137px;
  padding-bottom: 16px;
  overflow: hidden;
  // width: 100%;
  a {
    img {
      //   display: block;
      width: 220px;
      height: 150px;
      object-fit: cover;
    }
  }
}
// 点赞
.userinfo {
  width: 100%;
  height: 26px;
  position: relative;
  text-align: center;
  color: #666;

  .location {
    text-align: center;
  }

  .el-icon-location-outline {
    font-size: 12px;
    color: #666;
    line-height: 26px;
    padding-right: 3px;
    margin-top: 5px;
  }

  .user-id {
    color: orange;
  }

  span {
    font-size: 12px;
    padding-right: 12px;
  }

  img {
    width: 16px;
    text-align: center;
    vertical-align: middle;
    padding-left: 5px;
  }

  em {
    font-size: 12px;
  }

  .like {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    color: orange;
  }
}
.el-icon-view {
  font-size: 12px;
  margin-top: 5px;
}
</style>

