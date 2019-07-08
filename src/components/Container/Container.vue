<template>
  <div class="base-container">
    <slot name="content"></slot>
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
.base-container {
  padding: 20px 30px;
  background: #ffffff;
  border: 1px solid #ebecee;
  border-radius: 4px;
}
</style>

