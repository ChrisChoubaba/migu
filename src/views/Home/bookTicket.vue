<template>
  <!-- 个人中心页 -->
  <van-list :finished="finished" v-model="loading" @load="loadFilmList">
    <div class="page-home-bookTicket">
      <div class="header" ref="myHeader">
        <div class="left" to="/city">
          <router-link to="/city" class="leftContent">深圳</router-link>
          <span class="iconfont icon-huidaodingbu"></span>
        </div>
        <div class="center" ref="wrapper">
          <van-tabs type="card" :class="{'tit': true}">
            <van-tab title="影片">
              <van-tabs sticky>
                <van-tab title="正在热映">
                  <FilmList :films="filmList" />
                </van-tab>
                <van-tab title="即将上映">
                  <comingSoon :getdate="getdate" />
                </van-tab>
              </van-tabs>
            </van-tab>
            <van-tab title="影院">内容 2</van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import FilmList from '../../components/FilmList'
import comingSoon from '../../components/comingSoon'
import BScroll from 'better-scroll'

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      pageNo: 0, // 当前页码
      pageSize: 20,
      finished: false,
      loading: false,
      data: []
    }
  },

  components: {
    FilmList,
    comingSoon
  },
  computed: {
    ...mapState('film', ['filmList', 'comingSoonList', 'dateList']),
    ...mapGetters('film', ['getdate'])
  },
  methods: {
    ...mapMutations('film', ['setFilmList', 'setComingSoonList', 'setdate']),
    ...mapActions('film', ['getFilmList', 'getComingSoonList']),

    loadFilmList() {
      // console.log(this.$el.scrollTop)
      this.pageNo++
      this.finished = false
      console.log(this.pageNo)
      this.getFilmList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        callback: () => {
          this.loading = false
          if (this.filmList.length >= 70) {
            this.finished = true
          }
        }
      })
    }
  },
  created() {
    this.getComingSoonList({
      pageNo: this.pageNo,
      pageSize: this.pageSize
    })
  },
  mounted() {
    // this.$el.addEventListener('scroll', this.bindScroll)
    // if (!this.filmScroll) {
    //   this.$nextTick(() => {
    //     this.filmScroll = new BScroll(this.$refs['wrapper'], {
    //       scrollY: true,
    //       click: true
    //     })
    //     this.filmScroll.on('touchend', pos => {
    //       console.log(this.pageNo)
    //       // 下拉动作
    //       if (pos.y > 50) {
    //         this.pageNo++
    //         this.data = this.getComingSoonList({
    //           pageNo: this.pageNo
    //         }).then(res => {
    //           this.data = res.data.concat(this.data)
    //         })
    //       }
    //     })
    //   })
    // }
  }
}
</script>

<style lang="scss">
.page-home-bookTicket {
  .header {
    width: 100%;
    position: absolute;
    top: 0;
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
    line-height: 44px;
    padding: 0;
    position: relative;
    // overflow: hidden;

    .left {
      overflow: hidden;
      position: absolute;
      left: 12px;
      display: inline-block;
      position: absolute;
      z-index: 99;
    }
    .leftContent {
      color: #666;
      font-size: 15px;
      float: left;
      background-size: contain;
    }
    .icon-huidaodingbu {
      font-size: 12px;
      margin-left: 4px;
      color: #999;
    }
    .center {
      width: 100%;
      position: absolute;
      top: 6px;
    }
    .tit {
      > div:first-child {
        width: 160px;
        margin-left: 108px;
        text-align: center;
      }
      > div:first-child {
        display: flex;
        justify-content: center;
      }
    }
    .van-tabs__nav--card {
      width: 160px;
    }
    .van-tab {
      margin: auto;
    }
    .van-tabs--card {
      padding-top: 0 !important;
    }
    .van-tabs__content {
      margin-top: 10px;
    }
    .van-tabs__nav {
      width: 375px;
    }
  }
}
</style>
