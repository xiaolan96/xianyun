<template>
  <el-row class="bi-cotainer">
    <div class="left-container">
      <div class="recommend">
        <p
          @mouseenter="handleChange(index)"
          @mouseleave="handleChange(hide)"
          v-for="(item,index) in citydata"
          :key="index"
        >
          {{item.type}}
          <span class="el-icon-arrow-right"></span>
        </p>
      </div>
      <!-- 导航 -->
      <div>
        <div v-for="(item,index) in citydata" :key="index">
          <div
            class="left-hiddle"
            v-if="message===index"
            @mouseenter="handleChange(index)"
            @mouseleave="handleChange(hide)"
          >
            <ul class="introduce">
              <li v-for="(item2,index) in item.children" :key="index">
                <a href="#">
                  <i>{{index+1}}</i>
                  <span>{{item2.city}}</span>
                  <span>{{item2.desc}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <div class="recommended">
      <p>推荐城市</p>
      <a href="#">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
      </a>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      citydata: [],
      // nav:[],
      hide: 99,
      message: -1
    };
  },
  methods: {
    handleChange(index) {
      this.message = index;
    },
    getcityList() {
      this.$axios({
        url: "/posts/cities",
        method: "get"
      })
        .then(res => {
          console.log(res);
          this.citydata = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getcityList();
  }
};
</script>

<style lang="less" scoped>
// 图片样式
.recommend {
  margin-left: -50px;
}

.recommended {
  padding-top: 30px;
  margin-left: -50px;

  p {
    font-size: 16px;
  }

  a {
    img {
      display: block;
      width: 260px;
      border-top: 1px solid #ccc;
      padding-top: 10px;
      margin-top: 14px;
    }
  }
}
// 左栏样式
//
.left-container {
  width: 260px;
}
.recommend {
  width: 260px;
  height: 160px;
  // border-right: #000;
  line-height: 40px;
  z-index: 2;
  margin-top: 20px;
  margin-right: 110px;
  p {
    font-size: 14px;
    padding-left: 20px;
    color: #666;
    border: 1px solid #ddd;
    background-color: #fff;
    border-bottom: none;
    z-index: 2;
    position: relative;
    &:hover {
      color: violet;
      border-right-color: #fff;
    }

    &:nth-child(4) {
      border-bottom: 1px solid #ddd;
    }

    span {
      font-size: 20px;
      margin-left: 150px;
    }
  }
}

.left-hiddle {
  width: 350px;
  height: 200px;
  position: absolute;
  top: 13px;
  left: 210px;
  z-index: 1;
  //   z-index: -1;
  background-color: #fff;
  // border: 1px solid #fff;

  .introduce {
    padding-left: 15px;
    background-color: #fff;

    li {
      list-style: none;
      line-height: 38px;
      i {
        font-style: italic;
        font-size: 20px;
        color: orange;
      }
      :nth-child(2) {
        color: orange;
        font-size: 14px;
      }

      span {
        margin-left: 10px;
        &:last-child {
          color: #999;
          font-size: 14px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
// 输入框样式
</style>

