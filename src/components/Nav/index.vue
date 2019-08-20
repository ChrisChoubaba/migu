<template>
  <div class="home-nav">
    <div class="nav-one">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper mycolor">
          <div class="swiper-slide" v-for="(item) in imgList1" :key="item.imgSrc">
            <a href="#">
              <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-two">
      <p class="mytitle">正在售票</p>
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in imgList2" :key="item.imgSrc">
            <figure>
              <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
              <figcaption>
                <p>{{item.name}}</p>
                <p>{{item.LONG_NAME}}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-three">
      <p class="mytitle">精彩活动</p>
      <div class="swiper-container swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in imgList3" :key="item.imgSrc">
            <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
          </div>
        </div>
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
      var Myswiper1 = new Swiper('.swiper1', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 2,
        centeredSlides: true
      })
      var Myswiper2 = new Swiper('.swiper2', {
        slidesPerView: 3
      })
      var Myswiper3 = new Swiper('.swiper3', {
        slidesPerView: 1
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
<style lang="scss" >
.home-nav {
  .nav-one {
    background: #efefef;
  }
  .swiper1 {
    .swiper-wrapper {
      padding-top: 30px;
      padding-bottom: 30px;
      a {
        img {
          width: 187.5px;
          z-index: -9;
        }
      }
    }
  }
  .swiper2 {
    img {
      height: 175px;
    }
    figcaption p:first-child {
      line-height: 1.7em;
      padding-left: 12px;
      padding-right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 14px !important;
      color: #666;
      text-align: center;
    }
    figcaption p:last-child {
      line-height: 1.7em;
      padding-left: 12px;
      padding-right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #999;
      font-size: 13px !important;
    }
  }
  .swiper3 {
    img {
      width: 100%;
      height: 140px;
    }
  }
  .mytitle {
    position: relative;
    margin-left: 10px;
    margin-bottom: 30px;
    margin-top: 30px;
    &::before {
      position: absolute;
      top: 0;
      left: -10px;
      width: 2px;
      content: '';
      height: 20px;
      background: #f74444;
    }
  }
}
</style>
