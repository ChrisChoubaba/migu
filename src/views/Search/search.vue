<template>
  <!-- <van-search placeholder="请输入搜索关键词" v-model="value" />
   -->
<div class="searchPage">
    <van-search
      class="sHeader"
      placeholder="搜影片、找影人"
      show-action
      v-model="value"
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch(value)" ref="btnMsg">{{ this.value !== '' ? '搜索' : '取消' }}</div>
    </van-search>
    <ul class="searchFilmList" ref="searchFilmList">
      <li class="searchFilm" v-for="item in searchList" :key="item.contId">
        <img :src="'http://movie.miguvideo.com/'+item.imgSrcH" alt="">
        <div class="sContent">
          <h1>{{ item.name }}</h1>
          <p class="actor">{{ item.mediaActor.join(',') }}</p>
          <p>{{ item.area }}</p>
        </div>
      </li>
    </ul>
</div>

</template>
<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState('search', [ 'searchList'])
  },
  methods: {
    ...mapMutations('search', ['setSearchFilm']),
    ...mapActions('search', ['getSearchFilm']),
    onSearch (value) {
      // console.log(this.$refs.btnMsg.innerText);
      // 当按钮的值为搜索时，执行数据请求，当点击取消时，跳转页面
      if (this.$refs.btnMsg.innerText === '搜索') {
        this.getSearchFilm(value)
        this.value = ''
        console.log(this.value)
      } else {
        console.log(this.value)
        this.$router.replace({
          path: '/'
        })
      }
    }
  }
}
</script>
<style lang="scss" >
  .searchPage {
    display: flex;
    flex-direction: column;
    .sHeader {
      position: fixed;
      width: 100%;
    }
    .searchFilmList {
      margin-top: 54px;
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
            font-size: 12px;
            line-height: 25px;
          }
          .actor {
            width:200px;
            overflow: hidden;         //超出部分隐藏
            text-overflow: ellipsis;  //用省略号
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
