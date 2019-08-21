<template>
  <van-list :finished="finished" v-model="loading" finished-text="没有更多数据啦" @load="loadFilmList">
    <div class="coming-list">
      <ul class="coming-list-ul">
        <div v-for="item in getdate" :key="item.date">
          <p class="year">{{ item.date }}</p>
          <li class="coming-list-li" v-for="i in item.list" :key="i.filmId">
            <a href="#">
              <div class="coming-img">
                <img :src="i.h5pics.highResolutionV" alt />
              </div>
              <div class="coming-info">
                <p class="coming-info-title">{{ i.filmName }}</p>
                <p class="coming-info-director">导演 : {{ i.director}}</p>
                <p class="coming-info-actor">{{ i.actor }}</p>
              </div>
              <div class="coming-btn">
                <button v-if="i.isPreSale === '1'" class="green">预售</button>
                <button v-else>想看</button>
              </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </van-list>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  props: {
    comingSoon: Array,
    getdate: Array
  },
  data() {
    return {
      finished: false,
      loading: false,
      pageNo: -1,
      pageSize: 20
    }
  },
  computed: {
    // ...mapState('film', ['filmList', 'comingSoonList', 'dateList', 'cinemas']),
    // ...mapGetters('film', ['getdate'])
  },

  methods: {
    ...mapMutations('film', [
      'setFilmList',
      'setComingSoonList',
      'setdate',
      'setCinemas'
    ]),
    ...mapActions('film', ['getFilmList', 'getComingSoonList', 'getCinemas']),
    loadFilmList() {
      // console.log(this.$el.scrollTop)
      this.pageNo++
      this.finished = false
      console.log(this.pageNo)
      this.getComingSoonList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        callback: () => {
          this.loading = false
          if (this.pageNo >= 5) {
            this.finished = true
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/common/mixin.scss';

.coming-list {
  //   .van-tabs__content {
  //     padding-top: 44px;
  //   }
  .year {
    background: rgb(239, 239, 239);
    line-height: 30px;
    padding-left: 12px;
  }
  .coming-list-li {
    @include border-bottom;
    padding: 12px 12px 0;
    padding-bottom: 10px;
    a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #1a1a1a;
    }
  }
  .coming-img {
    width: 67px;
    height: 100px;
    padding-right: 3%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .coming-info {
    width: 184px;
    padding-top: 3%;
    padding-bottom: 3%;
    overflow: hidden;
    flex: 1;
    line-height: 1.6;
    height: 100%;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 20px;
    }
    .coming-info-title {
      color: #666;
      font-size: 16px;
      height: 36px;
      //   padding-bottom: 6px;
      //   margin-top: 6px;
    }
  }
  .coming-btn {
    width: 26%;
    height: 25px;
    button {
      margin-top: 16px;
      margin-left: 28px;
      width: 50px;
      height: 25px;
      line-height: 20px;
      border-radius: 2px;
      border: 1px solid #ff5f16;
      color: #ff5f16;
      background: none;
    }
    .green {
      border: 1px solid rgb(107, 188, 233);
      color: rgb(107, 188, 203);
    }
  }
}
</style>

