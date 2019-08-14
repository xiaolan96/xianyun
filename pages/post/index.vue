<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <PostAside @setCity="setCity" />
      <PostMain
        :data="data"
        :city="city"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
        @pageNumber="pageNumber"
      />
    </el-row>
  </section>
</template>

<script>
import PostAside from "@/components/post/postAside.vue";
import PostMain from "@/components/post/postMain.vue";

export default {
  data() {
    return {
      data: "",
      city: [],
      pageNum: {}
    };
  },
  components: {
    PostAside,
    PostMain
  },
  methods: {
    pageNumber(pageNum) {
      this.pageNum = pageNum;
    },
    handleSizeChange(pageNum) {
      this.pageNum = pageNum;
      if (this.data === "") {
        this.defaultCity();
      } else {
        const city = this.data;
        this.setCity(city);
      }
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum;
      if (this.data === "") {
        this.defaultCity();
      } else {
        const city = this.data;
        this.setCity(city);
      }
    },
    defaultCity() {
      const pageNum = this.pageNum;
      this.$axios({
        url: `/posts/?_start=${pageNum._start}&_limit=${pageNum._limit}`
      }).then(res => {
        this.city = res.data;
      });
    },
    setCity(city) {
      this.data = city;
      const pageNum = this.pageNum;
      this.$axios({
        url: `/posts/?_start=${pageNum._start}&_limit=${pageNum._limit}`,
        params: {
          city
        }
      }).then(res => {
        this.city = res.data;
      });
    }
  },
  mounted() {
    this.defaultCity();
  }
};
</script>

<style>
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.post-content {
  width: 705px;
  font-size: 14px;
}

.aside {
  width: 260px;
}
</style>