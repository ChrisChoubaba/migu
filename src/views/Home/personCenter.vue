<template>
  <!-- 我的-->
  <div class="page-home-personCenter">
    <!-- 设置 -->
      <div class="setting">
        <h1>我的</h1>
        <span class="iconfont icon-shezhi"></span>
      </div>
      <!-- 点击登录 -->
      <router-link to="/login" class="login-z">
        <div class="login-l">
          <img src="../../assets/images/defaultPhoto.png" alt="">
          <span>点击登录</span>
        </div>
        <span class="iconfont icon-icon"></span>
      </router-link>
      <div class="blank-area"></div>
      <!-- 我的订单和我的钱包 -->
      <div class="order-w" >
        <router-link to="/login" class="order">
          <div class="order-l">
            <span class="iconfont icon-wodedingdan"></span>
            <span>我的订单</span>
          </div>
          <span class="iconfont icon-icon"></span>
        </router-link>
        <!-- 我的钱包 -->
        <router-link to="/login" class="myWallet">
          <div class="wallet-l">
            <span class="iconfont icon-wodeqianbao"></span>
            <span>我的钱包</span>
          </div>
          <div class="wallet-r">
            <span>电影卡 票券 权益 积分</span>
            <span class="iconfont icon-icon"></span>
          </div>
        </router-link>
      </div>
      <div class="blank-area"></div>
      <!-- 常见问题和在线客服 -->
      <div class="ques-ser" >
        <router-link to="/login" class="ques">
          <div class="ques-l">
            <span class="iconfont icon-changjianwenti"></span>
            <span>常见问题</span>
          </div>
          <span class="iconfont icon-icon"></span>
        </router-link>
        <!-- 在线客服 -->
        <router-link to="/login" class="myServer">
          <div class="server-l">
            <span class="iconfont icon-dianhua"></span>
            <span>在线客服</span>
          </div>
          <span class="iconfont icon-icon"></span>
        </router-link>
      </div>
      <div class="blank-area"></div>
      <!-- 商城和约票 -->
      <div class="mall-tick" >
        <router-link to="/login" class="mall">
          <div class="mall-l">
            <span class="iconfont icon-shangcheng-copy"></span>
            <span>商城</span>
          </div>
          <span class="iconfont icon-icon"></span>
        </router-link>
        <!-- 在线客服 -->
        <router-link to="/login" class="ticket">
          <div class="ticket-l">
            <span class="iconfont icon-dianying"></span>
            <span>约票</span>
          </div>
          <span class="iconfont icon-icon"></span>
        </router-link>
      </div>
  </div>
</template>
style-<style lang="scss">
@import '../../assets/style/common/mixin.scss';
.page-home-personCenter {
  display: flex;
  flex-direction: column;
}
//设置
.setting {
  display: flex;
  line-height: 44px;
  padding:0 10px;
  @include border-bottom;
  h1 {
    flex:1;
    text-align: center;
  }
  span {
    font-size: 20px;
    color: #666;
  }
}
// 登录
.login-z {
  text-decoration: none;
  display: flex;
  padding: 20px 10px;
  align-items: center;
  .login-l {
    flex: 1;
    line-height: 56px;
    display: flex;
    color: #000;
    img {
      width: 56px;
      height: 56px;
      margin-right: 5px;
    }
    span {
      line-height: 56px;
    }
    }
    >.icon-icon {
      line-height: 56px;
      color: #999;
  }
}
.blank-area {
  width: 100%;
  height: 10px;
  background: #eee;
}
.order-w {
  padding: 0 10px;
}
//我的订单
.order {
  @include border-bottom;
  text-decoration: none;
  display: flex;
  line-height: 42px;
  .order-l {
    flex: 1;
    display: flex;
    color: #000;
    >span:first-child {
      color: rgb(223, 156, 12);
      font-size: 20px;
      margin-right: 5px;
    }
    >span:last-child {
      color: #000;
    }
  }
  span {
    color: #999;
  }
}
//我的钱包
.myWallet {
  text-decoration: none;
  display: flex;
  color: #000;
  .wallet-l {
    flex: 1;
    display: flex;
    .icon-wodeqianbao {
      color: rgb(238, 234, 25);
      font-size: 26px;
      margin-top: 14px;
    }
    >span:last-child {
      line-height: 42px;
    }
  }
  .wallet-r {
    display: flex;
    color: #999;
    line-height: 42px;
    >span:first-child {
      font-size: 12px;
    }
  }
}
//常见问题和在线客服-------------------------------
.ques-ser {
  padding: 0 10px;
}
//我的订单
.ques {
  @include border-bottom;
  text-decoration: none;
  display: flex;
  line-height: 42px;
  .ques-l {
    flex: 1;
    display: flex;
    >span:first-child {
      color: rgb(109, 204, 31);
      font-size: 20px;
      margin-right: 5px;
    }
    >span:last-child {
      color: #000;
    }
  }
  span {
    color: #999;
  }
}
//在线客服
.myServer {
  text-decoration: none;
  display: flex;
  line-height: 42px;
  color: #666;
  .server-l {
    flex: 1;
    display: flex;
    >span:first-child {
      color: rgb(223, 156, 12);
      font-size: 18px;
      margin-right: 5px;
    }
    >span:last-child {
      color: #000;
    }
  }
  span {
    color: #999;
  }
}
//商城和约票--------------------------------
.mall-tick {
  padding: 0 10px;
}
//我的订单
.mall {
  @include border-bottom;
  text-decoration: none;
  display: flex;
  line-height: 42px;
  .mall-l {
    flex: 1;
    display: flex;
    >span:first-child {
      color: rgb(21, 123, 219);
      font-size: 20px;
      margin-right: 5px;
    }
    >span:last-child {
      color: #000;
    }
  }
  span {
    color: #999;
  }
}
//在线客服
.ticket {
  text-decoration: none;
  display: flex;
  line-height: 42px;
  color: #666;
  .ticket-l {
    flex: 1;
    display: flex;
    >span:first-child {
      color: rgb(235, 23, 182);
      font-size: 18px;
      margin-right: 5px;
    }
    >span:last-child {
      color: #000;
    }
  }
  span {
    color: #999;
  }
}
</style>
