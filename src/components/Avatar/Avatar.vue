<template>
  <div class="base-com-avatar">
    <div class="avatar-box">
      <a class="img-box" href="javascript:;" :style="{'width':size,'height':size}">
        <img :src="avatar" alt>
        <i v-if="isShowVerify && verified===1" :class="`m-icon m-icon-goldv-static ${vType}`"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
    verifiedType: Number,
    verified: {
      type: Number,
      default: 1
    },
    verifiedTypeExt: "",
    // 跳转地址
    jumpUrl: String,
    isShowVerify: {
      default: true,
      type: String
    },
    size: {
      type: String,
      default: "40px"
    },
    shortUrl: String
  },

  methods: {},

  computed: {
    vType() {
      if (this.verifiedType >= 1 && this.verifiedType <= 7) {
        return "m-icon-bluev";
      }
      if (this.verifiedType === 0) {
        if (this.verifiedTypeExt === 1) {
          return "m-icon-gold";
        }
        return "m-icon-yellowv";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.base-com-avatar {
  display: inline-block;
  vertical-align: middle;
  .avatar-box {
    display: flex;
    align-items: center;
    .img-box {
      display: inline-block;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      -o-object-fit: cover;
      object-fit: cover;
      border-radius: 50%;
    }
    .m-icon {
      font-size: 14px;
      display: inline-block;
      vertical-align: top;
      background-image: url(//js.t.sinajs.cn/ads/vshop_mobile/static/img/sprite.svg);
      background-size: 3em auto;
      background-position-x: center;
      width: 1em;
      height: 1em;
      position: absolute;
      z-index: 3;
      right: -0.0625rem;
      bottom: -0.0625rem;
    }
    .m-icon-bluev {
      background-position-y: -4em;
    }
    .m-icon-yellowv {
      background-position-y: -1em;
    }
    .m-icon-gold {
      background-position-y: -52em;
    }
    // .m-icon-goldv-static:after {
    //   content: " ";
    //   display: block;
    //   height: 100%;
    //   width: 100%;
    //   background-repeat: no-repeat;
    //   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAJ2CAMAAAAezuDMAAACylBMVEX//1///3///3///1///1///3///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1///1//1Er/30r/6VX/9FX0tD/0vz//vz//1Er/3z//30r/6Ur/9FX//0r//1X//1/0qjX/vzX/vz//yTX/yT//1D//3z//30r/6T//6Ur/6VX/9D//9Er/9FX//0r//1X//1/UHwDUKgDUNQDUPwDUSgrfFQDfHwDfKgDfNQDfPwDfSgDfSgrfVQDfVQrfXwDfXwrfXxXfagDfahXfdB/pFQDpHwDpKgDpKgrpNQDpNQrpPwDpPwrpSgDpSgrpShXpVQDpVQrpVRXpXwDpXxXpXx/pahXpah/pdADpdBXpfwDpfxXpfx/pih/piirplADplArplBXplB/plCrpnyrpqjX0VRX0XwD0XxX0agD0ahX0ah/0dAD0dBX0dB/0fwD0fx/0fyr0igD0ih/0iir0lAD0lB/0lCr0nwD0nx/0nyr0nzX0qgD0qir0qjX0tCr0tDX0tD/0vzX0vz/0yTX0yT/01D//lCr/nwD/nyr/qgD/qir/qjX/tAD/tCr/tDX/vwD/vyr/vzX/yQD/ySr/yTX/yT//1AD/1Cr/1DX/1D//3wD/3zX/3z//30r/6QD/6Qr/6RX/6R//6Sr/6TX/6T//6Ur/6VX/9B//9DX/9D//9Er/9FX//z///0r//1X//19rJzzvAAAAbnRSTlMAAAEDBAUGERIUFhocHicoKy43ODlER0hscnd4eX2AgYOMjZCRlpeZnaCnqKutsLy+wsfKy9TV1trc3d7i4+Tl6erv8PHy8/T19/j5+vv8/Pz8/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/kvZGuAAAA0RSURBVHja7Zz5m1PVGcdT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");
    //   background-size: 1em auto;
    //   background-position: 0 -10000px;
    // }
  }
}
</style>

