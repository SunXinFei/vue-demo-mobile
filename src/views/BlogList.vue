<template>
  <!-- 博文列表页面 -->
  <div class="blog-list">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">{{id}}</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selected:'2'
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.blog-edit {
}
</style>
