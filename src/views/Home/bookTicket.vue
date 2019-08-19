<template>
  <!-- 个人中心页 -->
  <van-list :finished="finished" v-model="loading" finished-text="到底了" @load="loadFilmList">
    <div class="page-home-bookTicket">
      <div class="header" ref="myHeader">
        <div class="left">
          <span class="leftContent">深圳</span>
          <span class="iconfont icon-huidaodingbu"></span>
        </div>
        <div class="center">
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

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      pageNo: 0,
      finished: false,
      loading: false
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

    // bindScroll() {
    //   console.log('影片列表在滚动')
    //   // console.log(this.$el.scrollTop)
    //   if (this.$el.scrollTop >= 2000) {
    //     this.pageNo++
    //     this.$el.scrollTop = 1000
    //   } else {
    //   }
    // },
    loadFilmList() {
      console.log(this.$el.scrollTop)
      this.pageNo++
      this.finished = false
      this.getFilmList({
        callback: () => {
          this.loading = false
          this.finished = true
        }
      })
    }
  },
  created() {
    this.getComingSoonList({
      pageNo: this.pageNo
    })
  }
  // mounted() {
  //   this.$el.addEventListener('scroll', this.bindScroll)
  // }
}
</script>

<style lang="scss">
.header {
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
  }
  .leftContent {
    color: #666;
    font-size: 15px;
    float: left;
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
}
</style>
