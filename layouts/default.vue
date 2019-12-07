<template>
  <!-- 前端跳转不经过服务端，但是刷新页面会经过服务端 -->
  <div>
    <span @click='toIndex'>首页</span>
    <span @click="toDetail">详情</span>
    <span @click="toDetailPath">详情/defail/4</span>
    <span @click="toDetailId">详情?id=1</span>
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: ["layout"],
  methods: {
    toIndex() {
      this.$router.push({ name: "index" });
    },
    toDetail() {
      this.$router.push({ name: "detail" });
    },
    toDetailId() {
      this.$router.push({
        name: "detail",
        query: {
          id: 5
        }
      });
    },
    toDetailPath() {
      this.$router.push({ path: "/detail/5" });
    }
  },
  mounted() {}
};
</script>

<style>
</style>
