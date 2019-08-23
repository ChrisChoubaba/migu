<template>
  <van-list :finished="finished" v-model="loading" finished-text="没有更多数据啦" @load="fn1">
    <div class="film-list">
      <ul class="film-list-ul">
        <li v-for="item in films" :key="item.filmId" class="film-list-li">
          <a href="#">
            <div class="film-img">
              <img :src="item.h5pics.highResolutionV" alt />
            </div>
            <div class="film-info">
              <p class="film-info-title">{{ item.filmName }}</p>
              <p class="film-info-director">导演 : {{ item.director}}</p>
              <p class="film-info-actor">{{ item.actor }}</p>
            </div>
            <div class="film-btn">
              <button>购票</button>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </van-list>
</template>
<script>
export default {
  data () {
    return {
      finished: false,
      loading: false
    }
  },
  props: {
    films: Array
  },
  methods: {
    fn1 () {
      setTimeout(() => {
        this.finished = true
        this.loading = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/common/mixin.scss';

.film-list {
  //   .van-tabs__content {
  //     padding-top: 44px;
  //   }
  .film-list-li {
    @include border-bottom;
    padding: 12px 12px 0;
    height: 104px;
    padding-bottom: 6px;
    a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #1a1a1a;
    }
  }
  .film-img {
    width: 67px;
    height: 100px;
    padding-right: 3%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .film-info {
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
    .film-info-title {
      color: #666;
      font-size: 16px;
      height: 36px;
      padding-bottom: 6px;
      margin-top: 6px;
    }
  }
  .film-btn {
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
  }
}
</style>
