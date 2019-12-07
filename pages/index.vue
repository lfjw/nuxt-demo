<template>
  <div class="container">
    <div class='box'>
      首页
      <div v-for="item in data.list">
        {{item.id}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["page"],
  // 服务端和客户端都执行
  // 在服务端执行就是服务端获取数据
  // 在客户端执行 ajax 会把返回的结果合并到data上
  // asyncData只能在页面组件中才有，不能在layout获取或者components获取
  async asyncData({ $axios }) {
    //console.log(Object.keys(content), "----");
    let { data } = await $axios.get("/api/user");
    return { data: data };
  },
  // fetch他不用返回结果 服务端和客户端都执行
  // 一版都只是操作vuex使用
  fetch() {},
  // 服务端没有此生命周期
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => {
    //     this.$nuxt.$loading.finish();
    //   }, 1000);
    // });
  },
  //服务端有的生命周期
  beforeCreate() {
    console.log("beforeCreate");
  },
  //服务端有的生命周期
  created() {
    console.log("created");
  }
};
</script>

<style scoped lang='less'>
.container {
  background: #ccc;
  .box {
    height: 100px;
  }
}
</style>
