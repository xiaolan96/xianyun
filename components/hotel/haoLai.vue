<template>
  <div class="haolaika">
    <div v-for="(item,index) in jiwqqe" :key="index">

    
    <!-- 好来阁商务宾馆 -->
    <div class="business">
      <el-row>
        <el-col :span="24">
          <a href="#">{{bing_cate}}</a>>
          <a href="#">南京酒店</a>>
          <span>{{item.name}}</span>
        </el-col>
      </el-row>
    </div>
    <!-- 好来阁商务图片介绍页 -->
    <div>
      <!-- 好来阁商务图片介绍页 -->
      <div class="business_introduce">
        <el-row>
          <el-col :span="24">
            <span class="jweeeq">{{item.name}}</span>
            
            <i class="iconfont iconhuangguan" v-for="item1 in (item.hotellevel?item.hotellevel.level:0)" :key="item1"></i>
            
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <span>hao lai ge shang wu hotel</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <span class="el-icon-location">阿伟的趣味</span>
          </el-col>
        </el-row>
      </div>
      <!-- 好来阁商务图片页 -->
      <div class="business_picture">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <img width="640" height="360" src="../../static/1.jpeg" alt />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img width="150" src="../../static/2.jpeg" alt />
              <img width="150" src="../../static/3.jpeg" alt />
            </div>
            <div class="grid-content bg-purple">
              <img width="150" src="../../static/4.jpeg" alt />
              <img width="150" src="../../static/5.jpeg" alt />
            </div>
            <div class="grid-content bg-purple">
              <img width="150" src="../../static/6.jpeg" alt />
              <img width="150" src="../../static/7.jpeg" alt />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 好来阁商价格来源 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="价格来源" width="400"></el-table-column>
      <el-table-column prop="name" label="低价房型" width="450"></el-table-column>
      <el-table-column prop="address" label="最低价格/每晚"></el-table-column>
    </el-table>

    <!-- 好来阁高德地图 -->
    <div class="business_plat">
      <!-- 地图左边 -->
      <div class="Gaode_Map"></div>
      <!-- 地图右边详情页 -->

      <el-tabs class="Details_map">
        <el-tab-pane label="风景" name="first"></el-tab-pane>
        <el-tab-pane label="交通" name="second"></el-tab-pane>
        <!-- 地图右边下面表单 -->
        <div class="scrollbar">
          <ol>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
            <li>
              <span class="qirts">甘霖路口(公交站)</span>
              <i>0.09公里</i>
            </li>
          </ol>
        </div>
      </el-tabs>
    </div>

   
      <!-- 基本信息 -->
    <div class="major_message">
      <el-row :gutter="20" class="lvyeww">
        <el-col :span="3">
          <div>主要信息</div>
        </el-col>
        <el-col :span="6">
          <div>入住时间</div>
        </el-col>
        <el-col :span="5">
          <div>离店时间</div>
        </el-col>
        <el-col :span="4">
          <div>2010年开业</div>
        </el-col>
        <el-col :span="4">
          <div>酒店规模</div>
        </el-col>
      </el-row>
      <!-- 主要设施 -->
      <el-row :gutter="20" class="lvyeww">
        <el-col :span="3">
          <div class="grid-content">主要设施</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-tag type="info">标签三</el-tag>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">
            <el-tag type="info">标签三</el-tag>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-tag type="info">标签三</el-tag>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-tag type="info">标签三</el-tag>
          </div>
        </el-col>
      </el-row>
      <!-- 停车服务 -->
      <el-row :gutter="20" class="lvyeww">
        <el-col :span="3">
          <div>停车服务</div>
        </el-col>
        <el-col :span="6">
          <div></div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="4">
          <div></div>
        </el-col>
        <el-col :span="4">
          <div></div>
        </el-col>
      </el-row>

      <!-- 品牌信息 -->
      <el-row :gutter="20" class="lvyeww">
        <el-col :span="3">
          <div>品牌信息</div>
        </el-col>
        <el-col :span="6">
          <div></div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="4">
          <div></div>
        </el-col>
        <el-col :span="4">
          <div></div>
        </el-col>
      </el-row>
    </div>

    <!-- 用户评论 -->
    <div class="comment">
      <div>
        <h4>0条真实用户评论</h4>
      </div>
    </div>
    <!-- 总评数 -->
    <div class="Overall">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="Overall_zong">
            <p>
              总评数：
              <span></span>
            </p>
            <p>
              好评数：
              <span></span>
            </p>
            <p>
              差评数：
              <span></span>
            </p>
          </div>
        </el-col>
        <el-col :span="9">
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <div class="rotundity">推荐</div>
        </el-col>
        <el-col :span="3" class="zitiyan">
          <div>
            <span>环境</span>
          </div>
        </el-col>
        <el-col :span="3" class="zitiyan">
          <div>
            <span>产品</span>
          </div>
        </el-col>
        <el-col :span="3" class="zitiyan">
          <div>
            <span>服务</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 结束div代码 -->
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "携程",
          name: "高级大床房A",
          address: "￥61起"
        },
        {
          date: "携程",
          name: "高级大床房B",
          address: "￥61起"
        },
        {
          date: "携程",
          name: "高级大床房C",
          address: "￥61起"
        }
      ],
      value5: "",
      jiwqqe: [],
   
    };
       console.log(jiwqqe)
  },

  methods: {
    data() {
      this.$axios({
        url: "/hotels"
      }).then(res => {
        console.log(res);
        this.jiwqqe = res.data.data
         
      });
    }
  },

  mounted() {
    this.data();
  }
};
</script>

<style scoped lang="less">
.business {
  font-size: 15px;
  padding: 15px 0 15px 0;
  //  font-weight:10px;
}
.business_introduce .jweeeq {
  font-size: 25px;
  padding-bottom: 15px;
}
.grid-content img {
  padding: 10px 0 11px 7px;
}
.business_plat::after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.Gaode_Map {
  margin-top: 25px;
  background-color: pink;
  width: 650px;
  height: 360px;
  float: left;
  padding-right: 15px;
}

.scrollbar ol li {
  // display: flex;
  height: 40px;

  margin: 0 10px 10px 10px;
}
.scrollbar {
  overflow: auto;
  height: 300px;
  padding-left: 15px;
}
.business_plat {
  padding-top: 20px;
}

.information {
  padding-top: 50px;
}
.scrollbar ol li span {
  padding-right: 50px;
}
.Details_map {
  padding-left: 15px;
}
.lvyeww {
  text-align: center;
  padding-top: 10px;
  height: 50px;
  border-bottom: 1px solid rgb(211, 190, 190);
}
.major_message {
  padding-top: 20px;
}
.comment {
  padding-top: 40px;
}
.Overall {
  padding: 10px 0;
}
.Overall_zong {
  color: rgb(212, 207, 207);
}
.el-icon-star-on {
  color: rgb(185, 65, 65);
}
.zitiyan {
  color: rgb(255, 153, 0);
}
.rotundity {
  color: #fa3;
  width: 70px;
  height: 70px;
  line-height: 70px;
  position: absolute;
  border: 2px solid #fa3;
  transform: rotate(-30deg);
  border-radius: 50%;
  text-align: center;
  opacity: 0.25;

  position: absolute;
  // left: 20px;
  top: -26px;
  right: 636px;
}
</style>
