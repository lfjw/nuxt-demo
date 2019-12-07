<template>
  <div class='system-index'>
    detail
   {{$route.query.id}}
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.$route.query.id)
  },
};
</script> 
<style scoped lang='less'>
</style>