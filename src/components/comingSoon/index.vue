<template>
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
              <button>想看</button>
            </div>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    comingSoon: Array,
    getdate: Array
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
      line-height: 25px;
      border-radius: 2px;
      border: 1px solid #ff5f16;
      color: #ff5f16;
      background: none;
    }
  }
}
</style>

