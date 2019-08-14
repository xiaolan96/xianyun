<template>
  <div class="post-content">
    <div class="search">
      <el-input
        class="input-search"
        placeholder="请输入想去的地方，比如：广州"
        suffix-icon="el-icon-search"
        v-model="data"
      ></el-input>
      <el-row class="introduce">
        <el-col :span="2">
          <span>推荐：</span>
        </el-col>
        <el-col :span="1">
          <span class="introduce-city">广州</span>
        </el-col>
        <el-col :span="1">
          <span class="introduce-city">上海</span>
        </el-col>
        <el-col :span="1">
          <span class="introduce-city">北京</span>
        </el-col>
      </el-row>
    </div>
    <div class="title">
      <el-row type="flex" justify="space-between">
        <span>推荐攻略</span>
        <nuxt-link :to="'/post/create'">
          <el-button type="primary" icon="el-icon-edit">写游记</el-button>
        </nuxt-link>
      </el-row>
    </div>
    <RecommondCity :city="city" />
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="city.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import RecommondCity from "@/components/post/recommondCity.vue";
export default {
  data() {
    return {
      data: "",
      city: [],
      pageIndex: 1,
      pageSize: 3
    };
  },
  methods: {
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      const start = this.pageSize * this.pageIndex - this.pageSize;
      const pageNum = {
        _start: start,
        _limit: this.pageSize
      };
      this.$emit("handleSizeChange", pageNum);
    },
    handleCurrentChange(value) {
      this.pageIndex = value;
      const start = this.pageSize * this.pageIndex - this.pageSize;
      const pageNum = {
        _start: start,
        _limit: this.pageSize
      };
      this.$emit("handleCurrentChange", pageNum);
    },
    pageNumber(){
      const start = this.pageSize * this.pageIndex - this.pageSize;
      const pageNum = {
        _start: start,
        _limit: this.pageSize
      };
      this.$emit("pageNumber", pageNum);
    }
  },
  mounted () {
    this.pageNumber()
  },
  props: {
    data: {
      type: String,
      default: ""
    },
    city: {
      type: Array,
      default: []
    }
  },
  components: {
    RecommondCity
  }
};
</script>

<style lang="less" scoped>
.post-content {
  .search {
    .input-search {
      border: 3px solid orange;
    }
    /deep/.el-input__inner {
      border: none;
      height: 34px;
    }
    /deep/.el-input__icon {
      line-height: 34px;
      font-size: 22px;
      font-weight: 900;
      color: orange;
    }
    .introduce {
      padding: 10px 0;
      font-size: 12px;
      color: #666;
      .introduce-city {
        cursor: pointer;
      }
      .introduce-city:hover {
        text-decoration: underline;
        color: orange;
      }
    }
  }
  .title {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    span {
      line-height: 40px;
      font-size: 18px;
      color: orange;
      border-bottom: 1px solid orange;
    }
  }
  .block {
    margin: 10px 0;
  }
}
</style>

