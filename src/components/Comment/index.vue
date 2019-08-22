<template>
  <div class="Comment">
    <li v-for="item in imgList1" :key="item.REDREICT_ID">
      <img :src="'http://movie.miguvideo.com/publish/'+ item.picList[0].imgSrc" alt />
      <p>
        <span>{{item.name}}</span>
      </p>
    </li>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Comment',
  computed: { ...mapState('navImg', ['imgList1']) }
}
</script>
<style lang="scss">
.Comment {
  li {
    position: relative;
    width: 100%;
    margin-bottom: 8px;
    img {
      width: 100%;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      span {
        display: inline-block;
        width: 80%;
        text-align: center;
        color: #fff;
        line-height: 26px;
        font-weight: bold;
        font-size: 16px !important;
      }
    }
  }
}
</style>
