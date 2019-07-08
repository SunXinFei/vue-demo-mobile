
<template>
  <!-- left menu -->
  <aside class="menu" :class="{'expand': menuExpand}">
    <ul>
      <li v-for="(menu, index) in menuList" :key="index">
        <!-- menu -->
        <a
          :class="{active: ~$route.path.indexOf(menu.class)}"
          @click="goTarget(menu.target, menu.children.length === 0)"
        >
          <i :class="'icon icon-'+ menu.class" v-show="menuExpand"></i>

          <!-- poptip -->
          <Poptip
            popper-class="menu-poptip"
            trigger="hover"
            placement="right-start"
            v-show="!menuExpand"
            :transfer="true"
          >
            <i :class="'icon icon-'+ menu.class"></i>
            <div slot="content">
              <div class="label label_main">{{menu.name}}</div>
              <div
                :class="`label label_sub ${val.target === currentRoute ? 'active' : ''}`"
                v-for="(val, index) in menu.children"
                :key="index"
                @click="goTarget(val.target, true)"
              >{{val.name}}</div>
            </div>
          </Poptip>

          <span :style="{display: menuExpand? 'block': 'none'}">{{menu.name}}</span>
          <i
            :class="`icon-arrow ${subMenuExpand ? 'icon-arrow_up' : 'icon-arrow_down'}`"
            v-show="menuExpand && menu.children.length"
          ></i>
        </a>

        <!-- submenu -->
        <template v-if="menuExpand && subMenuExpand && menu.children.length > 0">
          <a
            :class="{ active: val.target === currentRoute }"
            v-for="(val, index) in menu.children"
            :key="index"
            @click="goTarget(val.target, true)"
          >
            <span style="display: block;">{{val.name}}</span>
          </a>
        </template>
      </li>
    </ul>

    <!-- expand -->
    <!-- <div class="menu-ctrl" @click="toggleExpand">
      <span></span>
    </div> -->
  </aside>
</template>

<script>
import { Poptip } from "iview";
import { setTimeout } from "timers";
export default {
  name: "Menu",
  components: { Poptip },
  props: {
    shrink: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      menuList: [
        {
          class: "project", // 图标
          name: "项目列表",
          target: "/project_list", // 跳转地址
          children: []
        },
        {
          class: "blog",
          name: "博文名单",
          target: "/blog_rules",
          children: []
        },
        {
          class: "ads",
          name: "广告名单",
          target: "/ads_list",
          children: []
        },
      ],
      menuExpand: this.shrink,
      subMenuExpand: false,
      currentRoute: ""
    };
  },
  mounted() {
    this.currentRoute = this.$route.path;
  },
  methods: {
    toggleExpand() {
      this.menuExpand = !this.menuExpand;
    },
    goTarget(tar, flag) {
      if (flag) {
        // 无子菜单
        this.$router.push(tar);
      } else {
        // 有子菜单
        this.subMenuExpand = !this.subMenuExpand;
      }
    }
  },
  watch: {
    $route: function(val) {
      this.currentRoute = val.path;
    }
  }
};
</script>

<style lang="scss">
.menu {
  position: relative;
  flex: 0 0 60px;
  transition: flex 0.3s;
  background: #fff;
  box-shadow: 0 6px 12px 0 rgba(42, 96, 228, 0.08);
  overflow: hidden;
  &.expand {
    flex: 0 0 200px;
    .menu-ctrl {
      text-align: left;
      padding-left: 20px;
    }
  }
  ul {
    flex-direction: column;
    display: flex;
    line-height: 0;
    align-items: center;
    list-style: none;
    li {
      position: relative;
      width: 100%;
      margin-top: 28px;
      a {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 40px;
        font-size: 14px;
        color: #38434E;
        span {
          display: block;
          margin-left: 60px;
          height: 40px;
          line-height: 40px;
          white-space: nowrap;
        }
        .icon {
          position: absolute;
          display: inline-block;
          width: 60px;
          height: 40px;
          &:after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            margin: 10px 20px;
            width: 20px;
            height: 20px;
          }
          // &-fans {
          //   &:after {
          //     background: url("~@/assets/img/shop_nor.svg") center no-repeat;
          //   }
          // }
          // &-portrait {
          //   &:after {
          //     background: url("~@/assets/img/push_nor.svg") center no-repeat;
          //   }
          // }
        }

        &.active {
          font-weight: bold;
          background: #F9F9FA;
          // .icon {
          //   &-fans {
          //     &:after {
          //       background: url("~@/assets/img/shop_sel.svg") center no-repeat;
          //     }
          //   }
          //   &-portrait {
          //     &:after {
          //       background: url("~@/assets/img/push_sel.svg") center no-repeat;
          //     }
          //   }
          // }
          &:after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            height: 40px;
            border-left: 4px solid #32A6B8;
          }
        }
      }
      .icon-arrow {
        position: absolute;
        top: 50%;
        left: 170px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        &_up {
          border-top: 5px solid #fff;
          border-bottom: 5px solid transparent;
        }
        &_down {
          margin-top: -5px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid #fff;
        }
      }
      .ivu-poptip {
        height: 40px;
        .ivu-poptip-rel {
          .icon {
            position: relative;
          }
        }
      }
    }
  }
  &-ctrl {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    text-align: center;
    color: #8a93b6;
    cursor: pointer;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      white-space: nowrap;
      background: url("~@/assets/img/menu_expand.svg") center no-repeat;
    }
  }
}
.menu-poptip {
  .ivu-poptip-body {
    padding: 10px 0;
    min-width: 200px;
    .label {
      padding: 0 30px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      &_main {
        color: #181c21;
        font-weight: bold;
      }
      &_sub:hover {
        color: #32a6b8;
        background: #f9f9fa;
      }
      &_sub.active {
        font-family: PingFangSC-Regular;
        color: #32a6b8;
        background: #f9f9fa;
        letter-spacing: 0;
      }
    }
  }
}
</style>
