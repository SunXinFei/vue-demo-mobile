<template>
  <span
    class="ori-comment"
    :class="getComment().className"
  >
    {{getComment().text}}
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
    getComment() {
      switch (true) {
        case this.score === 1:
          return {
            className: "first",
            text: "排名在80%之后"
          };
        case this.score === 2:
          return {
            className: "second",
            text: "排名在60-80%之间"
          };
        case this.score === 3:
          return {
            className: "third",
            text: "排名在40-60%之间"
          };
        case this.score === 4:
          return {
            className: "fourth",
            text: "排名在前20-40%"
          };
        case this.score === 5:
          return {
            className: "fourth",
            text: "排名在前20%"
          };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ori-comment {
  &::before {
    content: "*";
  }
  &.first,
  &.second {
    color: #f10f0f;
  }
  &.third {
    color: #fdaa01;
  }
  &.fourth,
  &.fourth {
    color: #4fb800;
  }
}
</style>


