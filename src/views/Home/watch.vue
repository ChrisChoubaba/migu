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
        <van-tab title="推荐" name="70022794">
          <Nav></Nav>
        </van-tab>
        <van-tab title="免费看片" name="70022795">
          <FreeMovie />
        </van-tab>
        <van-tab title="影单" name="70035127">
          <MovieList />
        </van-tab>
        <van-tab title="小视频" name="70027030">
          <Video />
        </van-tab>
        <van-tab title="影评" name="70022797">
          <Comment />
        </van-tab>
      </van-tabs>
      <li>
        <i class="iconfont icon-buy"></i>
      </li>
    </div>
  </div>
</template>
<script>
import Nav from '../../components/Nav/index.vue'
import Comment from '../../components/Comment/index.vue'
import FreeMovie from '../../components/FreeMovie/index.vue'
import Video from '../../components/Video/index.vue'
import MovieList from '../../components/MovieList/index.vue'

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'a'
    }
  },
  components: {
    Nav,
    Comment,
    FreeMovie,
    Video,
    MovieList
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
      right: 10px;
    }
  }
  .van-tabs__wrap {
    padding-right: 50px;
  }
}
</style>
