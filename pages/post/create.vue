<template>
  <div class="create">
    <div class="text">
        <P class="title">发表新攻略</p>
        <p class="share">分享你的个人游记，让更多人看到哦！</p>
        <el-input class="input" v-model="input" placeholder="请输入标题">
        </el-input>
        <VueEditor :config="config" ref="vueEditor" />
        <div class="select">
            <span>选择城市</span>
            <el-autocomplete 
              class="input1" 
              v-model="input1" 
              placeholder="请搜索游玩城市"
              :fetch-suggestions="querySearchAsync" 
              @select="handleSelect"
            ></el-autocomplete>
        </div>
        <el-button class="button" type="primary" @click="publish" >发布</el-button>
        <span>或者</span>
        <span class="save" >保存到草稿</span>
    </div>
  </div>
</template>
<script>
// 需要单独引入样式
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  name: "create",
  data() {
    return {
        input:'',
        input1:'',
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      }
    };
  },
  methods: {
    async querySearchAsync(queryString,cb){
      const city = []
      let res=await this.$axios({
        url:`http://157.122.54.189:9095/airs/city`,
        params:{
          name:queryString
        }
      })
      res.data.data.forEach(item=>{
        city.push({value:item.name})
      })
      cb(city)
    },
    handleSelect(value){
      this.input1 = value.value
    },
    publish(){
      
    }
  },
  components: {
    VueEditor
  }
};
</script>

<style lang="less" scoped>
.create {
  width: 1000px;
  margin: 20px auto;
  .text{
      width:720px;
    .title{
        font-size: 22px;
    }
    .share{
        padding: 20px 0 10px;
        color: #aaa;
        font-size: 12px;
    }
    .input{
        padding: 20px 0;
    }
    /deep/.ql-editor{
        height:400px;
    }
    .select{
        padding: 20px 0;
        color: #666;
        font-size: 14px;
        .input1{
            margin-left: 10px; 
            width: 200px;
        }
    }
    /deep/.el-button{
        padding: 8px 15px;
        font-size: 12px;
    }
    >span{
        font-size: 14px;
    }
    .save{
        cursor: pointer;
        color: orange;
    }
    .save:hover{
        text-decoration: underline;
    }
  }
}
</style>
