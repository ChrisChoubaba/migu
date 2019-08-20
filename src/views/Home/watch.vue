<template>
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
    <div id="nav">
      <li @click="curPage='Nav'">推荐</li>
      <li @click="curPage='FreeMovie'">免费看片</li>
      <li @click="curPage='MovieList'">影单</li>
      <li @click="curPage='Video'">小视频</li>
      <li @click="curPage='Comment'">影评</li>
      <component :is="curPage"></component>
    </div>
    <!-- <div class="home-nav">
      <van-tabs v-model="nodeId" title-active-color="#F74444">
        <van-tab title="推荐" name="70022794">
          <Nav :imgs="[imgList1,imgList2,imgList3]"></Nav>
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
    </div>-->
  </div>
</template>
<script>
import Nav from '../../components/Nav/index.vue'
import Comment from '../../components/Comment/index.vue'
import FreeMovie from '../../components/FreeMovie/index.vue'
import Video from '../../components/Video/index.vue'
import MovieList from '../../components/MovieList/index.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      curPage: 'Nav'
      // nodeId: '70022794',
      // pagesize: 3,
      // pageidx: 0
    }
  },
  components: {
    Nav,
    Comment,
    FreeMovie,
    Video,
    MovieList
  },
  computed: {
    ...mapState('navImg', ['imgList1', 'imgList2', 'imgList3'])
  },
  watch: {
    nodeId(newVal, oldVal) {
      // console.log(this.nodeId)
      this.pageidx = 0
      this.pagesize = 3

      this.setNavImg({
        imgList1: [],
        imgList2: [],
        imgList3: []
      })
      this.getNavImg({
        nodeId: newVal,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
      // this.loadMovieList()
    }
  },
  methods: {
    ...mapMutations('navImg', ['setNavImg']),
    ...mapActions('navImg', ['getNavImg', 'getFreeImg']),
    loadMovieList() {
      this.pageidx++
      // alert(1)
      console.log(this.nodeId)
      // let newnodeId = this.nodeId
      this.getNavImg({
        nodeId: 70022794,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    }
  },
  created() {
    this.loadMovieList()
  },
  mounted() {},
  updated() {}
}
</script>
<style lang="scss" >
html,
body {
  height: 100%;
}
.page-home-bookTicket {
  // height: 100%;
  // display: flex;
  // flex-direction: column;
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
    // display: flex;
    // flex: 1;
    // overflow-y: auto;
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
