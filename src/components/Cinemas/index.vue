<template>
  <div class="cinemas">
    <div class="cinemas-header">
      <div class="cinemas-header-left">附近</div>
      <span class="iconfont icon-xiajiantou-"></span>
    </div>
    <div class="cinema-main">
      <ul class="cinemaList">
        <li v-for="item in cinemas" :key="item.cinemaId">
          <p class="cinemaList-title">{{ item.cinemaName }}</p>
          <p class="address">{{ item.cinemaAdd }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cinemas: Array
  }
}
</script>

<style lang='scss'>
.cinemas-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 42px;
  .cinemas-header-left {
    width: 66px;
    text-align: center;
    line-height: 42px;
    height: 100%;
    color: #f44;
    border-bottom: 2px solid #f44;
  }
  span {
    font-size: 26px;
    margin-right: 16px;
    color: #ccc;
    text-align: center;
    line-height: 42px;
  }
}
.cinema-main {
  overflow-y: auto;
  .cinemaList {
    li {
      height: 86px;
      box-sizing: border-box;
      padding: 5px 12px 10px;
      border-bottom: 1px solid #e7e7e7;
    }
    p {
      height: 30px;
      line-height: 30px;
    }
    .cinemaList-title {
      color: #666;
    }
    .address {
      width: 70%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 14px;
    }
  }
}
</style>
