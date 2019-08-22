<template>
  <!-- <van-search placeholder="请输入搜索关键词" v-model="value" />
   -->
<div class="searchPage">
    <van-search
      placeholder="搜影片、找影人"
      show-action
      v-model="value"
      shape="round"
      @search="onSearch"
      ref="abc"
    >
      <div slot="action" @click="onSearch(value)">{{ this.value !== '' ? '搜索' : '取消' }}</div>
    </van-search>
    <ul class="searchFilmList">
      <li class="searchFilm" v-for="item in 20">
        <img src="http://movie.miguvideo.com/publish/poms/image/3006/738/928/201905231727_1_HSJ720V.jpg" alt="">
        <div class="sContent">
          <h1>复仇者联盟</h1>
          <p>雷·利奥塔,诺曼·瑞杜斯,汤米·弗拉纳根,小库珀·古丁</p>
          <p>美国</p>
        </div>
      </li>
    </ul>
</div>

</template>
<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
    value: ''
    }
  },
  computed: {
    ...mapState('search',[ 'searchList'])
  },
  methods: {
    ...mapMutations('search', ['setSearchFilm']),
    ...mapActions('search', ['getSearchFilm']),
    onSearch (value) {
      console.log(1);
      this.getSearchFilm(value)
      console.log(this.value);
    }
  }
}
</script>
<style lang="scss" >
  .searchPage {
    display: flex;
    flex-direction: column;
    .searchFilmList {
      height: 100px;
      margin-left: 10px;
      margin-right: 10px;
      flex: 1;
      overflow-y: auto;
      // padding-top: 10px;
      .searchFilm {
        border-top: 1px solid rgb(202, 195, 195);
        display: flex;
        margin-bottom: 10px;
        padding-top: 10px;
        img {
          width: 70px;
          height: 100px;
        }
        .sContent {
          margin-left: 10px;
          h1 {
            font-size: 16px;
            font-weight: 900;
          }
          p {
            line-height: 25px;
          }
        }
      }
    }
  }
</style>