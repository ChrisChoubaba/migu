<template>
  <van-tabs sticky>
    <van-tab title="正在热映">
      <FilmList :films="filmList" />
    </van-tab>
    <van-tab title="即将上映">
      <comingSoon :getdate="getdate" />
    </van-tab>
  </van-tabs>
</template>

<script>
import FilmList from '../../components/FilmList'
import comingSoon from '../../components/comingSoon'

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  components: {
    FilmList,
    comingSoon
    // Cinemas,
    // hello
  },

  computed: {
    ...mapState('film', ['filmList', 'comingSoonList', 'dateList', 'cinemas']),
    ...mapGetters('film', ['getdate'])
  },
  methods: {
    ...mapMutations('film', [
      'setFilmList',
      'setComingSoonList',
      'setdate',
      'setCinemas'
    ]),
    ...mapActions('film', ['getFilmList', 'getComingSoonList', 'getCinemas'])
  }
}
</script>
