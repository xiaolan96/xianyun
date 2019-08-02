// 保存数据属性state
export const state = () => ({
  userInfo: {
    token: "",
    user: {}
  }
});
// 同步修改数据mutation
export const mutations = {
  // state就是上面的state，这个参数是固定默认的
  // data使用调用该方法时候传入的数据
  setUserInfo(state, data) {
    state.userInfo = data;
  },

  // 清除用户数据
  cleanUserInfo(state) {
    state.userInfo = {
      token: "",
      user: {}
    };
  }
};

// 异步修改数据actions
export const actions = {};
