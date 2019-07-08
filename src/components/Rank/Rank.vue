<template>
  <span class="rank">
    <span :class="getRank().className">{{getRank().text}}</span>
  </span>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    score: {
      //分值，整数
      type: Number,
      default: 1
    }
  },
  methods: {
    getRank() {
      switch (true) {
        case this.score === 1 || this.score === 2:
          return {
            className: "worse",
            text: "较差"
          };
        case this.score === 3:
          return {
            className: "general",
            text: "一般"
          };
        case this.score === 4 || this.score === 5:
          return {
            className: "better",
            text: "较好"
          };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.rank {
  display: inline-block;
  font-size: 13px;
  line-height: 14px;
  .worse {
    color: #f10f0f;
  }
  .general {
    color: #fdaa01;
  }
  .better {
    color: #4fb800;
  }
}
</style>


