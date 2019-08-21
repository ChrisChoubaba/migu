<template>
  <div class="Video">
    <li v-for="item in imgList2" :key="item.picList[0].REDREICT_ID">
      <img :src="'http://movie.miguvideo.com/publish/'+ item.picList[0].imgSrc" alt />
      <p>{{item.name}}</p>
    </li>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Video',
  computed: { ...mapState('navImg', ['imgList2']) }
}
</script>
<style lang="scss" >
.Video {
  li {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #ffffff;
    }
  }
}
</style>
