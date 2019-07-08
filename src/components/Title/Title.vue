<template>
  <div class="title-bar-container clearfix">
    <div class="bar-item bar-left">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="desc">
        <slot name="desc"></slot>
      </div>
    </div>
    <div class="bar-item bar-right">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.title-bar-container {
  .bar {
    &-item {
      display: inline-block;
      height: 74px;
      line-height: 74px;
      .title {
        display: inline-block;
        font-size: 14px;
        color: #38434e;
        font-family: PingFangSC-Medium;
        font-weight: bold;
      }
      .desc {
        display: inline-block;
        margin-left: 10px;
        font-size: 12px;
        color: #5a6978;
      }
    }
    &-left {
      float: left;
    }
    &-right {
      float: right;
    }
  }
}
</style>

