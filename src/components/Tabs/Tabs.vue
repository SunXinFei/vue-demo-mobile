<template>
  <div class="base-tabs-wrapper">
    <div 
      :class="`base-tabs ${currentTab === item.value ? 'base-tabs_active' : ''} `"
      v-for="(item, index) in options"
      :key="index"
      @click="changeTabs(item)">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: function() {
        return []
      }
    },
    value: {
      type: Number,
      default: function() {
        return 0
      }
    }
  },
  data() {
    return {
      currentTab: 0
    }
  },
  mounted() {
    this.currentTab =  this.value;
  },
  watch: {
    value() {
      this.currentTab =  this.value;
    }
  },
  methods: {
    changeTabs(item) {
      this.currentTab = item.value;
      this.$emit('on-change', item.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tabs-wrapper {
  height: 34px;
  line-height: 34px;
  display: inline-block;
  .base-tabs{
    display: inline-block;
    box-sizing: border-box;
    padding: 0 29px;
    min-width: 102px;
    margin-left: -1px;
    border: 1px solid #DADEE6;
    text-align: center;
    cursor: pointer;
    &:first-child{
      border-radius: 4px 0px 0px 4px;
      margin-left: 0;
    }
    &:last-child{
      border-radius: 0 4px 4px 0;
    }
    &_active{
      border-color: #32A6B8;
      background: #32A6B8;
      color: #fff;
    }
  }
}
</style>

