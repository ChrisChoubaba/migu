<template>
  <div class="MovieList">
    <div class="nav-one">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper mycolor">
          <div
            class="swiper-slide"
            v-for="(item) in imgList1"
            :key="item.imgSrc"
            data-swiper-autoplay="1000"
          >
            <a href="#">
              <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
            </a>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="nav-two">
      <p class="mytitle">影史100个经典角色</p>
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide threeStyle" v-for="item in imgList2" :key="item.imgSrc">
            <div v-if="item.imgSrc">
              <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
              <p>{{item.name}}</p>
              <p>{{item.LONG_NAME}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-three">
      <p class="mytitle">影史100人</p>
      <div class="swiper-container swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide threeStyle" v-for="item in imgList3" :key="item.imgSrc">
            <div v-if="item.imgSrc">
              <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" alt />
              <p>{{item.name}}</p>
              <p>{{item.LONG_NAME}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Nav',
  props: {
    imgs: Array
  },
  data() {
    return {}
  },

  computed: { ...mapState('navImg', ['imgList1', 'imgList2', 'imgList3']) },
  methods: {
    initSwiper() {
      var Myswiper1 = new Swiper('.swiper1', {
        loop: true,
        autoplay: { disableOnInteraction: false },
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 1,
        centeredSlides: true
      })
      var Myswiper2 = new Swiper('.swiper2', {
        slidesPerView: 1
      })
      var Myswiper3 = new Swiper('.swiper3', {
        slidesPerView: 1
      })
    }
  },
  created() {},
  updated() {
    this.initSwiper()
  }
}
</script>
<style lang="scss" >
.MovieList {
  .nav-one {
    background: #efefef;
  }
  .swiper1 {
    .swiper-wrapper {
      a {
        img {
          width: 100%;
          z-index: -9;
        }
      }
    }
  }
  // .nav-two {

  // }
  .swiper3,
  .swiper2 {
    .threeStyle {
      width: 117.188px !important;
      padding-bottom: 5px;
      img {
        height: 175px;
      }
    }
  }
  .swiper-slide {
    p:nth-of-type(1) {
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

    p:last-child {
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
  .mytitle {
    position: relative;
    margin-left: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
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

