<template>
  <Cinemas :cinemas="cinemas" />
</template>

<script>
import Cinemas from '../../components/Cinemas'

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  components: {
    Cinemas
  },
  computed: {
    ...mapState('film', ['cinemas'])
  },
  methods: {
    ...mapMutations('film', ['setCinemas']),
    ...mapActions('film', ['getCinemas'])
  }
}
</script>
