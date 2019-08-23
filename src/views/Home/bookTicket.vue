<template>
  <!-- 个人中心页 -->
  <div class="page-home-bookTicket">
    <div class="header" ref="myHeader">
      <div class="left" to="/city">
        <router-link to="/city" class="leftContent">{{ curCity.cityName ? curCity.cityName : '深圳' }}</router-link>
        <span class="iconfont icon-huidaodingbu"></span>
      </div>
      <div class="header-center">
        <button @click="curPage = 'yingpian'" :class="{headerActive:curPage === 'yingpian'}">影片</button>
        <button @click="curPage = 'yingyuan'" :class="{headerActive:curPage === 'yingyuan'}">影院</button>
      </div>
    </div>
    <div class="main">
      <component :is="curPage"></component>
    </div>
  </div>
</template>

<script>
import FilmList from '../../components/FilmList'
import comingSoon from '../../components/comingSoon'
import Cinemas from '../../components/Cinemas'
import yingpian from '../../components/yingpian'
import yingyuan from '../../components/yingyuan'
import BScroll from 'better-scroll'

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      curPage: 'yingpian',
      data: []
    }
  },

  components: {
    FilmList,
    comingSoon,
    Cinemas,
    yingpian,
    yingyuan
  },
  computed: {
    ...mapState('film', ['filmList', 'comingSoonList', 'dateList', 'cinemas']),
    ...mapState('city', ['curCity']),
    ...mapGetters('film', ['getdate'])
  },
  methods: {
    ...mapMutations('film', [
      'setFilmList',
      'setComingSoonList',
      'setdate',
      'setCinemas'
    ]),
    ...mapActions('film', ['getFilmList', 'getComingSoonList', 'getCinemas'])
  },
  created () {
    this.getFilmList()
    // this.getComingSoonList({
    //   pageNo: this.pageNo,
    //   pageSize: this.pageSize
    // }),
    this.getCinemas()
  },
  mounted () {}
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
    .header-center {
      margin-left: 126px;
      line-height: 44px;
      button {
        height: 30px;
        width: 65px;
        line-height: 25px;
        border: none;
        background: none;
        border-radius: 3px;
        border: 1px solid #f74444;
        color: #f74444;
      }
      .headerActive {
        background: #f74444;
        color: #fff;
      }
    }
  }

  .center {
    width: 100%;
    position: absolute;
    top: 6px;
    overflow-y: auto;
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
.page-home-bookTicket .van-tabs__wrap {
  padding-right: 0 !important;
}
</style>
