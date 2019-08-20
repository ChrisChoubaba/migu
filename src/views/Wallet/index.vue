<template>
<!-- 我的钱包页面 -->
  <div class="page-wallet">
    <div class="header">
      <router-link class="iconfont icon-xia" to="/personCenter"></router-link>
      <h1>我的钱包</h1>
    </div>
    <div class="mycard">
      <van-tabs v-model="active">
        <van-tab title="电影卡" >
          <div class="movies">
            <p>添加新电影卡</p>
            <div class="cSerch">
              <input type="text" placeholder="请输入电影卡兑换码">
              <button>兑换</button>
            </div>
            <div class="bCard">
              <h1>还未购买电影卡</h1>
              <p>购买电影卡享更多优惠</p>
              <button>立即购买</button>
            </div>
          </div>
        </van-tab>
        <van-tab title="抵值券">
          <div class="coupon">
            <p>添加新电影卡</p>
            <div class="cpSerch">
              <input type="text" placeholder="请输入票券兑换码">
              <button>兑换</button>
            </div>
            <div class="p_img">
              <img src="../../assets/images/empty-con.png" alt="">
              <p>您还没有任何兑换券哦</p>
            </div>
          </div>
        </van-tab>
        <!-- 兑换券---------- -->
        <van-tab title="兑换券">          
            <div class="exchange">
              <p>添加新电影卡</p>
              <div class="exSerch">
                <input type="text" placeholder="请输入兑换券密码进行兑换">
                <button>添加</button>
              </div>            
              <p>* 部分影院的4D影厅、VIP影厅放映的影片，不可用兑换券兑换影票</p>
              <p>* 万达兑换券不支持春节、平安夜(12.24)、情人节(2.14)等影城规定的特殊节假日场次，不支持首映式、VIP厅等特殊场次；仅限同类万达兑换券同时支付一笔订单，不可与其他卡券、支付方式混合支付。</p>
              <div class="p_img">
                <img src="../../assets/images/empty-con.png" alt="">
                <p>您还没有任何兑换券哦</p>
              </div>
            </div>
        </van-tab>
        <!-- 会员卡----------- -->
        <van-tab title="会员卡">
          <div class="menber">
            <div class="active">
              <p>还未开通咪咕联合会员卡</p>
              <p>开通后购票可以享受优惠价</p>
            </div>
            <div class="line"></div>
            <div class="n_active">
              <p class="p1">·每月一次9.9购票优惠</p>
              <div class="online">
                <p>·每月送30元咪咕影院在线观影券</p>
                <span>￥20</span>
              </div>
            </div>
            <h1>更多影城卡即将上线</h1>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
style-<style lang="scss">
@import '../../assets/style/common/mixin.scss';
  .page-wallet {
    display: flex;
    flex-direction: column;
  }
  .header {
    @include border-bottom;
    display: flex;
    height: 45px;
    padding: 0 10px;
    align-items: center;
    font-size: 18px;
    .icon-xia {
      font-size: 22px;
      color: #999;
    }
    h1 {
      flex: 1;
      text-align: center;
    }
  }
.mycard {
  .van-tab {
    color: #000;

  }
  .van-tab--active {
    color: #f74444;
  }
}
.van-tabs__content {
  padding: 0 10px;
}
//电影卡------------
.movies {
    p {
    font-size: 12px;
    line-height: 36px;
    color: #999;
  }
  .cSerch {
    margin-bottom: 20px ;
    input {
      border: 0;
      width: 72%;
      background: #eee;
      padding-left: 8px;
      line-height: 30px;
      border-radius: 3px;
    }
    >button {
      color: #fff;
      float: right;
      width: 72px;
      height: 30px;
      border: 0;
      background: #f74444;
      border-radius: 3px;
    }
  }
}
.bCard {
  width: 100%;
  height: 158px;
  background: #eee;
  border-radius: 10px;
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 18px;
    line-height: 56px;
    color: #666;
    font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif; 
    }
    p {
      line-height: 12px;
    }
    >button {
      width: 134px;
      height: 38px;
      border: 0;
      background: #f74444;
      border-radius: 19px;
      margin-top: 30px;
    }
}
// 票券兑换码
.coupon {
    p {
    font-size: 12px;
    line-height: 36px;
    color: #999;
  }
  .cpSerch {
    margin-bottom: 20px ;
    input {
      border: 0;
      width: 72%;
      background: #eee;
      padding-left: 8px;
      line-height: 30px;
      border-radius: 3px;
    }
    >button {
      color: #fff;
      float: right;
      width: 72px;
      height: 30px;
      border: 0;
      background: #f74444;
      border-radius: 3px;
    }
  }
}
.p_img {
  text-align: center;
  img {
    width: 105px;
    height: 125px;
  }
}
// 兑换券
.exchange {
    p {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
  > p:first-child {
    line-height: 36px;
  }
  .exSerch {
    margin-bottom: 20px ;
    input {
      border: 0;
      width: 72%;
      background: #eee;
      padding-left: 8px;
      line-height: 30px;
      border-radius: 3px;
    }
    >button {
      color: #fff;
      float: right;
      width: 72px;
      height: 30px;
      border: 0;
      background: #f74444;
      border-radius: 3px;
    }
  }
}
.p_img {
  text-align: center;
  img {
    width: 105px;
    height: 125px;
  }
}
.menber {
  .active {
    margin-top: 10px;
    height: 130px;
    background: url(../../assets/images/hd-wkt.png) no-repeat;
    background-size: 100%;
    text-align: center;
    padding-top: 40px;
    box-sizing: border-box;
    color: #fff;
    line-height: 22px;
  }
  .line {
    margin: 10px 0;
    background: url(../../assets/images/hd-line.jpg) no-repeat;
    background-size: 100%;
  }
  .n_active {
    margin-top: 10px;
    height: 130px;
    background: url(../../assets/images/hd-card1.png) no-repeat;
    background-size: 100%;
    padding-top: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    .p1 {
      margin-top: 44px;
      line-height: 26px;
    }
    .online {
      display: flex;
      p {
        flex: 1;
      }
      span {
        font-size: 16px;
        margin-right: 8px;
      }
    }    
  }
  h1 {
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    color: #999;
    margin-top: 10px;
  }
}


</style>