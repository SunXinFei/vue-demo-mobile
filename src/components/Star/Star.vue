<template>
  <span class="star">
    <Icon
      v-for="i in 5"
      :key="i"
      class="star-symbol"
      :class="i<=value? 'star-full': 'star-empty'"
      type="md-star"
    />
  </span>
</template>

<script>
export default {
  props: {
    value: {
      //分值，整数
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.star {
  display: inline-block;
  font-size: 20px;
  line-height: 20px;
  &-symbol {
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
  }
  &-full {
    color: #f8d41c;
  }
  &-empty {
    color: #dddddd;
  }
}
</style>