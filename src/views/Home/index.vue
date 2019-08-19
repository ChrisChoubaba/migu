<template>
  <div  class="page-home">
    <router-view />
    <Tabbar :tabs="tabs" />
  </div>
</template>
<script>
import Tabbar from '../../components/Tabbar/index'
export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '看片', icon: 'icon-watch', href: '/watch'},
        { id: 2, name: '购票', icon: 'icon-buy', href: '/bookTicket'},
        { id: 3, name: '我的', icon: 'icon-my', href: '/personCenter'}
      ]
      
    }
  }
}
</script>
<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  > div:first-child {
    flex: 1;
    overflow: auto;
  }
}
</style>