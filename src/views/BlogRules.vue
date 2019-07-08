<template>
  <div class="blog-rules">
    <mt-button
      type="default"
      @click="jumpToList"
    >default</mt-button>
    <mt-button
      type="primary"
      @click="jumpToList"
    >primary</mt-button>
    <mt-button
      type="danger"
      @click="message"
    >danger</mt-button>
    <mt-cell title="标题文字"></mt-cell>
    <mt-cell
      title="标题文字"
      value="说明文字"
    ></mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //获取博文名单（规则）列表
    this.getBlogList();
  },
  methods: {
    /**
     * 跳转页面
     */
    jumpToList() {
      this.$router.push({ name: "BlogList", params: { id: 12 } });
    },
    /**
     * 提示弹窗
     */
    message() {
      this.$toast({
        message: "提示",
        duration: 5000
      });
    },
    /**
     * ajax请求
     */
    getBlogList() {
      // this.isLoading = true;
      // this.$http
      //   .get(`${this.$CONST.baseUrl}/blog-rule/lists`)
      //   .then(res => {
      //     this.isLoading = false;
      //     let body = res.data;
      //     if (body.code == 0) {
      //       this.blogList = body.data;
      //     } else {
      //       this.$Message.error(body.message || "数据获取错误，请重试");
      //     }
      //   })
      //   .catch(() => {
      //     this.isLoading = false;
      //     this.$Message.error("数据获取错误，请重试");
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-rules {
}
</style>


