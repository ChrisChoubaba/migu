<template>
  <div class="city">
    <div class="city-header">
      <div class="close" @click="onClickLeft">关闭</div>
      <div class="choose">选择城市</div>
    </div>
    <div class="contentCity">
      <h3 class="contentCity-title">GPS定位您所在的城市</h3>
      <p class="cityDiv">深圳</p>
      <ul>
        <li
          class="cityList"
          v-for="item in cities"
          :key="item.cityName"
          :ref="'item-' + item.cityName"
        >
          <p v-if="item.cityCode" class="title1" id="item.cityName">{{ item.cityName }}</p>
          <p v-else class="title" :id="item.cityName">{{ item.cityName }}</p>
        </li>
      </ul>
      <div class="right">
        <ul class="rightList">
          <li v-for="(item, index) in zm" :key="index" @click="fn1(item)">{{ item.toUpperCase() }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapActions('city', ['getCities']),
    ...mapMutations('city', ['setCities']),
    fn1(zm) {
      console.log(this.$refs[`item-${zm}`][0])
      let itemBox = this.$refs[`item-${zm}`][0]
      let offsetTop = itemBox.offsetTop
      console.log(offsetTop)
      document.documentElement.scrollTop = offsetTop
      console.log(this.$refs['myBox'].scrollTop)
    },
    onClickLeft() {
      this.$router.back()
    }
  },
  created() {
    this.getCities()
  },
  computed: {
    ...mapState('city', ['cities']),
    ...mapGetters('city', ['zm'])
  }
}
</script>


<style lang='scss'>
.city-header {
  width: 100%;
  height: 40px;
  background-color: #eb3452;
  top: 0;
  z-index: 100;
  .close {
    font-size: 14px;
    float: left;
    margin-left: 3.5%;
    color: #fff;
    line-height: 40px;
  }
  .choose {
    width: 200px;
    display: block;
    font-size: 14px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    line-height: 40px;
  }
}
.contentCity {
  margin-top: 20px;
  .title {
    padding: 15px 20px;
    background: #dfe2e7;
    margin: 20px 0;
  }
  .title1 {
    padding: 15px 20px;
    background: #f5f5f5;
    display: block;
    color: #323232;
    border-top: 1px solid #cdccd1;
  }
  .right {
    width: 40px;
    height: 78%;
    background: #7f7f7f;
    opacity: 0.5;
    position: fixed;
    top: 80px;
    right: 15px;
    z-index: 2;
    overflow: hidden;
  }
  .rightList {
    li {
      display: block;
      text-align: center;
      height: 20px;
      color: #fff;
    }
  }
  .contentCity-title {
    padding: 15px 20px;
    background: #dfe2e7;
    font-weight: 600;
    font-size: 20px;
  }
  .cityDiv {
    margin-top: 20px;
    padding: 15px 20px;
    background: #f5f5f5;
    display: block;
    color: #323232;
    border-top: 1px solid #cdccd1;
  }
}
</style>
