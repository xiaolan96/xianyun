<template>
  <div class="recommond">
    <div v-for="(item,index) in city.data" :key="index">
      <div class="main" v-if="item.images.length>=3">
        <nuxt-link :to="`/post/detail?id=${item.id}`">
          <span class="title">{{item.title}}</span>
          <p class="summary">{{item.summary}}</p>
          <img
            class="mainImg"
            v-for="(index1) in 3"
            :key="index1"
            width="220px"
            height="150px"
            :src="item.images[index1-1]"
            alt
          />
        </nuxt-link>
        <span class="adress">
          <i class="el-icon-location"></i>
          &nbsp;{{item.cityName}}
        </span>
        <span class="by">&nbsp;&nbsp;by</span>
        <nuxt-link :to="'/post/personal'">
          <span class="personal">
            <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" />
            {{$store.state.user.userInfo.user.nickname}}
          </span>
        </nuxt-link>
        <span class="watch">
          &nbsp;
          <i class="el-icon-view"></i>
          {{item.watch}}
        </span>
        <span class="like">{{item.like}}赞</span>
      </div>
      <div class="main1" v-else>
        <el-row type="flex" justify="space-between">
          <nuxt-link :to="`/post/detail?id=${item.id}`">
            <el-col :span="8">
              <img
                class="mainImg"
                v-for="(index1) in 1"
                :key="index1"
                width="220px"
                height="150px"
                :src="item.images[index1-1]"
                alt
              />
            </el-col>
            <el-col :span="16">
              <span class="title">{{item.title}}</span>
              <p class="summary">{{item.summary}}</p>
              <div class="bottom">
                <span class="adress">
                  <i class="el-icon-location"></i>
                  &nbsp;{{item.cityName}}
                </span>
                <span class="by">&nbsp;&nbsp;by</span>
                <nuxt-link :to="'/post/personal'">
                  <span class="personal">
                    <img
                      :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                    />
                    {{$store.state.user.userInfo.user.nickname}}
                  </span>
                </nuxt-link>
                <span class="watch">
                  &nbsp;
                  <i class="el-icon-view"></i>
                  {{item.watch}}
                </span>
                <span class="like">{{item.like}}赞</span>
              </div>
            </el-col>
          </nuxt-link>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="less" scoped>
.recommond {
  .main {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 18px;
    }
    .title:hover {
      cursor: pointer;
      color: orange;
    }
    .summary {
      cursor: pointer;
      margin-top: 20px;
      color: #aaa;
      height: 55px;
      overflow: hidden;
    }
    .mainImg {
      margin: 15px 7px;
    }
    .adress {
      color: #aaa;
      font-size: 12px;
    }
    .by {
      color: #aaa;
      font-size: 12px;
    }
    .personal {
      cursor: pointer;
      color: orange;
      font-size: 12px;
      img {
        height: 15px;
        width: 15px;
      }
    }
    .watch {
      color: #aaa;
      font-size: 12px;
    }
    .like {
      color: orange;
      font-size: 16px;
      float: right;
    }
  }
  .main1 {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 18px;
    }
    .title:hover {
      cursor: pointer;
      color: orange;
    }
    .summary {
      cursor: pointer;
      margin-top: 20px;
      color: #aaa;
      height: 55px;
      overflow: hidden;
    }
    .bottom {
      margin-top: 30px;
      .adress {
        color: #aaa;
        font-size: 12px;
      }
      .by {
        color: #aaa;
        font-size: 12px;
      }
      .personal {
        cursor: pointer;
        color: orange;
        font-size: 12px;
        img {
          height: 15px;
          width: 15px;
        }
      }
      .watch {
        color: #aaa;
        font-size: 12px;
      }
      .like {
        color: orange;
        font-size: 16px;
        float: right;
      }
    }
  }
}
</style>

