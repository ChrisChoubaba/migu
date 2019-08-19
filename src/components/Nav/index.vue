<template>
  <div class="home-nav">
    <div class="nav-one">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in imgList" :key="item.REDREICT_ID">
            <img
              :src="item.list[0] && 'http://movie.miguvideo.com/publish/i_www'+ item.list[0].imgSrc"
              alt
            />
          </div>
        </div>
      </div>
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
    ...mapState('navImg', ['imgList'])
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
.nav-one {
  height: 340px;
  width: 100%;
}
</style>
