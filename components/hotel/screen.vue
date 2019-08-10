<template>
  <div class="screen">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="search">
        <el-select
          filterable
          remote
          reserve-keyword
          :remote-method="remoteMethod"
          v-model="form.value"
          placeholder="目的地"
          @select="handledeStinatSelect"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" class="date">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="至"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
          @onPick="handleDate(maxDate, minDate)"
        ></el-date-picker>
      </el-col>
      <el-col :span="6" class="people">
        <el-input
          placeholder="人数未定"
          suffix-icon="el-icon-circle-plus-outline"
          v-model="form.people"
        ></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="handleSearch">查看价格</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      form: {
        value: "",
        date: "",
        people: ""
      },
      states: [],
      dataList: []
    };
  },
  methods: {
    //   下拉目的地时触发
    handledeStinatSelect(value) {},
    //   输入目的地时触发
    remoteMethod(value) {
      if (!value) {
        cb([]);
        return;
      }
      this.$axios({
        url: "/cities",
        params: { name: value }
      }).then(res => {
        console.log(res);
        const { data } = res.data;
        // const newData = [];
        this.options = data;
      });
    },
    // 选择日期时触发
    handleDate(maxDate, minDate) {},

    // 点击查看价格的事件
    handleSearch() {
      // this.$axios({
      //   url: "/hotels"
      // }).then(res => {
      //   console.log(res);
      //   this.dataList = res.data.data;
      //   this.$emit("getData", dataList);
      // });
    }
  }
};
</script>

<style lang="less" scoped>
.screen {
  margin: 25px 0;
}
.search {
  margin-right: 30px;
}
.date {
  margin-right: 20px;
}
.people {
  margin-left: 105px;
  margin-right: 20px;
}
</style>

