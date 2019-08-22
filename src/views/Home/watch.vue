<template>
  <div id="Home" class="watchStyle">
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
    <ul>
      <li @click="fn1" :class="{active:curPage==='Nav'}">推荐</li>
      <li @click="fn2" :class="{active:curPage==='FreeMovie'}">免费看片</li>
      <li @click="fn3" :class="{active:curPage==='MovieList'}">影单</li>
      <li @click="fn4" :class="{active:curPage==='Video'}">小视频</li>
      <li @click="fn5" :class="{active:curPage==='Comment'}">影评</li>
    </ul>
    <div class="watchContent">
      <component :is="curPage"></component>
    </div>
  </div>
</template>
<script>
import Nav from '../../components/Nav/index.vue'
import Comment from '../../components/Comment/index.vue'
import FreeMovie from '../../components/FreeMovie/index.vue'
import Video from '../../components/Video/index.vue'
import MovieList from '../../components/MovieList/index.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import request from '../../utils/request'
export default {
  name: 'Home',
  data() {
    return {
      nodeId: 70022794,
      // nodeId2: 70022795,
      curPage: 'Nav',
      pagesize: 3,
      pageidx: 0
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
      // this.getNavImg({
      //   nodeId: newVal,
      //   pagesize: this.pagesize,
      //   pageidx: this.pageidx
      // })
      // this.loadMovieList()
    }
  },
  methods: {
    ...mapMutations('navImg', ['setNavImg']),
    ...mapActions('navImg', ['getNavImg', 'getFreeImg', 'getVideo']),
    // loadMovieList() {
    //   this.pageidx++
    //   this.pageidx = 0
    //   this.getNavImg({
    //     nodeId: this.nodeId,
    //     pagesize: this.pagesize,
    //     pageidx: this.pageidx
    //   })
    // },
    fn1() {
      // console.log(num)
      // console.log(imgList1)
      this.pageidx = 0
      this.pageidx++
      this.curPage = 'Nav'
      this.nodeId = 70022794
      // loadMovieList()
      this.getNavImg({
        nodeId: this.nodeId,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    },
    fn2() {
      this.pageidx = 0
      this.pageidx++
      this.nodeId = 70022795
      this.curPage = 'FreeMovie'

      // loadMovieList()
      this.getNavImg({
        nodeId: this.nodeId,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    },
    fn3() {
      this.pageidx = 0
      this.pageidx++
      this.nodeId = 70035127
      this.curPage = 'MovieList'

      // loadMovieList()
      this.getNavImg({
        nodeId: this.nodeId,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    },
    fn4() {
      this.pageidx = 0
      this.pageidx++
      this.nodeId = 70027030
      this.curPage = 'Video'

      // loadMovieList()
      this.getNavImg({
        nodeId: this.nodeId,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    },
    fn5() {
      this.pageidx = 0
      this.pageidx++
      this.nodeId = 70022797
      this.curPage = 'Comment'

      // loadMovieList()
      this.getNavImg({
        nodeId: this.nodeId,
        pagesize: this.pagesize,
        pageidx: this.pageidx
      })
    }
    //   request
    //     .post(
    //       'http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp',
    //       {
    //         nodeId: this.nodeId1,
    //         pagesize: this.pagesize,
    //         pageidx: this.pageidx
    //       },
    //       {
    //         transformRequest: data => {
    //           //在请求发送到服务器之前对请求的参数做格式转换
    //           // 这里研究 咪咕 发现，他需要的是  key=value&key=value 这种格式的数据
    //           // nodeId=70022794&pagesize=3&pageidx=1
    //           let arr = []
    //           for (let key in data) {
    //             arr.push(`${key}=${data[key]}`)
    //           }
    //           // arr =['nodeId=70022794', 'pagesize=3', 'pageidx=1']
    //           return arr.join('&')
    //         }
    //       }
    //     )
    //     .then(res => {
    //       console.log(res)
    //       // commit({
    //       //   type: 'setNavImg',
    //       //   imgList1: state.imgList1.concat(res[0].list),
    //       //   imgList2: state.imgList2.concat(res[1].list),
    //       //   imgList3: state.imgList3.concat(res[2].list)
    //       // })
    //     })
    // }
  },
  created() {
    // this.loadMovieList()
    this.fn1()
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
* {
  padding: 0;
}
.watchStyle {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .active {
    color: #f74444;
    border-bottom: 1px solid #f74444;
  }
  // -------------------------
  .home-header {
    padding: 8px 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    li {
      i {
        font-size: 24px;
      }
      span {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    line-height: 44px;
    li {
      height: 100%;
    }
  }
  .watchContent {
    flex: 1;
    width: 100%;
    overflow-y: auto;
  }
}
</style>
