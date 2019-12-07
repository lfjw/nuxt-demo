<template>
  <div class='system-index'>

    <!-- /user/1/2 -->
    {{$route.params}}
    {{$route.params.id}}
    {{$route.params.name}}
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {}
};
</script> 
<style scoped lang='less'>
</style>