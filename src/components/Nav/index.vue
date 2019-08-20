<template>
  <div class="home-nav">
    <!-- <div class="nav-one"> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item) in imgList1" :key="item.imgSrc">
          <a href="#">
            <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
          </a>
        </div>
      </div>
      <!-- </div> -->
      <div class="nav-two">
        <p>正在售票</p>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Nav',
  data() {
    return {}
  },
  computed: {
    ...mapState('navImg', ['imgList1', 'imgList2', 'imgList3'])
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true
      })
    },
    ...mapActions('navImg', ['getNavImg'])
  },
  mounted() {
    this.getNavImg()
  },
  updated() {
    this.initSwiper()
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  // height: 340px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  // border-bottom: 1px solid #f1f1f1;
  position: relative;
  .swiper-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    // margin: 0 auto;
    position: relative;
    // overflow: hidden;
    // z-index: 1;
    a {
      display: inline-block;
      width: 100%;
      // height: 100%;
      z-index: 1;
      img {
        width: 187.5px;
        z-index: -9;
      }
    }
  }
}
</style>
