<template>
  <header class="header">
    <a href="/">
      <img src="@/assets/img/logo.png">
    </a>
    <div>
      <span
        class="u_name"
        v-text="$store.state.userInfo.name"
      ></span>
      <Poptip
        v-model="visible"
        placement="bottom-end"
      >
        <Avatar
          class="u_avator"
          size="large"
          :src="$store.state.userInfo.avatar"
        ></Avatar>
        <div
          class="logout"
          slot="content"
          @click="logout"
        >
          退出登录
        </div>
      </Poptip>
    </div>
  </header>
</template>

<script>
import { Avatar } from "iview";
export default {
  name: "Header",
  components: { Avatar },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    logout() {
      location.href = `${this.$CONST.baseUrl}/user/logout`;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background: #202731;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  box-shadow: inset 0 -1px 0 0 #202731;
  & > a {
    display: inline-block;
    line-height: 38px;
    img {
      height: 32px;
      vertical-align: top;
    }
  }
  & > div {
    float: right;
    .u_name {
      font-family: PingFangSC-Regular;
      margin-right: 10px;
      line-height: 24px;
      font-size: 14px;
      color: #ffffff;
      vertical-align: middle;
    }
  }
  .logout {
    padding: 5px;
    cursor: pointer;
    &:hover {
      background: #f9f9fa;
    }
  }
}
</style>
