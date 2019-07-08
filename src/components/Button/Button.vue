<template>
  <div :class="btnStyle" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: { // 浅色：simple； 原色：primary； 深色：dark；
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    btnStyle() {
      if (this.disabled) {
        return `base-button base-button_disable base-button_${this.type}`;
      }
      return `base-button base-button_${this.type}`;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-button{
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    line-height: 28px;
    padding: 0 19.5px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    &_simple{
      background: #F9F9FA;
      border: 1px solid #EBECEE;
      box-shadow: 0 2px 4px 0 rgba(50,166,184,0.12);
      color: #38434E;
      &:hover{
        background: #f6f6f6;
      }
      &:active{
        background: #dfe3e6;
      }
    }
    &_primary{
      background: #FFFFFF;
      border: 1px solid #32a6b8;
      box-shadow: 0 2px 4px 0 rgba(50,166,184,0.14);
      color: #32a6b8;
      &:hover{
        color: #3ac7cf;
        border: 1px solid #3ac7cf;
      }
      &:active{
        color: #0289a7;
        border: 1px solid #0289a7;
      }
    }
    &_dark{
      background: #32a6b8;
      color: #fff;
      border: 1px solid #32a6b8;
      &:hover{
        border: 1px solid #3ac7cf;
        background: #3ac7cf;
      }
      &:active{
        background: #0289a7;
        border: 1px solid #0289a7;
      }
    }
    &_disable{
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>

