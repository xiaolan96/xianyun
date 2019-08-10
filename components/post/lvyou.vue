<template>
  <div class="strategy_subject">
    <el-row :gutter="20">
      <!-- 攻略左边 -->
      <el-col :span="16">
        <!-- 攻略详情 -->
        <div class="strategy_head">
          <a href="#">旅游攻略</a>
          <span>/攻略详情</span>

          <p class="strategy_zi">塞班贵？一定是你的打开方式不对！6000块玩转塞班</p>
        </div>
        <!-- 攻略阅读 -->
        <div class="strategy_read">
          <span>攻略：2019-05-22 10:57</span>
          <span>阅读：5956</span>
        </div>

        <!-- 攻略文字 -->
        <div class="strategy_character">
          <p>
            大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，
            那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班
          </p>
          <p>
            <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpg" alt />
          </p>
          <span style="color:rgb(153,153,153)">图：塞班岛。 by第5季旅游</span>
        </div>
        <!-- 攻略转塞班 -->
        <div class="strategy_Saipan">
          <h2>一、怎样用6000块玩转塞班？</h2>
          <p>
            大多数出境游客人不做预算或最终花费远远超出预算，
            对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？
            下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。
          </p>
        </div>
        <!-- 怎样订机票 -->
        <div class="strategy_ticket">
          <h3>1.怎样订机票+酒店性价比最高？</h3>
          <p>
            机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，
            剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，
            也就意味着在塞班岛用来吃行玩购的钱就增加了
            <img
              src="../../static/6@2x.png"
              alt
            />
          </p>
        </div>

        <!-- 大图片 -->
        <div class="picture">
          <img width="650px" src="../../static/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpg" alt />
          <p>
            怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，
            2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，
            光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，
            所以建议大家有直飞还是尽量选择直飞。
          </p>
          <p>
            在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，
            塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。
          </p>
          <p>
            怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、
            酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。
          </p>
          <!-- 收藏 -->

          <el-row :gutter="20">
            <el-col :span="12" :offset="6">
              <div class="enshrine">
                <div class="enshrine_loio">
                  <i class="el-icon-edit-outline"></i>
                  <p>评论（100）</p>
                </div>
                <div class="enshrine_loio">
                  <i class="el-icon-star-off"></i>
                  <p>收藏</p>
                </div>
                <div class="enshrine_loio">
                  <i class="el-icon-share"></i>
                  <p>分享</p>
                </div>
                <div class="enshrine_loio">
                  <i class="iconfont iconding"></i>
                  <p>点赞(42)</p>
                </div>
              </div>
            </el-col>
          </el-row>

          <!-- 评论 -->
          <div class="discuss">
            <p>评论</p>
            <input type="text" placeholder="说点什么..." />
          </div>
          <!-- 提交相册 -->

          <el-row :gutter="20">
            <!-- 提交相片框 -->
            <el-col :span="12">
              <div>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog size="tiny">
                  <img width="100%" alt />
                </el-dialog>
              </div>
            </el-col>
            <el-col :span="12">
              <!-- 确认按钮 -->
              <div class="juonsse">
                <el-button type="primary">提交</el-button>
              </div>
            </el-col>
          </el-row>

          <!-- 评论区 -->

          <div class="criticism_Box">
            <!-- 大盒子上面 -->
            <div class="criticism_up">
              <!-- 大盒子上面左边 -->
              <div class="criticism_po">
                <img src="../../static/avatar.jpg">
                <span>地球发动机</span>
                <span> 2019-08-09 10:03</span>
              </div>
              <!-- 大盒子上面右边 -->
              <div class="criticism_pu">
                <span>5</span>
              </div>
                
            </div>
            <!-- 大盒子下面 -->
            <div class="criticism_below">
                    <div class="criticism_powwe">
                      
                <span>地球发动机</span>
                <span> 2019-08-09 10:03</span>
                    </div>
                    <p>asdasdas</p>
            </div>
          </div>

          <!-- 分页 -->
            <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[2, 3, 4, 5]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
        </div>
      </el-col>
      <!-- 攻略右边 -->
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.strategy_head {
  width: 650px;
  padding-top: 15px;
}
.strategy_head span {
  color: rgb(219, 210, 210);
}
.strategy_zi {
  font-size: 30px;
  border-bottom: 1px solid rgb(219, 210, 210);
  padding: 15px 0;
}
.strategy_read {
  text-align: right;
  padding: 15px 0;
}
.strategy_read span {
  color: #999;
  margin-left: 20px;
}
.strategy_Saipan p {
  padding-bottom: 10px;
}
.strategy_ticket p {
  padding-bottom: 15px;
}
.enshrine {
  margin-left: 50px;
  display: flex;
  width: 650px;
  height: 100px;
}
.enshrine_loio {
  width: 100px;
  justify-content: center;
  color: orange;
  padding: 15px 0;
}
.enshrine_loio i {
  width: 65px;

  display: block;
  font-size: 28px;
}
.enshrine_loio p {
  font-size: 12px;
}
.discuss p {
  font-size: 20px;
}
.discuss input {
  width: 650px;
  height: 50px;
}
.criticism_Box {
  border: 1px solid #ddd;
  width: 680px;
  height: 490px;
  padding: 20px 20px 5px;
  margin: 15px 0 15px 0 ;
}
// .criticism_up ::after {
//     visibility: hidden;
//     clear: both;
//     display: block;
//     content: ".";
//     height: 0
// }
.criticism_up {
  width:650px;
  height: 35px;
}
.criticism_up img {
  width: 25px;
  height: 25px;

}
.criticism_powwe {
  font-size: 14px;
}
.criticism_po {
  float: left;
}
.criticism_pu {
  float:right;
}
.criticism_below {
  padding-top: 5px;
  background: #f9f9f9f9;
  height: 80px;
  border: 1px solid #ddd;
}
// .criticism_below img {
//   width: 25px;
//   height: 25px;

// }
.demonstration {
  width: 650px;
}




.grid-content {
  width: 300px;
  height: 500px;
  background-color: pink;
}
.strategy_character img {
  width: 650px;
}
</style>

