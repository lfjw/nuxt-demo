<template>
  <div class="container">
    <div class='box'>
      首页
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["page"],
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 1000);
    });
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
