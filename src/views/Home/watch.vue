<template>
  <!-- 个人中心页 -->
  <div class="page-home-bookTicket">
    <div class="home-header">
      <li>
        <i class="iconfont icon-qianbao-"></i>
        <span>0元</span>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-shijian"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-fangdajing"></i>
        </a>
      </li>
    </div>
    <div class="home-nav">
      <van-tabs v-model="activeName" title-active-color="#F74444">
        <van-tab title="推荐" name="a">
          <Nav></Nav>
        </van-tab>
        <van-tab title="免费看片" name="b">内容 2</van-tab>
        <van-tab title="影单" name="c">内容 3</van-tab>
        <van-tab title="影评" name="d">内容 4</van-tab>
      </van-tabs>
      <li>
        <i class="iconfont icon-buy"></i>
      </li>
    </div>
  </div>
</template>
<script>
import Nav from '../../components/Nav/index.vue'

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'a'
    }
  },
  components: {
    Nav
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" >
.page-home-bookTicket {
  .home-header {
    padding: 8px 12px;
    height: 8px 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  .iconfont {
    font-size: 24px;
  }
  li {
    list-style: none;
    span {
      margin-left: 5px;
    }
    a {
      text-decoration: none;
      color: black;
      margin-right: 10px;
    }
  }

  .home-nav {
    position: relative;
    li {
      width: 30px;
      background: #ffffff;
      position: absolute;
      top: 12px;
      right: 20px;
    }
  }
  .van-tabs__wrap {
    padding-right: 30px;
  }
}
</style>
